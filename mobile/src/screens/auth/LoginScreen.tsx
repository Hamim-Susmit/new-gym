import { View, Text } from 'react-native'
import { Screen } from '../../components/Screen'

export function LoginScreen() {
  return (
    <Screen>
      <View>
        <Text style={{ fontSize: 28, fontWeight: '600', color: '#f8fafc' }}>Welcome back</Text>
        <Text style={{ marginTop: 8, color: '#cbd5f5' }}>Sign in to access your gym.</Text>
      </View>
    </Screen>
  )
}
