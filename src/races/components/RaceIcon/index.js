import React from 'react';
import Harness from './Harness';
import Greyhound from './Greyhound';
import Horse from './Horse';
import styled from 'styled-components';

const StyledIcon = (component) => {
    return styled(component)`
    fill: ${ ({color}) =>  color ? color : "#000" } ;
    width: 100%; 
`};

const icons = {
    "h" : Harness,
    "harness": Harness,
    "r": Horse,
    "horse": Horse,
    "greyhound" : Greyhound,
    "g" : Greyhound
}

const RaceIcon = ({className, icon: Icon, ...rest}) => {
    if(typeof Icon === "string"){
        Icon = icons[Icon.toLowerCase()];
    }

    if(Icon === null || Icon === undefined)
        return null;

    let Component = StyledIcon(Icon); 
    return (<Component className={className} {...rest}/>)
}

export { RaceIcon, Harness, Horse, Greyhound }
export default RaceIcon;