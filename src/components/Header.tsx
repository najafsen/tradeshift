import React from 'react';
import {StandardProps} from '../types/StandardProps';

interface Props extends StandardProps {
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