import React, {DetailedHTMLProps} from 'react';

interface Props extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label?: string;
}

const Panel: React.FunctionComponent<Props> = (props) => {
    const {label, children, ...restProps} = props;
    const tsProps = {'data-ts.label': label};

    return (
        <div data-ts="Panel" {...tsProps} {...restProps}>
            {children}
        </div>
    );
};

export default Panel;
