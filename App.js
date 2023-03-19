import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';

export default function App() {

  const names = ["Marlen", "Edgard", "Jose Angel", "Rosalinda"]

  return (
    <View style={styles.container}>
      {names.map((name) => (
        <Welcome name={name}/>
      ))}
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
