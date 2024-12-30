import { useState } from 'react';
import { StyledButton } from '@/shared/ui/styled-button';
import { FeedbackModal } from '../feedback-modal/feedback-modal';
import styles from './feedback.module.css';

export const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.widget}>
      <StyledButton onClick={() => setIsModalOpen(true)}>
        Оставить заявку
      </StyledButton>

      <FeedbackModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
