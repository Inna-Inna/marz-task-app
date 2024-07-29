import React from "react";
import { create, ReactTestRenderer} from 'react-test-renderer';
import ProductItem from './ProductItem';

describe('ProductItem', () => {
    const props = {
        ProductID: 1234,
        ProductName: "Test Product 1",
        ProductPhotoURL: "/test1",
        ProductStatus: "Active",
    };

    let tree: ReactTestRenderer;
    beforeEach(() => {
        tree = create(<ProductItem {...props} />);
    });
    afterEach(() => {
        tree.unmount();
    });
    it('rendersProductItem', async () => {
        const testInstance = tree.root;
        const productItem = await testInstance.findByProps(
            { 'data-testid': `product-item-${props.ProductID}`}
        );
        expect(productItem).toBeTruthy();

        const productName = await testInstance.findByType('h2');
        expect(productName.children.includes(props.ProductName)).toBe(true);

        const productImage = await testInstance.findByType('img');
        expect(productImage.props.src).toBe(props.ProductPhotoURL);
        expect(productImage.props.alt).toBe(props.ProductName);
    });
});
