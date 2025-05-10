import {useCallback, useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductProps} from '../config';
import axios from 'axios';
import {debounce} from 'lodash';
import {TextInput} from 'react-native-paper';
import ProductInSearchPage from './ProductInSearchPage';
export default function SearchProductPage() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const handleSearch = useCallback(
    debounce((searchValue: string) => {
      setSearchText(searchValue);
    }, 500),
    [],
  );
  useEffect(() => {
    try {
      async function getProducts() {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      }
      getProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Search Products</Text>
        <TextInput
          onChangeText={handleSearch}
          placeholder="Search"
          style={styles.input}
          mode="outlined"
        />
        <View style={styles.storeProductContainer}>
          {products
            .filter(eachProduct =>
              eachProduct.title
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            )
            .map((eachProduct, index) => (
              <ProductInSearchPage {...eachProduct} key={index} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
    color: '#757177',
    marginBottom: 10,
  },
  input: {
    padding: 2,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  storeProductContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});
