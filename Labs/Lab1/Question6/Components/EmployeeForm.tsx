import {useCallback, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function EmployeeForm() {
  const [fullName, setFullName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [ocupation, setOccupation] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const handleUpdate = useCallback(() => {
    setIsSuccess(true);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.ViewContainer}>
        <Text>Full Name:</Text>
        <TextInput
          value={fullName}
          onChangeText={value => setFullName(value)}
          style={styles.TextInput}
          placeholder="Enter your full name"
        />
        <Text>Age:</Text>
        <TextInput
          value={age.toString()}
          keyboardType="numeric"
          onChangeText={value => setAge(Number(value))}
          style={styles.TextInput}
          placeholder="Enter your age"
        />
        <Text>Ocupation:</Text>
        <TextInput
          value={ocupation}
          onChangeText={value => setOccupation(value)}
          style={styles.TextInput}
          placeholder="Enter your ocupation"
        />
        <Button title="Update" onPress={handleUpdate} />
        {isSuccess && <Text> Update Successfully!!</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ViewContainer: {padding: 20},
  TextInput: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
});
