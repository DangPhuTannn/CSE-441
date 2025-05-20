import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';

interface ServiceAttributeValueProps {
  name: string;
  value: string;
}

export default function ServiceAttributeValue(
  pair: ServiceAttributeValueProps,
) {
  const {name, value} = pair;

  return (
    <View>
      <Text style={styles.nameAttribute}>{name}</Text>
      <Text style={styles.valueAttribute}>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  nameAttribute: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  valueAttribute: {
    fontSize: 15,
  },
});
