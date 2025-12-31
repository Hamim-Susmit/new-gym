import { View, Text } from 'react-native'
import { Screen } from '../../components/Screen'

export function MemberHomeScreen() {
  return (
    <Screen>
      <View>
        <Text style={{ fontSize: 28, fontWeight: '600', color: '#f8fafc' }}>Member dashboard</Text>
        <Text style={{ marginTop: 8, color: '#cbd5f5' }}>Your QR code and class schedule live here.</Text>
      </View>
    </Screen>
  )
}
