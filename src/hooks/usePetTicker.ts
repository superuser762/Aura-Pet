import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';

import { useAppDispatch } from '@/store/hooks';
import { tickTime } from '@/store/slices/petSlice';

/**
 * Runs a periodic "game tick" that slowly updates pet stats.
 */
export const usePetTicker = (
  realSecondsPerTick: number = 10,
  gameMinutesPerTick: number = 5,
) => {
  const dispatch = useAppDispatch();
  const appState = useRef<AppStateStatus>('active');

  useEffect(() => {
    const sub = AppState.addEventListener('change', (nextState) => {
      appState.current = nextState;
    });

    const interval = setInterval(() => {
      if (appState.current === 'active') {
        // App is in foreground → advance game time
        dispatch(tickTime(gameMinutesPerTick));
      }
    }, realSecondsPerTick * 1000);

    return () => {
      sub.remove();
      clearInterval(interval);
    };
  }, [dispatch, realSecondsPerTick, gameMinutesPerTick]);
};
