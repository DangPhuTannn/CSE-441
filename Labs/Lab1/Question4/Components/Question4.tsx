import {ScrollView} from 'react-native';

import Square from './Square';
import STYLES from '../style';
import data from '../data';

export default function Question4() {
  return (
    <ScrollView style={STYLES.containter}>
      {data.map((item, index) => {
        return <Square key={item} text={index + 1} />;
      })}
    </ScrollView>
  );
}
