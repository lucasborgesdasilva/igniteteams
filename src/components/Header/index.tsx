import { BackButton, BackIcon, Container, ContainerWrapper, Logo } from './styles';

import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

type Props = {
  showBackButton?: boolean;
}


export function Header({ showBackButton = false }: Props){
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('groups');
  }

  return (
    <Container>
      <ContainerWrapper showBackButton={showBackButton}>
        {showBackButton &&
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>
        }
        <Logo source={logoImg}/>
      </ContainerWrapper>
    </Container>
  )
}