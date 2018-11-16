import React from 'react';
import {StandardProps} from "../types/StandardProps";

interface Props extends StandardProps {
}

const Main: React.FunctionComponent<Props> = (props) => {
    const {children, ...restProps} = props;

    return (
        <div data-ts="Main" {...restProps}>
            {children}
        </div>
    );
};

export default Main;
