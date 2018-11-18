import React, {DetailedHTMLProps} from 'react';

interface Props extends DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
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
