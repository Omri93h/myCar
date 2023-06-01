import React from 'react';

import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowHeight = Dimensions.get('window').height;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Image style={styles.icon} source={require('./logo.png')} />
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            To access the app,{'\n'}Please enter your information below
          </Text>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('./src/img/messageSquare.png')} />
            <TextInput style={styles.input} placeholder="Email"></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('./src/img/callSquare.png')} />
            <TextInput style={styles.input} placeholder="Phone Number"></TextInput>
          </View>
        </View>

        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Need help?{'\n'}Contact us!</Text>
          <LinearGradient
            colors={['#fdfd96', '#c32148']}
            style={styles.linearGradient}
            start={{ x: 0.1, y: 0.1 }}>
            <Image
              style={styles.arrowImage}
              source={require('./src/img/arrow.png')}
            />
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    borderWidth: 4,
  },
  rootContainer: {
    borderWidth: 2,
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    zIndex: 1,
  },
  loginContainer: {
    width: '100%',
    height: windowHeight * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    // backgroundColor:'green'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  helpContainer: {
    width: '100%',
    height: windowHeight * 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    width: '75%',
    margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
  loginText: {
    fontSize: 15,
    padding: 20
  },
  helpText: {
    fontSize: 20,
  },
  helpLink: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  icon: {
    width: 175,
    height: 50,
  },
  arrowImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    transform: [{ rotate: '180deg' }],
  },
  inputIcon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 55,
    borderRadius: 50,
  },
});

export default App;
