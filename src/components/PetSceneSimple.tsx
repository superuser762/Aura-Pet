import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { interact } from '../store/slices/petSlice';
import { getPetAppearance, PetAppearance } from '../evolutionStage';

const PetSceneSimple: React.FC = () => {
  const pet = useAppSelector((state) => state.pet);
  const dispatch = useAppDispatch();

  const appearance: PetAppearance = getPetAppearance(pet.evolutionStage);

  const handlePetTap = (): void => {
    dispatch(interact('pet'));
  };

  const petCircleSize = (220 - 20) * appearance.size;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[pet.auraColor + '55', pet.auraColor]}
        style={styles.auraGlow}
      />

      <Pressable onPress={handlePetTap} style={styles.petWrapper}>
        <View style={[styles.petCircle, { 
          backgroundColor: appearance.color,
          width: petCircleSize,
          height: petCircleSize,
          borderRadius: petCircleSize / 2
        }]}>
          <Text style={styles.petEmoji}>{appearance.emoji}</Text>
        </View>
      </Pressable>

      <View style={styles.moodTag}>
        <Text style={styles.moodText}>
          {pet.name} · {pet.mood.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petWrapper: {
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  petCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  petEmoji: {
    fontSize: 80,
  },
  auraGlow: {
    width: 260,
    height: 260,
    borderRadius: 130,
    opacity: 0.85,
    position: 'absolute',
  },
  moodTag: {
    marginTop: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(15,23,42,0.8)',
  },
  moodText: {
    color: '#F9FAFB',
    fontSize: 13,
  },
});

export default PetSceneSimple;
