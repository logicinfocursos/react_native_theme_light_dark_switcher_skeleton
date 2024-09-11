import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemeProvider, ThemeContext } from './contexts/theme.context';

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
});