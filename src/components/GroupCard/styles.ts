import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  
  background-color: ${({ theme }) => theme.colors.gray.semidark};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.md}px;
    font-family: ${theme.fonts.family.regular};
    color: ${theme.colors.gray.light};
  `};
`; 

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.green.dark,
  weight: 'fill'
}))`
  margin-right: 20px;
`;