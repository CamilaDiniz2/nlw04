import { useContext } from 'react';
import { ChallangeContexts } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallangeContexts);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/camiladiniz2.png" alt="Avatar" />
      <div>
        <strong>Camila Diniz</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
