import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Auth from './Auth';

const StyledNavigation = styled.div`
    background: #d3d3d3;
`;

const Navigation = () => {
    return (
        <StyledNavigation>
            <Link style={{ padding: 5 }} to='/'>
                blogs
            </Link>
            <Link style={{ padding: 5 }} to='/users'>
                users
            </Link>
            <Auth />
        </StyledNavigation>
    );
};

export default Navigation;
