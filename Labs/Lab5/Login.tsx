import axios from 'axios';
import {useCallback, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FormData {
  phone: string;
  password: string;
}

export default function Login({navigation}: any) {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    const {phone, password} = data;
    console.log('asd');
    try {
      const response = await axios.post(
        'https://kami-backend-5rs0.onrender.com/auth',
        {
          phone,
          password,
        },
      );
      await AsyncStorage.setItem('user', JSON.stringify(response.data));
      navigation.navigate('HomeTab');
    } catch (error) {
      console.error('Error login', error);
    }
  };
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const handleSetVisiablePassword = useCallback(() => {
    setVisiblePassword(prev => !prev);
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.containerInputField}>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Phone is required',
              validate: {
                isValidPhone: value => {
                  const phoneRegex = /^[0-9]{10}$/;
                  return phoneRegex.test(value) || 'Phone number is invalid';
                },
              },
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter phone"
                mode="outlined"
                keyboardType="phone-pad"
                error={!!errors.phone}
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          {errors.phone && (
            <Text style={styles.error}>{errors.phone.message}</Text>
          )}
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
              validate: {
                containSpace: value => {
                  const spaceRegex = /\s/;
                  return (
                    !spaceRegex.test(value) || 'Password cannot contain space'
                  );
                },
              },
            }}
            render={({field}) => (
              <TextInput
                placeholder="Enter password"
                mode="outlined"
                secureTextEntry={!visiblePassword}
                error={!!errors.password}
                value={field.value}
                onChangeText={field.onChange}
                right={
                  <TextInput.Icon
                    icon={visiblePassword ? 'eye' : 'eye-off'}
                    onPress={() => handleSetVisiablePassword()}
                  />
                }
              />
            )}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}
        </View>
        <Button
          labelStyle={styles.buttonSubmitLabel}
          style={styles.buttonSubmit}
          onPress={handleSubmit(onSubmit)}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#EE506B',
    marginBottom: 30,
    textAlign: 'center',
  },

  containerInputField: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  error: {color: 'red', marginBottom: 10},
  buttonSubmit: {
    backgroundColor: '#EE506B',
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 30,
  },
  buttonSubmitLabel: {
    color: '#fff',
    fontSize: 15,
  },
});
