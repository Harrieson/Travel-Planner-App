import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Homescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
