import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductItem from "./ProductItem";

export default {
    title: "Product Item",
    component: ProductItem
} as ComponentMeta<typeof ProductItem>;
const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

const getArgs = (ProductStatus: string) => ({
    ProductID: 1234,
    ProductName: "Test Product",
    ProductPhotoURL: 'https://i.imgur.com/PN4m1So.jpg',
    ProductStatus,
});

export const ActiveProduct = Template.bind({});
ActiveProduct.args = getArgs('Active');

export const InActiveProduct = Template.bind({});
InActiveProduct.args = getArgs('InActive');
