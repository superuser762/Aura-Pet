
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Evolution'>;

const EvolutionScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evolution</Text>
      <Text style={styles.subtitle}>
        This is a placeholder screen. We’ll show your pet’s evolution tree here.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Pet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: '#E5E7EB', marginBottom: 8, textAlign: 'center' },
  subtitle: { color: '#9CA3AF', textAlign: 'center', marginBottom: 16 },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  buttonText: { color: '#E5E7EB' },
});

export default EvolutionScreen;
