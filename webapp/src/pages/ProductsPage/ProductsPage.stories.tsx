import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import {PRODUCTS_URL} from "../ApiHelper";

export default {
    title: 'Products Page',
    component: ProductsPage,
    decorators: [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage/>;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: PRODUCTS_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                        ProductID: 1234,
                        ProductName: "Test Product 1",
                        ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg',
                        ProductStatus: "Active",
                    },
                    {
                        ProductID: 2345,
                        ProductName: "Test Product 2",
                        ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg',
                        ProductStatus: "Active",
                    },
                    {
                        ProductID: 3456,
                        ProductName: "Test Product 3",
                        ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg',
                        ProductStatus: "InActive",
                    },
                    {
                        ProductID: 4567,
                        ProductName: "Test Product 4",
                        ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg',
                        ProductStatus: "InActive",
                    },
                ],
                message: ""
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: PRODUCTS_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: PRODUCTS_URL,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
    ],
};
