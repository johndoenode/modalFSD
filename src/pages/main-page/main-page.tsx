import { useState } from 'react';
import { FeedbackModal } from '@/features/feedback-form';
import { StyledButton } from '@/shared/ui/styled-button';
import styles from './main-page.module.css';

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.root}>
      <StyledButton onClick={() => setIsModalOpen(true)}>
        Оставить заявку
      </StyledButton>

      <FeedbackModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
