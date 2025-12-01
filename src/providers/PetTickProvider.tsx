import React, { PropsWithChildren } from 'react';
import { usePetTicker } from '../hooks/usePetTicker';

const PetTickProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // You can tweak these numbers later
  usePetTicker(10, 5); // 10 seconds real time = 5 minutes game time

  return <>{children}</>;
};

export default PetTickProvider;
