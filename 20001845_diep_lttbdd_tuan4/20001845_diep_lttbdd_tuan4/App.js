import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState(1);

  // Hàm để tăng số lượng
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Hàm để giảm số lượng
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Sản phẩm */}
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/sach1.png')} // Đường dẫn đến ảnh trong thư mục assets
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.productSeller}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.oldPrice}>441.800 đ</Text>
          <Text style={styles.newPrice}>141.800 đ</Text>

          {/* Số lượng và nút tăng/giảm */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
             <Text style={styles.productSeller}>Mua sau</Text>
          </View>
        </View>
      </View>

      {/* Mã giảm giá */}
      <View style={styles.discountContainer}>
        <TextInput style={styles.discountInput} placeholder="Mã giảm giá đã lưu" />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
     <View style={styles.discountContainer}>
         <Text style={styles.productContainer}>Bạn có phiếu quà tặng Tiki/Got it/Urbox</Text>
          <Text style={styles.productSeller}>Nhận tại đây!</Text>
      </View>
      {/* Tổng tiền */}
      <View style={styles.totalContainer}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Tạm tính</Text>
          <Text style={styles.rowValue}>{(quantity * 141800).toLocaleString('vi-VN')} đ</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabelBold}>Thành tiền</Text>
          <Text style={styles.rowValueBold}>{(quantity * 141800).toLocaleString('vi-VN')} đ</Text>
        </View>
      </View>

      {/* Nút đặt hàng */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSeller: {
    color: '#00A6FF',
    marginVertical: 5,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  newPrice: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  discountInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  applyButton: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowLabel: {
    color: '#333',
  },
  rowLabelBold: {
    color: '#333',
    fontWeight: 'bold',
  },
  rowValue: {
    color: 'red',
  },
  rowValueBold: {
    color: 'red',
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
