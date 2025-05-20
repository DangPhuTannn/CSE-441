/* eslint-disable react/no-unstable-nested-components */
import {Pressable, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './StackParamList';
import {useCallback, useEffect} from 'react';
import {Button, Icon} from 'react-native-paper';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';

export interface ServiceItemProps {
  _id: string;
  createdAt: string;
  createdBy: string;
  price: number;
  updatedAt: string;
  name: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'ServiceDetail'>;

export default function ServiceDetail({route, navigation}: Props) {
  const {_id, createdAt, createdBy, price, updatedAt, name} = route.params;
  const createdDate = new Date(createdAt);
  const updatedDate = new Date(updatedAt);

  const handleGoToEditService = useCallback(() => {
    navigation.navigate('EditService', route.params);
  }, []);

  const handleDeleteServiceItem = useCallback(() => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this service?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const user = await AsyncStorage.getItem('user');
            if (!user) return;
            const token = JSON.parse(user).token;
            try {
              await axios.delete(
                `https://kami-backend-5rs0.onrender.com/services/${_id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              );

              Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Delete',
                textBody: 'Delete Successfully',
                button: 'OK',
              });
              navigation.goBack();
            } catch (error) {
              console.error('Error delete service', error);
              Alert.alert('Error', 'Failed to delete service.');
            }
          },
        },
      ],
      {cancelable: true},
    );
  }, [_id, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleDeleteServiceItem}>
          <Icon source="menu" size={20} color="white" />
        </Pressable>
      ),
    });
  }, [navigation, handleDeleteServiceItem]);

  return (
    <View style={styles.container} key={_id}>
      <Text style={styles.nameAttribute}>
        Service name : <Text style={styles.valueAttribute}>{name}</Text>
      </Text>

      <Text style={styles.nameAttribute}>
        Price :{' '}
        <Text style={styles.valueAttribute}>
          {price.toLocaleString('vn-VN') + 'đ'}
        </Text>
      </Text>

      <Text style={styles.nameAttribute}>
        Creator : <Text style={styles.valueAttribute}>{createdBy}</Text>
      </Text>

      <Text style={styles.nameAttribute}>
        Time :{' '}
        <Text style={styles.valueAttribute}>{createdDate.toISOString()}</Text>
      </Text>

      <Text style={styles.nameAttribute}>
        Final update :
        <Text style={styles.valueAttribute}>{updatedDate.toISOString()}</Text>
      </Text>

      <Button
        onPress={() => handleGoToEditService()}
        style={styles.buttonEdit}
        labelStyle={styles.labelButtonEdit}>
        Edit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  nameAttribute: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  valueAttribute: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  buttonEdit: {
    backgroundColor: '#EF506B',
    borderRadius: 5,
    marginTop: 10,
  },
  labelButtonEdit: {
    color: 'white',
    fontWeight: 'bold',
  },
});
