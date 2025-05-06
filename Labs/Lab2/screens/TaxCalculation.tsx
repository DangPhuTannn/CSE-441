import {useCallback, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

interface TaxCalculationValues {
  income: number;
}

export default function TaxCalculation() {
  const [income, setIncome] = useState<number>(0);
  const handleCalTax = useCallback((incomeAmount: number) => {
    let taxAmount = 0;

    if (incomeAmount <= 10000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000000) * 0.2;
    } else {
      taxAmount =
        10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }

    return taxAmount;
  }, []);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TaxCalculationValues>();

  const onSubmit: SubmitHandler<TaxCalculationValues> = async data => {
    setIncome(handleCalTax(data.income));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Income Tax Calculator</Text>
        <Controller
          name="income"
          control={control}
          rules={{
            required: 'Income is required',
            min: {
              value: 0,
              message: 'Income must be greater than 0',
            },
          }}
          render={({field}) => (
            <TextInput
              onChangeText={field.onChange}
              label="Enter your income"
              mode="outlined"
              keyboardType="numeric"
              value={field.value?.toString()}
              error={!!errors.income}
            />
          )}
        />
        <Button title="CALCULATE TAX" onPress={handleSubmit(onSubmit)} />
        {errors.income && (
          <Text style={{color: 'red'}}>{errors.income.message}</Text>
        )}
        <Text style={{marginTop: 20}}>
          Your tax is: {income.toFixed(2)} VND
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputTax: {marginBottom: 20},
});
