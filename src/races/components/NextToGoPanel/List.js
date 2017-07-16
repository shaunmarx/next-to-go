import React from 'react';
import { Flex } from 'grid-styled';
import Card from './Card';

const List = ({className, races, meetings}) => { 
    var cards = races.map(race => (
    <Flex key={race.id} width={[1, 6/12, 4/12]} >
        <Card race={race} imminent={race.imminent} meeting={meetings[race.meeting]} width={1} p={1} m={1}/>
    </Flex>));
      
    return (<Flex justify="space-between" align="flex-start" wrap={true} >{cards}</Flex>)
}

export default List;


