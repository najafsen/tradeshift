import React from 'react';
import {StandardProps} from '../types/StandardProps';

interface Props extends StandardProps {
}

const Form: React.FunctionComponent<Props> = (props) => {
    const {children, ...restProps} = props;

    return (
        <form data-ts="Form" {...restProps}>
            {children}
        </form>
    );
};

export default Form;
