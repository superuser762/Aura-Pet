import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EvolutionStage } from '../../evolutionStage';

export type PersonalityTrait =
  | 'curious'
  | 'shy'
  | 'energetic'
  | 'calm'
  | 'playful'
  | 'protective'
  | 'affectionate'
  | 'mischievous';

export type PetMood = 'happy' | 'relaxed' | 'excited' | 'tired' | 'sad' | 'anxious';

export interface PetState {
  name: string;
  species: string;
  ageDays: number;
  energy: number;      // 0–100
  hunger: number;      // 0–100 (higher = more hungry)
  cleanliness: number; // 0–100
  affection: number;   // 0–100
  xp: number;
  mood: PetMood;
  auraColor: string;
  personality: PersonalityTrait[];
  evolutionStage: EvolutionStage;
  lastInteraction: string | null;
}

const initialState: PetState = {
  name: 'Aura',
  species: 'Spirit',
  ageDays: 0,
  energy: 80,
  hunger: 20,
  cleanliness: 80,
  affection: 50,
  xp: 0,
  mood: 'happy',
  auraColor: '#B794F4',
  personality: ['curious', 'playful'],
  evolutionStage: 'sparkling_seed',
  lastInteraction: null,
};

type InteractionType = 'feed' | 'play' | 'clean' | 'pet' | 'rest';

const clamp = (val: number, min = 0, max = 100) =>
  Math.max(min, Math.min(max, val));

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    setPetName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    /** 🔁 TICK: minutes passed in game time */
    tickTime(state, action: PayloadAction<number>) {
      const minutes = action.payload;

      // passive stat drift
      state.hunger = clamp(state.hunger + minutes * 0.5);     // slowly gets hungry
      state.energy = clamp(state.energy - minutes * 0.4);     // loses energy
      state.cleanliness = clamp(state.cleanliness - minutes * 0.2);

      // age slowly
      state.ageDays += minutes / (60 * 24);

      updateMoodAndAura(state);
      updateEvolutionStage(state);
    },

    /** user interaction events (buttons, petting, etc.) */
    interact(state, action: PayloadAction<InteractionType>) {
      const type = action.payload;
      state.lastInteraction = new Date().toISOString();
      state.xp += 2;

      switch (type) {
        case 'feed':
          state.hunger = clamp(state.hunger - 40);
          state.energy = clamp(state.energy + 10);
          state.affection = clamp(state.affection + 5);
          break;
        case 'play':
          state.energy = clamp(state.energy - 15);
          state.affection = clamp(state.affection + 10);
          state.cleanliness = clamp(state.cleanliness - 5);
          break;
        case 'clean':
          state.cleanliness = clamp(state.cleanliness + 40);
          state.affection = clamp(state.affection + 3);
          break;
        case 'pet':
          state.affection = clamp(state.affection + 8);
          break;
        case 'rest':
          state.energy = clamp(state.energy + 25);
          break;
      }

      // adjust personality a bit
      if (type === 'play' && !state.personality.includes('energetic')) {
        state.personality.push('energetic');
      }
      if (type === 'pet' && !state.personality.includes('affectionate')) {
        state.personality.push('affectionate');
      }

      updateMoodAndAura(state);
      updateEvolutionStage(state);
    },
  },
});

function updateMoodAndAura(state: PetState) {
  if (state.hunger > 75 || state.cleanliness < 30) {
    state.mood = 'sad';
    state.auraColor = '#F97373'; // reddish
  } else if (state.energy < 25) {
    state.mood = 'tired';
    state.auraColor = '#60A5FA'; // soft blue
  } else if (state.affection > 70) {
    state.mood = 'excited';
    state.auraColor = '#FDE047'; // gold
  } else {
    state.mood = 'happy';
    state.auraColor = '#B794F4'; // lavender
  }
}

function updateEvolutionStage(state: PetState) {
  const xp = state.xp;
  if (xp > 200) state.evolutionStage = 'elder_spirit';
  else if (xp > 150) state.evolutionStage = 'lumifox';
  else if (xp > 100) state.evolutionStage = 'auraling';
  else if (xp > 60) state.evolutionStage = 'little_spirit';
  else if (xp > 25) state.evolutionStage = 'baby_glow';
  else state.evolutionStage = 'sparkling_seed';
}

export const { setPetName, tickTime, interact } = petSlice.actions;
export default petSlice.reducer;
