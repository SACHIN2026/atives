import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${props => props.theme.shadows.sm};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

const Logo = styled(Link)`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  position: relative;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.gray[600]};
  font-weight: ${props => props.active ? props.theme.fontWeights.medium : props.theme.fontWeights.normal};
  text-decoration: none;
  transition: color 0.2s ease;
  border-radius: ${props => props.theme.borderRadius.md};

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.gray[100]};
  }

  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background: ${props.theme.colors.primary};
      border-radius: 50%;
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MenuLine = styled(motion.div)<{ isOpen: boolean }>`
  width: 24px;
  height: 2px;
  background: ${props => props.theme.colors.gray[600]};
  border-radius: 1px;
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
  box-shadow: ${props => props.theme.shadows.lg};
  padding: ${props => props.theme.spacing.md};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)<{ active?: boolean }>`
  display: block;
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.gray[700]};
  font-weight: ${props => props.active ? props.theme.fontWeights.medium : props.theme.fontWeights.normal};
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.md};
  margin-bottom: ${props => props.theme.spacing.sm};

  &:hover {
    background: ${props => props.theme.colors.gray[100]};
  }
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  flex: 1;
  margin: 0 ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
  border: 2px solid ${props => props.theme.colors.gray[200]};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  background: ${props => props.theme.colors.gray[100]};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray[500]};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.gray[500]};
  pointer-events: none;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const NotificationButton = styled.button`
  position: relative;
  padding: ${props => props.theme.spacing.sm};
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray[600]};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.gray[100]};
    color: ${props => props.theme.colors.primary};
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  background: ${props => props.theme.colors.error};
  border-radius: 50%;
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/explore', label: 'Explore' },
    { path: '/profile', label: 'Profile' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Atives</Logo>
        
        <SearchContainer>
          <SearchIcon>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </SearchIcon>
          <SearchInput 
            placeholder="Search for creatives, projects, jobs..." 
            type="search"
          />
        </SearchContainer>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              active={isActive(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <UserActions>
          <NotificationButton>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
            <NotificationBadge />
          </NotificationButton>

          <motion.img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b898?w=40&h=40&fit=crop&crop=face"
            alt="Profile"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              border: '2px solid transparent'
            }}
            whileHover={{ 
              scale: 1.05,
              borderColor: '#6C5CE7'
            }}
            whileTap={{ scale: 0.95 }}
          />
        </UserActions>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuLine
            isOpen={isMobileMenuOpen}
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <MenuLine
            isOpen={isMobileMenuOpen}
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <MenuLine
            isOpen={isMobileMenuOpen}
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.path}
                  to={item.path}
                  active={isActive(item.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
