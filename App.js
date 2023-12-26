import * as React from 'react';
import { StyleSheet } from 'react-native';
import Splash from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/Homepage';
import PersonalLoan from './screens/PersonalLoan';
import HomeLoan from './screens/HomeLoan';
import BusinessLoan from './screens/BusinessLoan';

const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <View style={styles.main}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Homepage' component={Homepage}/>
          <Stack.Screen name='PersonalLoan' component={PersonalLoan}/>
          <Stack.Screen name='HomeLoan' component={HomeLoan}/>
          <Stack.Screen name='BusinessLoan' component={BusinessLoan}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:0,
    top:0
  },
});

export default App;