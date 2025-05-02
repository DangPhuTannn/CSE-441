import {Alert, Button, View, Text} from 'react-native';
import STYLES from '../style';

function ClickOnTheSquare() {
  Alert.alert('You clicked on the square');
}

const Square = ({text}) => (
  <View style={[STYLES.box, {backgroundColor: '#7ce0f9'}]}>
    <Text>{text}</Text>
    <Button title="Click me" onPress={ClickOnTheSquare} />
  </View>
);

export default Square;
