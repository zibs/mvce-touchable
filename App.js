/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            // activeOpacity={1}
            // renderToHardwareTextureAndroid={true}
            style={{
              width: 65,
              height: 65,
              borderRadius: 65,
              backgroundColor: 'rgba(123,123,224,0.4)',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                height: 0,
                width: 0,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 3,
            }}>
            <Text>Press</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
