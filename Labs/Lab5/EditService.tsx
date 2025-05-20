import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Alert, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {RootStackParamList} from './StackParamList';

interface FormDataProps {
  name: string;
  price: number;
  _id: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'EditService'>;

export default function EditService({route, navigation}: Props) {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormDataProps>({
    defaultValues: {...route.params},
  });

  const onSubmit: SubmitHandler<FormDataProps> = async data => {
    const {_id, name, price} = data;
    const user = await AsyncStorage.getItem('user');
    if (!user) {
      return;
    }
    const JSONPasredUser = JSON.parse(user);
    const token = JSONPasredUser.token;
    try {
      await axios.put(
        `https://kami-backend-5rs0.onrender.com/services/${_id}`,
        {
          name,
          price: Number(price),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      Alert.alert('Success', 'Edit service successfully');
      setTimeout(() => {
        navigation.navigate('HomeTab');
      }, 2000);
    } catch (error) {
      console.error('Error add service', error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputField}>
          <Text style={styles.title}>Service Id</Text>
          <Controller
            control={control}
            name="_id"
            render={({field}) => (
              <TextInput mode="outlined" value={field.value} />
            )}
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.title}>Service name*</Text>
          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Service Name is required',
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter service name"
                mode="outlined"
                keyboardType="name-phone-pad"
                error={!!errors.name}
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.name && (
            <Text style={styles.error}>{errors.name.message}</Text>
          )}
        </View>
        <View style={styles.inputField}>
          <Text style={styles.title}>Price*</Text>
          <Controller
            control={control}
            name="price"
            rules={{
              required: 'Price is required',
              validate: {
                positive: value => value >= 0 || 'Price must be positive',
                number: value => !isNaN(value) || 'Price must be a number',
              },
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter price"
                mode="outlined"
                keyboardType="number-pad"
                error={!!errors.price}
                value={field.value?.toString()}
                onChangeText={field.onChange}
                defaultValue="0"
              />
            )}
          />
          {errors.price && (
            <Text style={styles.error}>{errors.price.message}</Text>
          )}
        </View>
        <Button
          style={styles.buttonSubmit}
          labelStyle={styles.titleButtonSubmit}
          onPress={handleSubmit(onSubmit)}>
          Edit
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  error: {color: 'red', marginBottom: 10},
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  inputField: {
    marginBottom: 20,
  },
  buttonSubmit: {
    backgroundColor: '#ED4F6A',
    borderRadius: 10,
    paddingVertical: 5,
  },
  titleButtonSubmit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
