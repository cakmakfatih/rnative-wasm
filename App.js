import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import init from './lib/wasm_hw';

export default function App() {
  useEffect(() => {
    init('http://localhost:3000').then((wasm) => {
      wasm.zksync_crypto_init();
      
      const privateKey = wasm.privateKeyFromSeed(new Uint8Array(1));
      console.log(privateKey);
    });
  }, []);

  return (
    <View style={styles.container}>
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
