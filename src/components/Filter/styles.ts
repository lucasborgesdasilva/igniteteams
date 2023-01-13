import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 1px solid  ${theme.colors.green.dark};
  `};

  border-radius: 4px;
  margin-right: 12px;

  width: 70px;
  height: 38px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.family.bold};
    font-size: ${theme.fonts.size.sm}px;
    color: ${theme.colors.white};
  `}
`;
