import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.hang1}>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(7)}>
        <Text style={styles.nutText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(8)}>
        <Text style={styles.nutText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log(9)}>
        <Text style={styles.nutText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nut} onPress={() => console.log('/')}>
        <Text style={styles.nutText}>/</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hang1: { flex: 1, flexDirection: 'row' },
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
