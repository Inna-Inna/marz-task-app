import React, { useEffect } from "react";
import { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableList from "../../components/DraggableList/DraggableList";
import { Order, OrderData } from "../../components/interfaces";
import { getInPipelineData, updateOrderStatus } from "../ApiHelper";
import {DATA_STATES} from "../../constants";
import MainContent from "../MainContent";


interface IdList {
  '0': string;
  '1': string;
  '2': string;
}

const ID_LIST_MAP: IdList = {
  '0': 'Queued',
  '1': 'InProgress',
  '2': 'QA'
};

const HomePage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState({Queued: [], InProgress: [], QA: []} as OrderData);

  const getOrders = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { orderData, errorOccured } = await getInPipelineData();
    setData(orderData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  const updateOrder = async (order: Order) => {
    setLoadingState(DATA_STATES.waiting);
    const newOrderStatus = order.OrderStatus === 'QA' ? 'Complete' : 'Cancelled';
    const orderStatusUpdated = await updateOrderStatus(order, newOrderStatus);
    if (orderStatusUpdated) {
      const columnKey = order.OrderStatus as keyof OrderData
      setData({
        ...data,
        [columnKey]: data[columnKey].filter(
          (otherOrder: Order) => otherOrder.OrderID !== order.OrderID
        ),
      });
    }
    setLoadingState(DATA_STATES.loaded);
  };

  const handleDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceKey = ID_LIST_MAP[source.droppableId as keyof IdList] as keyof OrderData;
    const sourceIndex = source.index;

    const destKey = ID_LIST_MAP[destination.droppableId as keyof IdList] as keyof OrderData;
    const destIndex = destination.index;

    if (sourceKey === destKey) {
      const sourceClone = Array.from(data[sourceKey]);
      const [removed] = sourceClone.splice(sourceIndex, 1);
      sourceClone.splice(destIndex, 0, removed);
      setData({ ...data, [sourceKey]: sourceClone });
    }
    else {
        const sourceClone = Array.from(data[sourceKey]);
        const destClone = Array.from(data[destKey]);
        const [removed] = sourceClone.splice(sourceIndex, 1);
        destClone.splice(destIndex, 0, removed);
        destClone[destIndex].OrderStatus = destKey;
        setData({
          ...data,
          [sourceKey]: sourceClone,
          [destKey]: destClone,
        });
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  let content;
  content = (
    <div
      className="flex flex-row justify-center w-full pt-4"
      data-testid="pipeline-container"
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <DraggableList
          ID='0'
          listTitle='Queued'
          removeOrder={(order: Order) => updateOrder(order)}
          items={data.Queued}
        />
        <DraggableList
          ID='1'
          listTitle='In Progess'
          removeOrder={(order: Order) => updateOrder(order)}
          items={data.InProgress}
        />
        <DraggableList
          ID='2'
          listTitle='QA'
          removeOrder={(order: Order) => updateOrder(order)}
          items={data.QA}
        />
      </DragDropContext>
    </div>
  );

  return (
    <MainContent loadingState={loadingState} content={content}/>
  );
}

export default HomePage;