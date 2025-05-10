import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {ProductProps} from '../config';

export default function ProductDetailInList(product: ProductProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: product.images[0],
        }}
      />
      <View style={styles.productInforContainer}>
        <Text style={styles.title}>Title : {product.title}</Text>
        <Text style={styles.normalText}>
          Description : {product.description}
        </Text>
        <Text style={styles.normalText}>Price : {product.price}</Text>
        <Text style={styles.discountText}>
          Discount : {product.discountPercentage}
        </Text>
        <Text style={styles.normalText}>Rating : {product.rating}</Text>
        <Text style={styles.normalText}>Stock : {product.stock}</Text>
        <Text style={styles.normalText}>Brand : {product.brand}</Text>
        <Text style={styles.normalText}>Category : {product.category}</Text>
        <View style={styles.buttonContainer}>
          <Button title="DETAIL" />
          <Button title="ADD" />
          <Button title="DELETE" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  discountText: {
    color: '#188918',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  productInforContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    flex: 1,
  },
  normalText: {
    color: '#000',
    elevation: 1,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
});
