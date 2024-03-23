import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col item-center mt-20">
            {children}
        </div>
    );
}

export default Layout;