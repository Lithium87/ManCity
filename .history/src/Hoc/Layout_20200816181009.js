import React from 'react';

const Layout = (props) => {
    return (
        <div>
            Hello
            {props.children}
        </div>
    );
};

export default Layout;