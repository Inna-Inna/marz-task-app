import React, {useEffect, useState} from "react";
import PageWrapper from '../PageWrapper';
import {DATA_STATES} from "../../constants";
import {getProductsData} from "../ApiHelper";
import Spinner from "../../components/Spinner/Spinner";
import {ProductData} from "../../components/interfaces";

const ProductsPage = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistent across logins.
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState<ProductData>({ items: [] });

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { productData, errorOccured } = await getProductsData();
    setData(productData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let content;
  if (loadingState === DATA_STATES.waiting)
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.loaded)
    content = (
        <h1 className="text-3xl font-bold text-white">
            Product Page Goes Here
        </h1>
    );
  else
      content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occurred fetching the data!
      </div>
    );
  return (
    <PageWrapper>
      { content }
    </PageWrapper>
  );
};

export default ProductsPage
