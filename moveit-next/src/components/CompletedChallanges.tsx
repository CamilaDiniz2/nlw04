import { useContext } from 'react';
import { ChallangeContexts } from '../contexts/ChallangesContext';
import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {
  const { challengesCompleted } = useContext(ChallangeContexts);
  return (
    <div className={styles.completedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
