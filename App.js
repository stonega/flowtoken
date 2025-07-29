import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme} from 'react-native';
import AnimatedMarkdown from './src/components/AnimatedMarkdown';
import { text } from './stories/TestMarkdown';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AnimatedMarkdown content={text} />
    </SafeAreaView>
  );
};

export default App;
