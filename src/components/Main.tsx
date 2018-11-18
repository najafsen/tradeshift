import React, {DetailedHTMLProps} from 'react';

interface Props extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
