import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import Auth from './Auth';

const StyledNavigation = styled.div`
    background: #d3d3d3;
    margin: 0 -1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;

const StyledLinks = styled.div`
    display: flex;
`;

const inlineStyle = {
    padding: 5,
    fontWeight: 'bold',
    fontSize: '1.5rem',
};

const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledLinks>
                <Link style={inlineStyle} to='/'>
                    Blogs
                </Link>
                <Link style={inlineStyle} to='/users'>
                    Users
                </Link>
            </StyledLinks>
            <Auth />
        </StyledNavigation>
    );
};

export default Navigation;
