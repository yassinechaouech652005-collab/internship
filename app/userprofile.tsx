import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default function UserProfile() {
  const [fullName, setFullName] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = () => {
    if (!fullName || !userId) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    router.push('/welcome');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>User Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Next" onPress={handleSubmit} color="#1976d2" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fffde7',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#f9a825',
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 6,
    paddingHorizontal: 12,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
