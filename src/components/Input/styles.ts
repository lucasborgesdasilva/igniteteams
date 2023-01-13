import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray.extradark};
    color: ${theme.colors.white};
  
    font-size: ${theme.fonts.size.md}px;
    font-family: ${theme.fonts.family.regular};
  `};

  border-radius: 6px;
  padding: 16px;
`;