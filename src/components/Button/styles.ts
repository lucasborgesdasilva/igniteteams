import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.colors.green.dark : theme.colors.red.dark };

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.md}px;
    font-family: ${theme.fonts.family.bold};
    color: ${theme.colors.white};
  `};
`;