import { useContext } from 'react';
import { ChallangeContexts } from '../contexts/ChallangesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallangeBox.module.css';

export function ChallangeBox() {
  const { activeChallenge, resetChallenge, completeChallange } = useContext(
    ChallangeContexts
  );
  const { resetCountdown } = useContext(CountdownContext);
  function handleChallengeSucceeded() {
    completeChallange();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }
  return (
    <div className={styles.challangeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Exercise icon"
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challangeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challangeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up icon" />
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </div>
      )}
    </div>
  );
}
