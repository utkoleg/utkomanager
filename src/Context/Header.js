import React from 'react';
import styled from 'styled-components';

// Styled components for the header
const HeaderContainer = styled.header`
  
  font-size: 30px;
  background-color: #0d1137;
  color: white;
  padding: 16px;
  text-align: center;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 45px;
`;

const Subtitle = styled.p`
  font-size: 15px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>[utkomanager]</Title>
            <Subtitle>simple task manager for you</Subtitle>
        </HeaderContainer>
    );
};

export default Header;
