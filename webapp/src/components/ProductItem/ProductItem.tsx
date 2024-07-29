import React from 'react';
import {Product} from "../interfaces";

const ProductItem = (props: Product) => {
    return (
        <div
            key={props.ProductID}
            data-testid={`product-item-${props.ProductID}`}
            className="bg-neutral-300 border p-4 rounded-lg shadow-lg"
        >
            <img src={props.ProductPhotoURL} alt={props.ProductName} className="w-full h-48 object-cover rounded-md"/>
            <h2 className="mt-4 text-xl text-neutral-600 font-bold">{props.ProductName}</h2>
            <p className={`mt-2 text-sm ${props.ProductStatus === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                {props.ProductStatus}
            </p>
        </div>
    );
};

export default ProductItem
