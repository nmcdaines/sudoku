import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameButton } from './src/button'
import { Grid } from './src/grid';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Grid  />
      <GameButton />
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
