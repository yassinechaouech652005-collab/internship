import React from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function OfficialPage() {
  const openArticle = () => {
    Linking.openURL('https://reactnative.dev/docs/getting-started'); // example link
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Official React Native Documentation</Text>
      <Text style={styles.description}>
        This app uses React Native. You can learn more from the official docs.
      </Text>

      <Button title="Open React Native Docs" onPress={openArticle} color="#1565c0" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#e3f2fd',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#0d47a1',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    color: '#1e88e5',
    textAlign: 'center',
  },
});
