import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Output from './components/Output';
import Hang1 from './components/Hang1';
import Hang2 from './components/Hang2';
import Hang3 from './components/Hang3';
import Hang4 from './components/Hang4';

export default function App() {
  return (
    <View style={styles.container}>
      <Output />
      <View style={styles.input}>
        <Hang1 />
        <Hang2 />
        <Hang3 />
        <Hang4 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    flex: 5,
  },
});
