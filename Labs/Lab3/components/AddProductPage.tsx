import axios from 'axios';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

type FormData = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
};

export default function AddProductPage() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    const postData = {
      ...data,
      images: [data.images],
    };

    try {
      await axios.post('https://dummyjson.com/products/add', postData);

      Alert.alert('Success', 'Product added successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to add product');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Add a Product</Text>
        <View style={styles.container}>
          <Text style={styles.attributeText}>Title</Text>
          <Controller
            control={control}
            name="title"
            rules={{
              required: 'Title is required',
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter title"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.title}
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.title && (
            <Text style={styles.error}>{errors.title.message}</Text>
          )}
          <Text style={styles.attributeText}>Description</Text>
          <Controller
            control={control}
            name="description"
            rules={{
              required: 'Description is required',
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter description"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.description}
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.description && (
            <Text style={styles.error}>{errors.description.message}</Text>
          )}
          <Text style={styles.attributeText}>Price</Text>
          <Controller
            control={control}
            name="price"
            rules={{
              required: 'Price is required',
              validate: {
                positive: value => value > 0 || 'Price must be positive',
                number: value => !isNaN(value) || 'Price must be a number',
              },
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter price"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.price}
                value={field.value?.toString()}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.price && (
            <Text style={styles.error}>{errors.price.message}</Text>
          )}
          <Text style={styles.attributeText}>Discount Percentage</Text>
          <Controller
            control={control}
            name="discountPercentage"
            rules={{
              required: 'Discount Percentage is required',
              validate: {
                positive: value =>
                  value >= 0 || 'Discount Percentage must be positive',
                number: value =>
                  !isNaN(value) || 'Discount Percentage must be a number',
              },
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter discount percentage"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.discountPercentage}
                value={field.value?.toString()}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.discountPercentage && (
            <Text style={styles.error}>
              {errors.discountPercentage.message}
            </Text>
          )}
          <Text style={styles.attributeText}>Rating</Text>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: 'Rating is required',
              validate: {
                positive: value => value >= 0 || 'Rating must be positive',
                number: value => !isNaN(value) || 'Rating must be a number',
              },
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter rating"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.rating}
                value={field.value?.toString()}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.rating && (
            <Text style={styles.error}>{errors.rating.message}</Text>
          )}
          <Text style={styles.attributeText}>Stock</Text>
          <Controller
            control={control}
            name="stock"
            rules={{
              required: 'Stock is required',
              validate: {
                positive: value => value >= 0 || 'Stock must be positive',
                number: value => !isNaN(value) || 'Stock must be a number',
              },
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter stock"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.stock}
                value={field.value?.toString()}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.stock && (
            <Text style={styles.error}>{errors.stock.message}</Text>
          )}
          <Text style={styles.attributeText}>Brand</Text>
          <Controller
            control={control}
            name="brand"
            rules={{
              required: 'Brand is required',
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter brand"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.brand}
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.brand && (
            <Text style={styles.error}>{errors.brand.message}</Text>
          )}
          <Text style={styles.attributeText}>Category</Text>
          <Controller
            control={control}
            name="category"
            rules={{
              required: 'Category is required',
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter category"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.category}
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.category && (
            <Text style={styles.error}>{errors.category.message}</Text>
          )}
          <Text style={styles.attributeText}>Image</Text>
          <Controller
            control={control}
            name="images"
            rules={{
              required: 'Image is required',
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter image URL"
                style={styles.attributeInput}
                mode="outlined"
                error={!!errors.images}
                value={field.value?.toString()}
                onChangeText={field.onChange}
                keyboardType="url"
              />
            )}
          />
          {errors.images && (
            <Text style={styles.error}>{errors.images.message}</Text>
          )}
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#0000FF',
  },
  attributeInput: {
    padding: 2,
    backgroundColor: '#fff',
  },
  attributeText: {
    fontSize: 20,
    color: '#757375',
    marginBottom: 5,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
  },
  error: {color: 'red', marginBottom: 10},
});
