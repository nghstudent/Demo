import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.hang4}>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(0)}>
        <Text style={styles.nutText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log('C')}>
        <Text style={styles.nutText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log('=')}>
        <Text style={styles.nutText}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log('+')}>
        <Text style={styles.nutText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hang4: { flex: 1, flexDirection: 'row' },
  nut: {
    flex: 1,
    margin: 5,
    backgroundColor: 'pink',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nutText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
