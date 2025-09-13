import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.hang3}>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(1)}>
        <Text style={styles.nutText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(2)}>
        <Text style={styles.nutText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(3)}>
        <Text style={styles.nutText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log('-')}>
        <Text style={styles.nutText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hang3: { flex: 1, flexDirection: 'row' },
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
