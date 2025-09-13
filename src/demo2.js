import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [current, setCurrent] = useState('');  // số đang nhập
  const [prev, setPrev] = useState(null);      // số trước
  const [operator, setOperator] = useState(null); // toán tử

  // Nhấn số
  const pressNumber = (num) => setCurrent(current + num.toString());

  // Nhấn phép toán
  const pressOperator = (op) => {
    if (current === '') return;
    if (prev === null) {
      setPrev(parseFloat(current));
    } else {
      setPrev(calc(prev, parseFloat(current), operator));
    }
    setCurrent('');
    setOperator(op);
  };

  // Nhấn "="
  const pressEqual = () => {
    if (!operator || current === '') return;
    const result = calc(prev, parseFloat(current), operator);
    setCurrent(result.toString());
    setPrev(null);
    setOperator(null);
  };

  // Nhấn "C"
  const pressClear = () => {
    setCurrent('');
    setPrev(null);
    setOperator(null);
  };

  // Hàm tính toán
  const calc = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return b;
    }
  };

  return (
    <View style={styles.container}>
      {/* Màn hình hiển thị */}
      <View style={styles.output}>
        <Text style={styles.ketQua}>{current || (prev !== null ? prev : '0')}</Text>
      </View>

      {/* Bàn phím */}
      <View style={styles.input}>
        <View style={styles.row}>
          <CalcButton text="7" onPress={() => pressNumber(7)} />
          <CalcButton text="8" onPress={() => pressNumber(8)} />
          <CalcButton text="9" onPress={() => pressNumber(9)} />
          <CalcButton text="/" onPress={() => pressOperator('/')} operator />
        </View>
        <View style={styles.row}>
          <CalcButton text="4" onPress={() => pressNumber(4)} />
          <CalcButton text="5" onPress={() => pressNumber(5)} />
          <CalcButton text="6" onPress={() => pressNumber(6)} />
          <CalcButton text="*" onPress={() => pressOperator('*')} operator />
        </View>
        <View style={styles.row}>
          <CalcButton text="1" onPress={() => pressNumber(1)} />
          <CalcButton text="2" onPress={() => pressNumber(2)} />
          <CalcButton text="3" onPress={() => pressNumber(3)} />
          <CalcButton text="-" onPress={() => pressOperator('-')} operator />
        </View>
        <View style={styles.row}>
          <CalcButton text="0" onPress={() => pressNumber(0)} />
          <CalcButton text="C" onPress={pressClear} operator />
          <CalcButton text="=" onPress={pressEqual} operator />
          <CalcButton text="+" onPress={() => pressOperator('+')} operator />
        </View>
      </View>
    </View>
  );
}

// Component nút tái sử dụng
const CalcButton = ({ text, onPress, operator }) => (
  <TouchableOpacity
    style={[styles.button, operator && styles.operatorButton]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#ecf0f1',
  },
  output: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  ketQua: {
    fontSize: 40,
    backgroundColor: 'red',
    textAlign: 'right',
    margin: 10,
    paddingRight: 20,
    paddingVertical: 10,
    color: 'white',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'blue',
  },
  input: {
    flex: 5,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  operatorButton: {
    backgroundColor: '#e67e22',
  },
  buttonText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
});
