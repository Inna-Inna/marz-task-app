import { ReactElement } from 'react';
import type { DraggableProvided } from 'react-beautiful-dnd';

export interface Order {
    OrderID: number;
    CustomerID: number;
    ProductID: number;
    OrderStatus: string;
}

export interface OrderData {
  Queued: Order[],
  InProgress: Order[],
  QA: Order[],
}

export interface Product{
    ProductID: number;
    ProductName: string
    ProductPhotoURL: string;
    ProductStatus: string;
}

export interface ProductData {
    items: Product[];
}

export interface ProductListProps {
    items: Product[];
}

export interface DraggableItemProps extends Order{
    draggableProvided: DraggableProvided;
    removeOrder: (order: Order) => void;
}

export interface DraggableListProps {
    ID: string;
    listTitle: string;
    removeOrder: (order: Order) => void;
    items: Order[];
}

export interface HeaderLink {
    label: string;
    url: string;
}

export interface HeaderProps {
    links: HeaderLink[];
}

export interface MainContentProps {
    loadingState: string;
    content: ReactElement;
}
