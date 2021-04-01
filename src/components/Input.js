import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, useWindowDimensions } from 'react-native';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 1px;
    padding: 15px 20px;
    border-radius: 10px;
    backround-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder }) => {

    const width = Dimensions.get('window').width;

    return (
    <StyledInput 
        width={width} 
        placeholder={placeholder} 
        maxLength={50}
        autoCaptialize="none"
        autoCorrect={false}
        returnKeyType="done"
        keyboardAppearance="dark"
    />
    );
};

export default Input;
