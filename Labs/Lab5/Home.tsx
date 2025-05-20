import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Icon, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import ServiceDetailInHome from './ServiceDetailInHome';

interface ServiceItemProps {
  name: string;
  price: number;
  _id: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
}

export default function Home({navigation}: any) {
  const [username, setUsername] = useState<string>('');
  const [services, setServices] = useState<ServiceItemProps[]>([]);

  useEffect(() => {
    async function getAllServices() {
      try {
        const response = await axios.get(
          'https://kami-backend-5rs0.onrender.com/services',
        );
        setServices(response.data);
        console.log(response.data);
        await AsyncStorage.setItem('services', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error get all service', error);
      }
    }
    getAllServices();
  }, []);

  useEffect(() => {
    async function loadUser() {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUsername(parsedUser.name);
      }
    }
    loadUser();
  }, []);

  const handleGoToAddService = useCallback(() => {
    navigation.navigate('AddService');
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{username.toUpperCase()}</Text>
        <Icon source="account-circle-outline" size={40} color="#fff" />
      </View>

      <View style={styles.bodyContainer}>
        <Image
          source={require('../Lab5/src/assets/images/logoSpa.png')}
          style={styles.logo}
        />
        <View style={styles.headerDetailBody}>
          <Text style={styles.titleDetailBody}>Danh sách dịch vụ</Text>
          <Pressable onPress={() => handleGoToAddService()}>
            <View style={styles.iconAddService}>
              <Icon source="plus" color="white" size={30} />
            </View>
          </Pressable>
        </View>
        <FlatList
          data={services}
          renderItem={({item}) => (
            <ServiceDetailInHome serviceItem={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#EF506B',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flex: 1,
  },
  logo: {
    height: 150,
    width: 'auto',
  },
  headerDetailBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleDetailBody: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  iconAddService: {
    backgroundColor: '#EF506B',
    borderRadius: 50,
    padding: 1,
  },
});
