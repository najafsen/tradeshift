import React, {DetailedHTMLProps} from 'react';

interface Props extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
