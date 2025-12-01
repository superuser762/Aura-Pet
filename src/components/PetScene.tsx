import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { interact } from '../store/slices/petSlice';
import { getPetAppearance, PetAppearance } from '../evolutionStage';

const PetScene: React.FC = () => {
  const pet = useAppSelector((state) => state.pet);
  const dispatch = useAppDispatch();

  const appearance: PetAppearance = getPetAppearance(pet.evolutionStage);

  // Floating animation
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 2000 }),
        withTiming(0, { duration: 2000 })
      ),
      -1,
      false
    );

    // Gentle rotation for more life
    rotation.value = withRepeat(
      withSequence(
        withTiming(5, { duration: 3000 }),
        withTiming(-5, { duration: 3000 })
      ),
      -1,
      true
    );
  }, [translateY, rotation]);

  const handlePetTap = (): void => {
    scale.value = withSequence(
      withSpring(1.2, { damping: 2 }),
      withSpring(1)
    );
    dispatch(interact('pet'));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { scale: scale.value * appearance.size },
        { rotate: `${rotation.value}deg` }
      ],
    };
  });

  return (
    <View style={styles.container}>
      {/* Aura glow */}
      <LinearGradient
        colors={[pet.auraColor + '55', pet.auraColor]}
        style={styles.auraGlow}
      />

      {/* Pet sprite */}
      <Pressable onPress={handlePetTap} style={styles.petWrapper}>
        <Animated.View style={[styles.petCircle, animatedStyle, { backgroundColor: appearance.color }]}>
          <Text style={styles.petEmoji}>{appearance.emoji}</Text>
        </Animated.View>
      </Pressable>

      <View style={styles.moodTag}>
        <Text style={styles.moodText}>
          {pet.name} · {pet.mood.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

const SIZE = 220;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  petWrapper: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
  petCircle: {
    width: SIZE - 20,
    height: SIZE - 20,
    borderRadius: (SIZE - 20) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  petEmoji: {
    fontSize: 80,
  },

  auraGlow: {
    width: SIZE + 40,
    height: SIZE + 40,
    borderRadius: (SIZE + 40) / 2,
    opacity: 0.85,
    position: 'absolute',
  },
  petImage: {
    width: SIZE,
    height: SIZE,
    resizeMode: 'contain',
  },
  moodTag: {
    marginTop: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(15,23,42,0.8)',
  },
  moodText: {
    color: '#F9FAFB',
    fontSize: 13,
  },
});

export default PetScene;