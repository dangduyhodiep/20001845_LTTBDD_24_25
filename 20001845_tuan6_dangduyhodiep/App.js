import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Avatar } from 'react-native-elements';

// Sample product data
const products = [
  {
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    name: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: 'Shop LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'),
  },
  {
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    name: 'Lãnh đạo tài ba',
    shop: 'The world Book',
    image: require('./assets/boss.jpg'),
  },

];

// TopBar with back button, title, and cart icon
function TopBar({ navigation }) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.topBarTitle}>Chat</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Ionicons name="cart-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

// Main screen for displaying products and chat buttons
export default function ProductListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} /> {/* Top Bar */}
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
        </View>

        {products.map((product, index) => (
            <ListItem key={index} bottomDivider>
          {/* Tùy chỉnh kích thước Avatar */}
          <Avatar 
            source={product.image} 
            size="large" // Tùy chỉnh kích thước theo ý muốn ('small', 'medium', 'large', hoặc số cụ thể)
            avatarStyle={styles.productImage} // Nếu muốn thêm styling
          />
          <ListItem.Content>
            <ListItem.Title>{product.name}</ListItem.Title>
            <ListItem.Subtitle>{product.shop}</ListItem.Subtitle>
          </ListItem.Content>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </ListItem>

        ))}
      </ScrollView>

      {/* Bottom navigation icons (placeholder) */}
      <View style={styles.bottomBar}>
        
        <TouchableOpacity style={styles.bottomIcon}>
          <Ionicons name="menu-outline" size={30} color="#00aaff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon}>
          <Ionicons name="home-outline" size={30} color="#00aaff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon}>
          <Ionicons name="return-down-back-outline" size={30} color="#00aaff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00aaff',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  topBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 14,
    textAlign: 'center',
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  bottomIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
