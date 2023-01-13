import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.gray.semidark};

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.fonts.size.md}px;
    color: ${theme.colors.gray.light};
    font-family: ${theme.fonts.family.regular};
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray.light,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;