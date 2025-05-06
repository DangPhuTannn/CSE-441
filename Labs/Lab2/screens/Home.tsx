import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function Home({navigation}: any) {
  return (
    <View style={styles.container}>
      <Button
        title="1. Login Form"
        onPress={() => navigation.navigate('LoginForm')}
      />
      <Button
        title="2. Personal Income Tax Calculation"
        onPress={() => navigation.navigate('TaxCalculation')}
      />
      <Button
        title="3. Calculator Screen"
        onPress={() => navigation.navigate('Calculator')}
      />
      {/* <Button
        title="2. Personal Income Tax Calculation"
        onPress={() => navigation.navigate('SumDigits')}
      />
      <Button
        title="3. Caculator Screen"
        onPress={() => navigation.navigate('MinOfThree')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-start', padding: 20, gap: 10},
});
