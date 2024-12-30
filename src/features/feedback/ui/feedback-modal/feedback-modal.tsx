import { Modal } from '@mui/material';
import { FeedbackForm } from '../feedback-form';
import type { FeedbackModalProps, FeedbackFormData } from '../../model/types';
import styles from './feedback-modal.module.css';

export const FeedbackModal = ({ open, onClose }: FeedbackModalProps) => {
  const handleSubmit = async (data: FeedbackFormData) => {
    try {
      if (!data.agreement) return;
      console.log(data);
      onClose();
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="feedback-modal-title">
      <div className={styles.modal}>
        <h2 className={styles.title}>Оставить заявку</h2>
        <FeedbackForm onSubmit={handleSubmit} />
      </div>
    </Modal>
  );
};
