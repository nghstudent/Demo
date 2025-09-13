import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.ketQua}>0</Text>
      </View>
      <View style={styles.input}>
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

  input: {
    flex: 5,
  },
  hang1: { flex: 1, flexDirection: 'row' },
  hang2: { flex: 1, flexDirection: 'row' },
  hang3: { flex: 1, flexDirection: 'row' },
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
