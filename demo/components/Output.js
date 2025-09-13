import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (

      <View style={styles.output}>
        <Text style={styles.ketQua}>0</Text>
      </View>

  );
}

const styles = StyleSheet.create({

  output: {
    flex: 1,
    justifyContent: 'center',
  },
  ketQua: {
    fontSize: 40,
    backgroundColor: 'red',
    textAlign: 'right',
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
