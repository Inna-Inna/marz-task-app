import React, {useEffect, useState} from "react";
import {DATA_STATES} from "../../constants";
import {getProductsData} from "../ApiHelper";
import {ProductData} from "../../components/interfaces";
import ProductList from "../../components/ProductList/ProductList";
import MainContent from "../MainContent";


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
    content = (
        <div
            className="flex flex-row justify-center w-full pt-4"
            data-testid="products-container"
        >
            <ProductList items={data.items} />
        </div>
    );
    return (
        <MainContent loadingState={loadingState} content={content}/>
    );
};

export default ProductsPage
