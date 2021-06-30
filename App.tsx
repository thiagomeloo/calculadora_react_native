import React, { useState } from 'react';
import { Text, View } from 'react-native';

//componentes
import ButtonCalc from './src/components/ButtonCalc';

import styles from './src/styles/globalStyle';

export default function App() {



  const [expression, setExpression] = useState('');


  const [result, setResult] = useState('')



  function calculaResult() {
    setResult(expression + " = " + eval(expression))
  }

  function updateOperador(op: string) {
    let str = expression.toString();
    str = str.substr(str.length - 1)
    if (str != "+" && str != "-" && str != "/" && str != "*" && str != "." && str.length > 0) {
      setExpression(expression + op);
    }
  }


  function clearDisplay() {
    setExpression('');
    setResult('');
  }


  return (
    <View style={styles.container}>


      <View style={[styles.resultView, { alignSelf: 'center' }]}>
        <Text style={styles.textExpression}> {expression}</Text>

        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.row}>
        <ButtonCalc text="9" func={() => setExpression(expression + '9')} />
        <ButtonCalc text="8" func={() => setExpression(expression + '8')} />
        <ButtonCalc text="7" func={() => setExpression(expression + '7')} />

        <ButtonCalc text="+" func={() => updateOperador("+")} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="6" func={() => setExpression(expression + '6')} />
        <ButtonCalc text="5" func={() => setExpression(expression + '5')} />
        <ButtonCalc text="4" func={() => setExpression(expression + '4')} />

        <ButtonCalc text="-" func={() => updateOperador("-")} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="3" func={() => setExpression(expression + '3')} />
        <ButtonCalc text="2" func={() => setExpression(expression + '2')} />
        <ButtonCalc text="1" func={() => setExpression(expression + '1')} />

        <ButtonCalc text="*" func={() => updateOperador("*")} />
      </View>


      <View style={styles.row}>

        <ButtonCalc text="." func={() => updateOperador(".")} />
        <ButtonCalc text="0" func={() => setExpression(expression + '0')} />
        <ButtonCalc text="ce" func={() => clearDisplay()} />

        <ButtonCalc text="/" func={() => updateOperador("/")} />

      </View>

      <ButtonCalc text="=" fullwidth func={() => calculaResult()} />

    </View >
  );
}

