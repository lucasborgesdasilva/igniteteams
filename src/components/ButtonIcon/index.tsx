import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap; //Usado para mostrar as opções que essa tipagem oferece, lá na hora de passar o icone.
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props){
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}