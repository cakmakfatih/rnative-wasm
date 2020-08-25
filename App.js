import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import init from './lib/wasm_hw';

export default function App() {
  const [addResult, setAddResult] = useState(0);

  useEffect(() => {
    init('http://localhost:3000').then((wasm) => {
      wasm.zksync_crypto_init();
      console.log(wasm);
      const privateKey = wasm.privateKeyFromSeed(new Uint8Array(1));
      console.log(privateKey);
    }).catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text>WASM add result: {addResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
