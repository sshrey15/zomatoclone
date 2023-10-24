import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import Categories from './components/Categories';

export default function App() {
  return (
    <SafeAreaView style={styles.conatiner} > 
      <View>
      <Home/>
      </View>
      
        
      
      
      
    </SafeAreaView>
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
