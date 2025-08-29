import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const foodItems = [
  {
    id: '1',
    name: 'Cheesy Burger',
    description: 'Juicy beef patty with melted cheese, lettuce, and tomato.',
    price: '$5.99',
    image: 'https://i.imgur.com/3r5uR1W.png', // Example burger image
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description: 'Classic pizza topped with pepperoni and mozzarella.',
    price: '$8.49',
    image: 'https://i.imgur.com/VzE3bE2.png', // Example pizza image
  },
  {
    id: '3',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese, bacon, and sauce.',
    price: '$4.29',
    image: 'https://i.imgur.com/KkR6LfL.png', // Example fries image
  },
  {
    id: '4',
    name: 'Chicken Nuggets',
    description: 'Crunchy golden chicken nuggets served with dip.',
    price: '$3.99',
    image: 'https://i.imgur.com/jB2fucl.png', // Example nuggets image
  },
];

export default function OfficialPage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🍔 Junk Food Orders & Sales 🍕</Text>

      {foodItems.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.cardText}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: '#fff8e1',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#d84315',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff3e0',
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  cardText: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#bf360c',
  },
  description: {
    fontSize: 14,
    color: '#5d4037',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e64a19',
  },
});
