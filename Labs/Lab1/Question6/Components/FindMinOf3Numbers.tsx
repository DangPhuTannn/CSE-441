import {useCallback, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function FindMinOf3Numbers() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [num3, setNum3] = useState<number>(0);
  const [min, setMin] = useState<number | null>(null);

  const findMin = useCallback(() => {
    const minimum = Math.min(num1, num2, num3);
    setMin(minimum);
  }, [num1, num2, num3]);

  return (
    <SafeAreaView>
      <View style={styles.ViewContainer}>
        <Text>Enter three numbers:</Text>
        <TextInput
          value={num1.toString()}
          keyboardType="numeric"
          onChangeText={e => setNum1(Number(e))}
          style={styles.TextInput}
        />
        <TextInput
          value={num2.toString()}
          keyboardType="numeric"
          onChangeText={e => setNum2(Number(e))}
          style={styles.TextInput}
        />
        <TextInput
          value={num3.toString()}
          keyboardType="numeric"
          onChangeText={e => setNum3(Number(e))}
          style={styles.TextInput}
        />
        <Button title="Find Minimum" onPress={findMin} />
        {min !== null && <Text>Minimum: {min}</Text>}
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
