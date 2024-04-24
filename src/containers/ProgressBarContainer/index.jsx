import React from 'react';
import { useSelector } from 'react-redux';
import { ProgressBar }  from '../../components/ProgressBar';
import { quizSlice } from '../../store/selectors';

export const ProgressBarContainer = () => {
  const { currQuestion, amountOfQuestions } = useSelector(quizSlice);
  const percent = Math.floor((currQuestion / amountOfQuestions) * 100);
  
  const formatPercentText = percent => `${percent}%`;

  return (
    <ProgressBar percent={percent} formatPercentText={formatPercentText} />
  );
};