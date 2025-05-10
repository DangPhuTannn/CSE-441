import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import {ProductProps} from '../config';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProductDetail() {
  const [product, setProduct] = useState<ProductProps | null>(null);
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get('https://dummyjson.com/products/1');
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    getProduct();
  }, []);
  return (
    <SafeAreaView>
      <Card>
        <Card.Title title="Product Detail" />
        <Card.Cover source={{uri: product?.images[0]}} />
        <Card.Content>
          <Text style={styles.title}>Title : {product?.title}</Text>
          <Text style={styles.text}>Description : {product?.description}</Text>
          <Text style={styles.text}>Price : {product?.price}</Text>
          <Text style={styles.text}>
            Discount : {product?.discountPercentage}
          </Text>
          <Text style={styles.text}>Rating : {product?.rating}</Text>
          <Text style={styles.text}>Stock : {product?.stock}</Text>
          <Text style={styles.text}>Brand : {product?.brand}</Text>
          <Text style={styles.text}>Category : {product?.category}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Delete</Button>
          <Button>Cancel</Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    color: '#757177',
  },
  text: {
    color: '#8D888E',
  },
});
