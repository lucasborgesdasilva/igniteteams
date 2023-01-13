import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

interface HeaderProps {
  showBackButton?: boolean;
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerWrapper = styled.View<HeaderProps>`
  flex: 1;
  flex-direction: row;
  justify-content: ${({ showBackButton }) => showBackButton ? 'space-between' : 'center'} ;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 32
}))``;