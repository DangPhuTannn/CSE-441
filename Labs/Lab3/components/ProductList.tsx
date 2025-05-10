import {useEffect, useState} from 'react';
import {ProductProps} from '../config';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import ProductDetailInList from './ProductDetailInList';

export default function ProductList() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        Alert.alert('Error', 'Failed to fetch products');
      }
    }
    getProducts();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Product List</Text>
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <ProductDetailInList key={index} {...item} />
          )}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBFE',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    color: '#737273',
  },
});
