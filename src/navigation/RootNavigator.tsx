import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import DashboardScreen from '../screens/DashboardScreen';
import CareScreen from '../screens/CareScreen';
import EvolutionScreen from '../screens/EvolutionScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
  Dashboard: undefined;
  Care: undefined;
  Evolution: undefined;
  Chat: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LoadingScreen = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#B794F4" />
  </View>
);

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);

  return (
    <NavigationContainer
      onReady={() => setIsReady(true)}
      fallback={<LoadingScreen />}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { 
            backgroundColor: '#020617',
          },
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Care" component={CareScreen} />
        <Stack.Screen name="Evolution" component={EvolutionScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020617',
  },
});

export default RootNavigator;
