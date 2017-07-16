import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = ({className, children}) => {
    return (
        <div className ={className}>
            {children}
        </div>
    )
}

export default DefaultLayout;