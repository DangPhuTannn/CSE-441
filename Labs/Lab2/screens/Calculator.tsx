import {useCallback, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Calculator() {
  const [resultValue, setResultValue] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [operator, setOperator] = useState('');
  const handleOperatorPress = useCallback(
    (operatorValue: string, value: number) => {
      setOperator(operatorValue);
      setFirstValue(value);
      setResultValue(0);
    },
    [],
  );

  const handleNumberPress = useCallback((number: number) => {
    setResultValue(prevValue => prevValue * 10 + number);
  }, []);
  const handleClearPress = useCallback(() => {
    setResultValue(0);
    setFirstValue(0);
    setOperator('');
  }, []);

  const handleEqualPress = useCallback(
    (first: number, current: number, operatorValue: string) => {
      let result = 0;
      switch (operatorValue) {
        case '+':
          result = first + current;
          break;
        case '-':
          result = first - current;
          break;
        case 'x':
          result = first * current;
          break;
        case '÷':
          if (current === 0) {
            Alert.alert('cannot divide by 0', 'Please enter a valid number');
            break;
          }
          result = first / current;
          break;
        default:
          break;
      }
      setResultValue(result);
    },
    [],
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.resultText}>{resultValue}</Text>
        <View style={styles.rowContainer}>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(7)}>
            7
          </Text>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(8)}>
            8
          </Text>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(9)}>
            9
          </Text>
          <Text
            style={styles.operatorButton}
            onPress={() => handleOperatorPress('÷', resultValue)}>
            ÷
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(4)}>
            4
          </Text>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(5)}>
            5
          </Text>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(6)}>
            6
          </Text>
          <Text
            style={styles.operatorButton}
            onPress={() => handleOperatorPress('x', resultValue)}>
            x
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(1)}>
            1
          </Text>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(2)}>
            2
          </Text>
          <Text
            style={styles.numberButton}
            onPress={() => handleNumberPress(3)}>
            3
          </Text>
          <Text
            style={styles.operatorButton}
            onPress={() => handleOperatorPress('-', resultValue)}>
            -
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text
            style={[styles.numberButton, styles.zeroButton]}
            onPress={() => handleNumberPress(0)}>
            0
          </Text>
          <Text
            style={styles.operatorButton}
            onPress={() => handleOperatorPress('+', resultValue)}>
            +
          </Text>
          <Text
            style={styles.equalButton}
            onPress={() => handleEqualPress(firstValue, resultValue, operator)}>
            =
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.clearButton} onPress={() => handleClearPress()}>
            C
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 10,
    height: '100%',
  },
  resultText: {
    fontSize: 60,
    color: '#000',
    textAlign: 'center',
    padding: 20,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    gap: 10,
  },
  numberButton: {
    padding: 20,
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 30,
    width: 80,
    height: 80,
  },
  operatorButton: {
    padding: 20,
    backgroundColor: '#F0F0F0',
    color: '#FE9400',
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 30,
    width: 80,
    height: 80,
  },
  equalButton: {
    color: '#FFF',
    backgroundColor: '#FE9400',
    fontSize: 30,
    padding: 20,
    borderRadius: 50,
    textAlign: 'center',
    width: 80,
    height: 80,
  },
  zeroButton: {
    width: 200,
  },
  clearButton: {
    padding: 20,
    backgroundColor: '#F0F0F0',
    color: '#000',
    width: 400,
    fontSize: 30,
    borderRadius: 50,
    textAlign: 'center',
  },
});
