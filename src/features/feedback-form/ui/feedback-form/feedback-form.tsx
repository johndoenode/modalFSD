import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { feedbackSchema } from '../../model/schema';
import { textFieldStyles } from '@/shared/ui/styled-text-field';
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
            <TextField
              {...field}
              label="ФИО*"
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              sx={textFieldStyles}
              fullWidth
            />
          )}
        />

        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Компания*"
              error={!!errors.company}
              helperText={errors.company?.message}
              sx={textFieldStyles}
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
            <TextField
              {...field}
              label="E-mail*"
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={textFieldStyles}
              fullWidth
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Телефон*"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={textFieldStyles}
              fullWidth
            />
          )}
        />
      </div>

      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            rows={4}
            label="Оставьте ваш комментарий"
            error={!!errors.comment}
            helperText={errors.comment?.message}
            sx={textFieldStyles}
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

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#ff5252',
            '&:hover': {
              backgroundColor: '#ff1744',
            },
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '16px',
            height: '48px',
            borderRadius: '8px',
            padding: '14px 32px',
          }}
        >
          Отправить
        </Button>
      </div>
    </form>
  );
};
