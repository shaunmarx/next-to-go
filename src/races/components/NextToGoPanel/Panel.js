import React from 'react';
import { Flex, Box } from 'grid-styled';
import List from './List';
import Typography from '../../../components/Typography';
import PanelTitle from './PanelTitle';
import { groupBy, keys } from 'ramda';
import CardGroup from './CardGroup';

var groupMaps = {
    "H" : "Harness",
    "G" : "Greyhounds",
    "R" : "Horse Racing"
}

const mapGroups = (meetings, groups) =>{
    var groupKeys = keys(groups);

    return groupKeys.map(x => (
        <CardGroup key={x} title={x}>
            <List races={groups[x]} meetings={meetings}/>
        </CardGroup>)
    );
}

const Panel = ({className, races, meetings, title = "Next To go", group=true}) => {
    var view = (<List races={races} meetings={meetings}/>);
    
    if(group){
        var groups =  groupBy(x => groupMaps[meetings[x.meeting].raceType], races);
        view = mapGroups(meetings, groups);
    }

    return (<Flex className={className} align="stretch" column={true}>
        <PanelTitle pl={2}>
            <Typography component="h2">{title}</Typography>
        </PanelTitle>
        {view}

    </Flex>)
}; 

export default Panel;