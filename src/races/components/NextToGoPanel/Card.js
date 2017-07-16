import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from 'grid-styled';
import Typography from '../../../components/Typography';
import { normalizeString } from '../../../utils/string';
import TimeAgo from 'react-timeago';
import { Animation } from 'styled-animation';
import { darken } from 'polished';

import RaceIcon from '../RaceIcon';

const themeAccentBackgroundMixin = css`
    background: ${ ({theme}) => theme.colors.accent };
    color: ${ ({theme}) => theme.colors.light };
    border-color: ${ ({theme}) => darken(0.1, theme.colors.accent) };
`

const Card  = ({className, race, meeting, imminent, ...rest}) => {
    let {raceNumber, raceStartTime } = race;
    let {location, meetingName, raceType } = meeting;

    return (
        <Animation className={ className } name="fadeIn">
            <Flex  align="stretch" width={1} >
                <Flex align="center" p={2} width={120}><RaceIcon icon={raceType} color={imminent ? "#FFF" : "#000" } /></Flex> 
                <Flex column={true} align="stretch"  {...rest}>
                    <Typography component="h3">R{raceNumber}</Typography>
                    <TimeAgo date={raceStartTime} ></TimeAgo>
                    <Typography component="p">{normalizeString(meetingName)} ({location})</Typography>
                </Flex>
            </Flex>
    </Animation>)};

const StyledCard = styled(Card)`
    border:solid 1px #CCC;
    border-radius: 2px;
    ${ ({imminent}) => imminent ?  themeAccentBackgroundMixin : null };
    transition: all 300ms ease-in-out;
    transition-property: background-color, color;
    display: flex;
    width: 100%;
`;

export { Card, StyledCard };

export default StyledCard;
