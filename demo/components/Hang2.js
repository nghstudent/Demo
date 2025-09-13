import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.hang2}>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(4)}>
        <Text style={styles.nutText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(5)}>
        <Text style={styles.nutText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(6)}>
        <Text style={styles.nutText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log('*')}>
        <Text style={styles.nutText}>*</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hang2: { flex: 1, flexDirection: 'row' },
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
