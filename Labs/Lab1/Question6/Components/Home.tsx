import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function Home({navigation}: any) {
  return (
    <View style={styles.container}>
      <Button
        title="1. Employee Form"
        onPress={() => navigation.navigate('EmployeeForm')}
      />
      <Button
        title="2. Sum of First & Last Digit"
        onPress={() => navigation.navigate('SumDigits')}
      />
      <Button
        title="3. Find Minimum of Three Numbers"
        onPress={() => navigation.navigate('MinOfThree')}
      />
      <Button
        title="4. Hailstone Sequence"
        onPress={() => navigation.navigate('HailstoneSequence')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around', padding: 20},
});
