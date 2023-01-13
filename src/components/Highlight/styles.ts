import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xl}px;
    font-family: ${theme.fonts.family.bold};
    color: ${theme.colors.white};
  `};
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fonts.size.md}px;
    font-family: ${theme.fonts.family.regular};
    color: ${theme.colors.gray.semilight};
  `};
`;