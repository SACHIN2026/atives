import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const MainContent = styled.main`
  flex: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
