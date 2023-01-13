import { NavigationContainer } from '@react-navigation/native';//Core de navegação, do React Navigation, Serve como context para compartilhar para toda a aplicação as rotas.
import { AppRoutes } from './app.routes';

export function Routes(){
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}