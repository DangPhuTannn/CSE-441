import {useCallback, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HailstoneSequence() {
  const [number, setNumber] = useState<number>(0);
  const [sequence, setSequence] = useState<number[]>([]);
  const handleCalSequence = useCallback((number: number) => {
    let temp = number;
    let tempSequence = [temp];
    while (temp != 1) {
      if (temp % 2 == 0) {
        temp /= 2;
      } else {
        temp = temp * 3 + 1;
      }
      tempSequence.push(temp);
    }
    setSequence(tempSequence);
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>Enter the number:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => setNumber(Number(text))}
          value={number.toString()}
          placeholder="Enter a number"
          style={{
            padding: 10,
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Button onPress={() => handleCalSequence(number)} title="Calculate" />

        <ScrollView>
          {sequence.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
