import React from 'react';
import { render, screen } from '@testing-library/react'
import ProductList from './ProductList';

describe('ProductList', () => {
    it('rendersProductList', async () => {
        const props = {
            items: [
                {ProductID: 1234, ProductName: "Test Product 1", ProductPhotoURL: '/test1', ProductStatus: 'Active',},
                {ProductID: 2345, ProductName: "Test Product 2", ProductPhotoURL: '/test2', ProductStatus: 'Active',},
                {ProductID: 3456, ProductName: "Test Product 3", ProductPhotoURL: '/test3', ProductStatus: 'InActive',},
            ],
        };
        render(
            <ProductList {...props} />
        );
        expect(screen.getByText(`Test Product 1`)).toBeInTheDocument();
        expect(screen.getByText(`Test Product 2`)).toBeInTheDocument();
        expect(screen.getByText(`Test Product 3`)).toBeInTheDocument();
    });
});
