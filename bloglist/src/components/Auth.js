import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { logoutUser } from '../reducers/authReducer';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1rem;
    padding: 0.25rem 1rem;

    ${(props) =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `};
`;

const StyledDiv = styled.div`
    display: inline;
`;

const Auth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    return (
        <StyledDiv>
            {user.name} logged in{' '}
            <Button primary onClick={() => dispatch(logoutUser())}>
                logout
            </Button>
        </StyledDiv>
    );
};

export default Auth;
