import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.message}>You have successfully logged in and completed your profile.</Text>

      <View style={{ marginTop: 30 }}>
        <Button
          title="Go to Official Page"
          onPress={() => router.push('/officialpage')}
          color="#388e3c"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#e8f5e9',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    color: '#4caf50',
    textAlign: 'center',
  },
});
