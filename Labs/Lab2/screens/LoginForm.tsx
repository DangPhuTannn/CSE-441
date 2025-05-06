import {useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

interface LoginFormValues {
  phone: string;
  password: string;
}

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormValues>();

  const [formData, setFormData] = useState<LoginFormValues>({
    phone: '',
    password: '',
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async data => {
    console.log('Form Data:', data);
    setFormData({
      phone: data.phone,
      password: data.password,
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleLogin}>Login</Text>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Phone number is required',
            }}
            render={({field}) => (
              <TextInput
                label={'Phone Number'}
                style={styles.inputField}
                mode="outlined"
                keyboardType="phone-pad"
                value={field.value}
                onChangeText={field.onChange}
                error={!!errors.phone}
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
            }}
            render={({field}) => (
              <TextInput
                label={'Password'}
                style={styles.inputField}
                mode="outlined"
                secureTextEntry={true}
                value={field.value}
                onChangeText={field.onChange}
                error={!!errors.password}
              />
            )}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}
          <Button
            mode="contained"
            style={styles.loginButton}
            onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
        </View>
        <View style={{padding: 20}}>
          <Text>Phone: {formData.phone}</Text>
          <Text>Password: {formData.password}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleLogin: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#EF516C',
    textAlign: 'center',
    paddingTop: 12,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 20,
  },
  inputField: {
    backgroundColor: '#FFF',
  },
  loginButton: {
    backgroundColor: '#EF516C',
    color: '#FFF',
    borderRadius: 10,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    paddingVertical: 2,
  },
  error: {color: 'red', marginBottom: 10},
});
