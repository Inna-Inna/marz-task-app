import React from "react";
import {DATA_STATES} from "../constants";
import Spinner from "../components/Spinner/Spinner";
import PageWrapper from "./PageWrapper";
import {MainContentProps} from "../components/interfaces";

export const MainContent = (props: MainContentProps) => {
    const {loadingState, content} = props;
    let mainContent;
        if (loadingState === DATA_STATES.waiting)
            mainContent = (
                <div
                    className="flex flex-row justify-center w-full pt-4"
                    data-testid="loading-spinner-container"
                >
                    <Spinner />
                </div>
            );
        else if (loadingState === DATA_STATES.loaded)
            mainContent = content;
        else
            mainContent = (
                <div
                    className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
                    data-testid="error-container"
                >
                    An error occurred fetching the data!
                </div>
            );
        return (
            <PageWrapper>
                { mainContent }
            </PageWrapper>
        );
};

export default MainContent
