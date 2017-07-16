import React from 'react';
import { Flex } from 'grid-styled';
import Typography from '../../../components/Typography';
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