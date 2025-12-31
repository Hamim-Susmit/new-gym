import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY_PREFIX = 'gym-platform:'

export async function saveItem(key: string, value: string) {
  await AsyncStorage.setItem(`${KEY_PREFIX}${key}`, value)
}

export async function getItem(key: string) {
  return AsyncStorage.getItem(`${KEY_PREFIX}${key}`)
}

export async function removeItem(key: string) {
  await AsyncStorage.removeItem(`${KEY_PREFIX}${key}`)
}
