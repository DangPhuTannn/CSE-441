import {useCallback} from 'react';
import {Pressable, Text} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

interface ServiceItemProps {
  name: string;
  price: number;
  _id: string;
}
export default function ServiceDetailInHome({
  serviceItem,
  navigation,
}: {
  serviceItem: ServiceItemProps;
  navigation: any;
}) {
  const {name, price, _id} = serviceItem;
  const handleNavigateToServiceDetail = useCallback(() => {
    navigation.navigate('ServiceDetail', serviceItem);
  }, []);
  return (
    <Pressable onPress={() => handleNavigateToServiceDetail()}>
      <View style={styles.container} key={_id}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
          {name}
        </Text>
        <Text style={styles.price}>{price.toLocaleString('vn-VN') + 'đ'}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 5,
  },
  price: {
    fontSize: 15,
  },
});
