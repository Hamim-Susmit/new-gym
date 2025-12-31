import { View, Text } from 'react-native'
import { Screen } from '../../components/Screen'

export function SignupScreen() {
  return (
    <Screen>
      <View>
        <Text style={{ fontSize: 28, fontWeight: '600', color: '#f8fafc' }}>Create account</Text>
        <Text style={{ marginTop: 8, color: '#cbd5f5' }}>Join your gym community.</Text>
      </View>
    </Screen>
  )
}
