import React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { space } from "styled-system";

const PanelTitle = ({className, children}) => (<Flex className={className}>{children}</Flex>);

export default styled(PanelTitle)`
    background-color: ${({backgroundColor, theme }) => backgroundColor ? backgroundColor : theme.colors.dark };
    color: ${({color, theme }) => color ? color : theme.colors.light };
    ${space}
`;
