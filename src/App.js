import React, { useEffect, useState } from 'react';

import {

  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'
import HomeScreen from './screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ChatScreen from './screens/ChatScreen';
import firestore from '@react-native-firebase/firestore'
import AccountScreen from './screens/AccountScreen';
import Splash from './screens/Splash';
import Joining from './screens/Joining';





// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'green',
//   },
// };

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
const MyTheme1 = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


const Stack = createStackNavigator();


const Navigation = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [user, setuser] = useState('')

  useEffect(() => {
    const unregister = auth().onAuthStateChanged(userExist => {
      if (userExist) {

        firestore().collection('users')
          .doc(userExist.uid)
          .update({
            status: "online"
          })
        setuser(userExist)
      }

      else setuser("")
    })

    return () => {
      unregister()
    }

  }, [])
  const scheme = useColorScheme();
  return (

    
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "green"
        }}

      >
        {user ?
          <>

            <Stack.Screen name="home" options={{
              headerRight: () =>
                <Switch
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />,
              //    <MaterialIcons
              //    name="brightness-medium"
              //    size={34}

              //    style={{ marginRight: 10 }}

              //    onPress={() => {


              //      // firestore().collection('users')
              //      //   .doc(user.uid)
              //      //   .update({
              //      //     status: firestore.FieldValue.serverTimestamp()
              //      //   }).then(() => {
              //      //     auth().signOut()
              //      //   })


              //    }}
              //  />,


              title: "KhapShap"
            }}>
              {props => <HomeScreen {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="account">
              {props => <AccountScreen {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="chat" options={({ route }) => ({ title: <View><Text>{route.params.name}</Text><Text>{route.params.status}</Text></View> })}>
              {props => <ChatScreen {...props} user={user} />}
            </Stack.Screen>


          </>
          :
          <>

            {/* <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} /> */}
            <Stack.Screen name="joining" component={Joining} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
          </>
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const App = () => {


  return (
    <>
    {/* theme={theme} */}
      <PaperProvider theme={scheme === 'dark' ? MyTheme : MyTheme1} >
        <StatusBar barStyle="light-content" backgroundColor="green" />
        <View style={styles.container}>
          <Navigation />
        </View>
      </PaperProvider>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  }
});

export default App;