import styles from '../styles/components/LevelUpModal.module.css';
import { useContext } from 'react';
import { ChallangeContexts } from '../contexts/ChallangesContext';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallangeContexts);

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close button" />
        </button>
      </div>
    </div>
  );
}
