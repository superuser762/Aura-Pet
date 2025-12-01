import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import PetSceneSimple from '../components/PetSceneSimple';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const pet = useSelector((state: RootState) => state.pet);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>AuraPet</Text>
      <Text style={styles.subtitle}>Your evolving aura companion</Text>

      <PetSceneSimple />

      <View style={styles.cardRow}>
        <StatCard label="Energy" value={pet.energy} inverse={false} />
        <StatCard label="Hunger" value={pet.hunger} inverse={true} />
      </View>

      <View style={styles.cardRow}>
        <StatCard label="Affection" value={pet.affection} inverse={false} />
        <StatCard label="Cleanliness" value={pet.cleanliness} inverse={false} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>What do you want to do?</Text>
        <View style={styles.buttonRow}>
          <NavButton label="Care" onPress={() => navigation.navigate('Care')} />
          <NavButton label="Evolution" onPress={() => navigation.navigate('Evolution')} />
        </View>
        <View style={styles.buttonRow}>
          <NavButton label="Chat" onPress={() => navigation.navigate('Chat')} />
          <NavButton label="Settings" onPress={() => navigation.navigate('Settings')} />
        </View>
      </View>
    </ScrollView>
  );
};

const StatCard = ({
  label,
  value,
  inverse,
}: {
  label: string;
  value: number;
  inverse?: boolean;
}) => {
  const percent = inverse ? 100 - value : value;
  
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{Math.round(value)}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { flex: percent / 100 }]} />
        <View style={{ flex: (100 - percent) / 100 }} />
      </View>
    </View>
  );
};

const NavButton = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress}>
    <Text style={styles.navButtonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E5E7EB',
  },
  subtitle: {
    color: '#9CA3AF',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 6,
  },
  statLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E5E7EB',
    marginVertical: 4,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1F2933',
    overflow: 'hidden',
  },
  progressFill: {
    height: 6,
    backgroundColor: '#FBBF24',
  },
  card: {
    backgroundColor: '#020617',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1F2937',
    padding: 16,
    marginTop: 12,
  },
  sectionTitle: {
    color: '#E5E7EB',
    fontWeight: '600',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#111827',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4B5563',
    marginHorizontal: 4,
  },
  navButtonText: {
    color: '#E5E7EB',
    fontWeight: '500',
  },
});

export default DashboardScreen;
