export type EvolutionStage =
  | 'sparkling_seed'
  | 'baby_glow'
  | 'little_spirit'
  | 'auraling'
  | 'lumifox'
  | 'elder_spirit';

export interface PetAppearance {
  size: number;
  color: string;
  emoji: string;
}

export const getPetAppearance = (stage: EvolutionStage): PetAppearance => {
  switch (stage) {
    case 'sparkling_seed':
      return { size: 0.7, color: '#FDE047', emoji: '✨' };
    case 'baby_glow':
      return { size: 0.85, color: '#A7F3D0', emoji: '🌱' };
    case 'little_spirit':
      return { size: 1, color: '#F9A8D4', emoji: '🌸' };
    case 'auraling':
      return { size: 1.15, color: '#C4B5FD', emoji: '👁️' };
    case 'lumifox':
      return { size: 1.3, color: '#F59E0B', emoji: '🦊' };
    case 'elder_spirit':
      return { size: 1.5, color: '#8B5CF6', emoji: '👑' };
    default:
      return { size: 0.7, color: '#FDE047', emoji: '✨' };
  }
};
