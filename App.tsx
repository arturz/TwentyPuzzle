import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {GameScreen} from './screens/GameScreen';
import {HighScoreScreen} from './screens/HighScoreScreen';
import {ScreenName} from './constants/ScreenName';
import {RootStackParamList} from './types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
        <Stack.Screen name={ScreenName.Game} component={GameScreen} />
        <Stack.Screen name={ScreenName.HighScore} component={HighScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
