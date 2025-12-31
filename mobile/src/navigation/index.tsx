import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens/auth/LoginScreen'
import { SignupScreen } from '../screens/auth/SignupScreen'
import { MemberHomeScreen } from '../screens/member/MemberHomeScreen'
import { StaffHomeScreen } from '../screens/staff/StaffHomeScreen'

const Stack = createNativeStackNavigator()

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MemberHome" component={MemberHomeScreen} />
        <Stack.Screen name="StaffHome" component={StaffHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
