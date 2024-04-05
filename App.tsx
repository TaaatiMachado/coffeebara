import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Navigation from './src/routes/navigation';
import { AuthProvider } from './src/context/Auth';
import { ProdProvider } from './src/context/Products';


function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        animated={true}
        backgroundColor="#2d1e16"
        barStyle='light-content'
        showHideTransition='fade'
      />
      <AuthProvider>
        <ProdProvider>
        <Navigation />
        </ProdProvider>
      </AuthProvider>

    </SafeAreaView>
  );
}


export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})