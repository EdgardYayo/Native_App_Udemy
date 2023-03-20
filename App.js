import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
// import Welcome from './components/Welcome';
// import { WebView } from "react-native-webview";
import Signup from './screens/Signup';


export default function App() {

  return (
   <Signup />
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

// const names = ["Marlen", "Edgard", "Jose Angel", "Rosalinda"]

// <WebView source={{ uri: "https://codecontinue.com" }}/>

// <View style={styles.container}>
// {names.map((name) => (
//   <Welcome key={name} name={name}/>
// ))}
// </View>
