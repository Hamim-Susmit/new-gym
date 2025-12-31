import { View, Text } from 'react-native'
import { Screen } from '../../components/Screen'

export function StaffHomeScreen() {
  return (
    <Screen>
      <View>
        <Text style={{ fontSize: 28, fontWeight: '600', color: '#f8fafc' }}>Staff dashboard</Text>
        <Text style={{ marginTop: 8, color: '#cbd5f5' }}>Live check-ins and member search.</Text>
      </View>
    </Screen>
  )
}
