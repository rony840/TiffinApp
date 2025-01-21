import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, Modal, Pressable } from 'react-native';
import Header from '../components/Header';

/*used modal here to display description of food items */
/*used refreshcontrol to display new food items but it basically spawns a new food item*/
/*used Flatlist to display food items */

const CustomerMenuScreen = ({ route }) => {
  const { username } = route.params; // Get the username passed from the login screen
  const [refreshing, setRefreshing] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { id: '1', title: 'Pizza', description: 'Delicious Cheese Pizza' },
    { id: '2', title: 'Burger', description: 'Juicy Chicken Burger' },
    { id: '3', title: 'Pasta', description: 'Italian Pasta with Tomato Sauce' },
    // Add more items as needed
  ]);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Simulate data refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate an API call or data refresh
    setTimeout(() => {
      setRefreshing(false);
      setMenuItems([...menuItems, { id: String(menuItems.length + 1), title: 'New Dish', description: 'Freshly added dish!' }]);
    }, 2000); // Simulate a 2-second delay
  }, [menuItems]);

  const renderItem = ({ item }) => (
    <Pressable style={styles.menuItem} onPress={() => handleItemClick(item)}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </Pressable>
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true); // Open the modal
  };

  return (
    <View style={styles.page}>
      <Header title={`Welcome ${username}`} TxtStyle={{color: 'white'}}/>

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {/* Modal to show item details */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedItem?.title}</Text>
            <Text>{selectedItem?.description}</Text>
            <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#d39900',
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomerMenuScreen;
