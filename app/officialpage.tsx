import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const foodItems = [
  {
    id: '1',
    name: 'Cheesy Burger',
    category: 'Burgers',
    description: 'Juicy beef patty with melted cheese.',
    price: '$5.99',
    image: 'https://i.imgur.com/3r5uR1W.png',
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    description: 'Classic pizza with mozzarella and pepperoni.',
    price: '$8.49',
    image: 'https://i.imgur.com/VzE3bE2.png',
  },
  {
    id: '3',
    name: 'Loaded Fries',
    category: 'Fries',
    description: 'Fries with cheese, bacon, and sauce.',
    price: '$4.29',
    image: 'https://i.imgur.com/KkR6LfL.png',
  },
  {
    id: '4',
    name: 'Chicken Nuggets',
    category: 'Snacks',
    description: 'Golden crispy nuggets with dip.',
    price: '$3.99',
    image: 'https://i.imgur.com/jB2fucl.png',
  },
  {
    id: '5',
    name: 'Veggie Burger',
    category: 'Burgers',
    description: 'Grilled veggie patty with lettuce and tomato.',
    price: '$5.49',
    image: 'https://i.imgur.com/3r5uR1W.png',
  },
];

const categories = ['All', 'Burgers', 'Pizza', 'Fries', 'Snacks'];

export default function OfficialPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  const handleOrder = (itemName) => {
    Alert.alert('Order Placed!', `You ordered: ${itemName}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => handleOrder(item.name)}
        >
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCategory = (category) => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.categoryButtonSelected,
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text
        style={[
          styles.categoryButtonText,
          selectedCategory === category && styles.categoryButtonTextSelected,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍔 Junk Food Orders & Sales 🍕</Text>

      <View style={styles.categoryContainer}>
        {categories.map(renderCategory)}
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e1',
    paddingTop: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d84315',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#d84315',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    margin: 4,
    backgroundColor: '#fff3e0',
  },
  categoryButtonSelected: {
    backgroundColor: '#d84315',
  },
  categoryButtonText: {
    color: '#d84315',
    fontWeight: '600',
  },
  categoryButtonTextSelected: {
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff3e0',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
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
  orderButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#e64a19',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
