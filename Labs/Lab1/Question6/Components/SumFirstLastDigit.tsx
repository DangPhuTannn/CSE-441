import {useCallback, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function SumFirstLastDigit() {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleSum = useCallback((number: number) => {
    const strNumber = number.toString();
    const firstDigit = parseInt(strNumber.charAt(0));
    const lastDigit = parseInt(strNumber.charAt(strNumber.length - 1));
    const sum = firstDigit + lastDigit;
    setResult(sum);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.ViewContainer}>
        <Text>Enter the number:</Text>
        <TextInput
          value={number.toString()}
          keyboardType="numeric"
          onChangeText={e => setNumber(Number(e))}
          style={styles.TextInput}
        />
        <Button title="Calculate" onPress={() => handleSum(number)} />
        <Text>Result : {result}</Text>
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
