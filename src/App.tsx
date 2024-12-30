import { useState } from 'react';
import { Button } from '@mui/material';
import { FeedbackModal } from '@/features/feedback-form';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <Button
        variant="contained"
        onClick={() => setIsModalOpen(true)}
        sx={{
          backgroundColor: '#ff5252',
          '&:hover': {
            backgroundColor: '#ff1744',
          },
        }}
      >
        Оставить заявку
      </Button>

      <FeedbackModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
