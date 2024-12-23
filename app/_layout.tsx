import { Stack } from 'expo-router';
import { LoginProvider } from './context/logincontext';

export default function RootLayout() {
  return (
    <LoginProvider>
      <Stack
        screenOptions={{
          headerShown: false, // Header global tidak ditampilkan
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login" />
        <Stack.Screen name="setting/index" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="setting/language" />
        <Stack.Screen name="setting/notification" />
        <Stack.Screen name="setting/privacydata" />
        <Stack.Screen name="setting/helpcenter" />
        <Stack.Screen name="setting/about" />
      </Stack>
    </LoginProvider>
  );
}
