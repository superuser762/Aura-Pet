import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { interact } from '../store/slices/petSlice';
import type { InteractionType } from '../store/slices/petSlice';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Care'>;
interface Action {
  type: InteractionType;
  label: string;
  description: string;
}

const CareScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const pet = useSelector((state: RootState) => state.pet);
  const actions: Action[] = [
    { type: 'feed' as InteractionType, label: 'Feed', description: 'Give a glowing snack' },
    { type: 'play' as InteractionType, label: 'Play', description: 'Play a quick game' },
    { type: 'clean' as InteractionType, label: 'Clean', description: 'Aura bath time' },
    { type: 'rest' as InteractionType, label: 'Rest', description: 'Let them recharge' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Care for {pet.name}</Text>
      <Text style={styles.subtitle}>Tap an action to change your pet’s mood and aura.</Text>

      {actions.map((a) => (
        <TouchableOpacity
          key={a.type}
          style={styles.card}
          onPress={() => dispatch(interact(a.type))}
        >
          <Text style={styles.cardTitle}>{a.label}</Text>
          <Text style={styles.cardText}>{a.description}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back to Pet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  content: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#E5E7EB', marginBottom: 4 },
  subtitle: { color: '#9CA3AF', marginBottom: 12 },
  card: {
    backgroundColor: '#0F172A',
    padding: 14,
    borderRadius: 16,
    marginBottom: 10,
  },
  cardTitle: { color: '#F9FAFB', fontSize: 16, fontWeight: '600' },
  cardText: { color: '#9CA3AF', marginTop: 4 },
  backButton: {
    marginTop: 16,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  backText: { color: '#E5E7EB' },
});

export default CareScreen;
