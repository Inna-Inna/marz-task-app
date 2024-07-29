import React from "react";
import ProductList from "./ProductList";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Product Item List",
    component: ProductList
} as ComponentMeta<typeof ProductList>;
const Template: ComponentStory<typeof ProductList> = (args) =>
    <ProductList {...args} />;

const getArgs = (ProductStatus: string) => ({
    items: [
        {ProductID: 1234, ProductName: "Test Product 1", ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg', ProductStatus,},
        {ProductID: 2345, ProductName: "Test Product 2", ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg', ProductStatus,},
        {ProductID: 3456, ProductName: "Test Product 3", ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg', ProductStatus,},
        {ProductID: 4567, ProductName: "Test Product 4", ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg', ProductStatus,},
    ],
});

export const ActiveProduct = Template.bind({});
ActiveProduct.args = getArgs('Active');

export const InActiveProduct = Template.bind({});
InActiveProduct.args = getArgs('InActive');
