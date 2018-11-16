import React from 'react';
import {StandardProps} from "../types/StandardProps";

interface Props extends StandardProps {
    label?: string;
}

const Panel: React.FunctionComponent<Props> = (props) => {
    const {label, children, ...restProps} = props;
    const tsProps = {'data-ts.label': label || ''};

    return (
        <div data-ts="Panel" {...tsProps} {...restProps}>
            {children}
        </div>
    );
};

export default Panel;
