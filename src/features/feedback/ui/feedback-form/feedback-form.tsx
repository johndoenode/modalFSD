import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox, FormControlLabel } from '@mui/material';
import { feedbackSchema } from '../../model/schema';
import { StyledInput } from '@/shared/ui/styled-input';
import { StyledButton } from '@/shared/ui/styled-button';
import type { FeedbackFormData } from '../../model/types';
import styles from './feedback-form.module.css';

interface FeedbackFormProps {
  onSubmit: (data: FeedbackFormData) => void;
}

export const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      comment: '',
      agreement: false,
    },
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              label="ФИО*"
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              label="Компания*"
              error={!!errors.company}
              helperText={errors.company?.message}
              fullWidth
            />
          )}
        />
      </div>

      <div className={styles.row}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              label="Email*"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              label="Телефон*"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              fullWidth
            />
          )}
        />
      </div>

      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <StyledInput
            {...field}
            multiline
            rows={4}
            label="Оставьте ваш комментарий"
            error={!!errors.comment}
            helperText={errors.comment?.message}
            fullWidth
          />
        )}
      />

      <div className={styles.footer}>
        <div className={styles.agreement}>
          <Controller
            name="agreement"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      '&.Mui-checked': { color: '#ff5252' },
                    }}
                  />
                }
                label={
                  <span className={styles.checkbox}>
                    Согласен с обработкой персональных данных в соответствии с
                    <a href="/policy" target="_blank">
                      Политикой оператора
                    </a>
                  </span>
                }
              />
            )}
          />
          {errors.agreement && (
            <span className={styles.error}>{errors.agreement.message}</span>
          )}
        </div>

        <StyledButton type="submit">Отправить</StyledButton>
      </div>
    </form>
  );
};
