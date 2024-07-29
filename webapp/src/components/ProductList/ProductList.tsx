import React from 'react';
import {ProductListProps} from "../interfaces";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = (props: ProductListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                props.items.length > 0 && props.items.map((product, index) => (
                <ProductItem
                    key={product.ProductID}
                    ProductID={product.ProductID}
                    ProductName={product.ProductName}
                    ProductStatus={product.ProductStatus}
                    ProductPhotoURL={product.ProductPhotoURL}
                />
            ))}
        </div>
    );
};

export default ProductList;
