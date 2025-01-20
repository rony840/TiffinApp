import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import Header from '../src/components/Header';

/*used Flatlist to display food items */
/*plus button adds a food item to the business menu */

const BusinessMenuScreen = () => {
  const [menuItems, setMenuItems] = useState([
    { id: '1', title: 'Pizza', description: 'Delicious Cheese Pizza' },
    { id: '2', title: 'Burger', description: 'Juicy Chicken Burger' },
    { id: '3', title: 'Pasta', description: 'Italian Pasta with Tomato Sauce' },
  ]);

  const handleAddItem = () => {
    const newItem = {
      id: String(menuItems.length + 1),
      title: `New Dish ${menuItems.length + 1}`,
      description: 'Default Description for new item',
    };
    setMenuItems([...menuItems, newItem]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.page}>
      <Header title="Business Menu" TxtStyle={{ color: 'white' }} />

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Button to add a default item */}
      <Pressable onPress={handleAddItem} style={styles.addButtonContainer}>
        <Text style={styles.addButtonText}>+ Add Item</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  menuItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#d39900',
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BusinessMenuScreen;
