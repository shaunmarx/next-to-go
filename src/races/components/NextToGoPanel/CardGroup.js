import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Typography from '../../../components/Typography';
import { space } from "styled-system";
import PanelTitle from './PanelTitle';

const CardGroup = ({className, title, children}) =>{
    return <Flex className={className} column={true}>
        <PanelTitle p={2} backgroundColor="#CCC" color="#000">
            <Typography component="h3">{title}</Typography>
        </PanelTitle>

        {children}
    </Flex>
};

export default CardGroup;