import React from 'react';

const DefaultLayout = ({className, children}) => {
    return (
        <div className ={className}>
            {children}
        </div>
    )
}

export default DefaultLayout;