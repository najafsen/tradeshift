import React, {DetailedHTMLProps} from 'react';

interface Props extends DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

const Header: React.FunctionComponent<Props> = (props) => {
    const {children, ...restProps} = props;

    return (
        <header data-ts="TopBar" {...restProps}>
            {children}
        </header>
    );
};

export default Header;