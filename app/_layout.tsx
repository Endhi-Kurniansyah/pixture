import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Atur header tidak ditampilkan secara global
      }}
    >
      <Stack.Screen name="screen" />
      <Stack.Screen name="login" />
      <Stack.Screen name="setting" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="utils" />
      <Stack.Screen name="notification" />
      <Stack.Screen name="setting/privacydata" />
      <Stack.Screen name="setting/helpcenter" />
      <Stack.Screen name="setting/about" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
