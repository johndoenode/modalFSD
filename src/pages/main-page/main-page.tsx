import { Feedback } from '@/features/feedback';
import styles from './main-page.module.css';

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <Feedback />
    </div>
  );
};
