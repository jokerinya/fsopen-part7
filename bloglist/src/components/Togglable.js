import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 0.25rem 1rem;

    ${(props) =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `};
`;

// const Togglable = forwardRef((props, refs)=>{})
const Togglable = forwardRef((props, refs) => {
    const [visible, setVisible] = useState(false);

    const hideWhenVisible = { display: visible ? 'none' : '' };
    const showWhenVisible = { display: visible ? '' : 'none' };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useImperativeHandle(refs, () => {
        return {
            toggleVisibility,
        };
    });

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <Button primary onClick={toggleVisibility}>
                    cancel
                </Button>
            </div>
        </div>
    );
});

Togglable.displayName = 'Togglable';

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};

export default Togglable;
