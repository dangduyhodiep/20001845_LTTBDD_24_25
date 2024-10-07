import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [objects, setObjects] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Thêm object mới
  const addObject = () => {
    if (inputValue1.trim() !== '' && inputValue2.trim() !== '') {
      setObjects([...objects, { id: Date.now().toString(), value1: inputValue1, value2: inputValue2 }]);
      setInputValue1('');
      setInputValue2('');
      setSelectedIndex(null); // Reset sau khi thêm
    }
  };

  // Chỉnh sửa object được chọn
  const editObject = () => {
    if (selectedIndex !== null) {
      const updatedObjects = [...objects];
      updatedObjects[selectedIndex] = { id: objects[selectedIndex].id, value1: inputValue1, value2: inputValue2 };
      setObjects(updatedObjects);
      setSelectedIndex(null); // Đặt lại chỉ số sau khi sửa
      setInputValue1(''); // Xóa các input sau khi chỉnh sửa
      setInputValue2('');
    }
  };

  // Xóa object được chọn
  const deleteObject = () => {
    if (selectedIndex !== null) {
      setObjects(objects.filter((_, i) => i !== selectedIndex));  // Xóa object tại index
      setSelectedIndex(null);  // Đặt lại chỉ số sau khi xóa
      setInputValue1(''); // Xóa các input
      setInputValue2('');
    }
  };

  // Chọn object để chỉnh sửa
  const selectObject = (index) => {
    setSelectedIndex(index);
    setInputValue1(objects[index].value1);  // Đưa giá trị của object vào ô input
    setInputValue2(objects[index].value2);
  };

  // Render từng object trong FlatList
  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => selectObject(index)} style={styles.itemContainer}>
      <Text style={styles.itemText}>Item {index + 1}: {item.value1} - {item.value2}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Các nút Add, Edit, Delete */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={addObject}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.editButton]} onPress={editObject}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteObject}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      {/* Input 1 */}
      <TextInput
        style={styles.input}
        placeholder="Nhập dữ liệu 1"
        value={inputValue1}
        onChangeText={setInputValue1}
      />

      {/* Input 2 */}
      <TextInput
        style={styles.input}
        placeholder="Nhập dữ liệu 2"
        value={inputValue2}
        onChangeText={setInputValue2}
      />

      {/* Danh sách các object */}
      <FlatList
        data={objects}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#C0C0C0',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,  // Tạo độ nổi cho các nút
  },
  addButton: {
    backgroundColor: '#28a745',  
  },
  editButton: {
    backgroundColor: '#ffc107',  
  },
  deleteButton: {
    backgroundColor: '#dc3545',  
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  },
});
