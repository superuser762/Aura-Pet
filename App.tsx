import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';
import RootNavigator from '@/navigation/RootNavigator';
import PetTickProvider from '@/providers/PetTickProvider';

export default function App() {
  return (
    <Provider store={store}>
      <PetTickProvider>
        <RootNavigator />
        <StatusBar style="light" />
      </PetTickProvider>
    </Provider>
  );
}
