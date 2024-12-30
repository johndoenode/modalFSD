export interface FeedbackFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  comment?: string;
  agreement: boolean;
}

export interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
}
