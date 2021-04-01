import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
    width: 100%;
    height: 60px;
    margin: 3px 1px;
    padding: 15px 20px;
    border-radius: 10px;
    backround-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    color: ${({ theme }) => theme.text};
`;

const Input = () => {
    return <StyledInput />;
};

export default Input;
