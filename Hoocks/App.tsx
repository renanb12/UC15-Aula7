import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/screens/Login';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Login />
    </SafeAreaView>
  );
}