import React from 'react';
import {StandardProps} from "../types/StandardProps";

interface Props extends StandardProps {
}

const MainContent: React.FunctionComponent<Props> = (props) => {
    const {children, ...restProps} = props;

    return (
        <div data-ts="MainContent" {...restProps}>
            {children}
        </div>
    );
};

export default MainContent;
