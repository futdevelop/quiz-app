import { Button, Progress } from 'antd'
import React from 'react'

export const ResultBlock = ({
  score,
  price,
  amount,
  status,
  comeBackMainLobby,
  restartQuizz,
  handleTrick,
  activeResultsFunc
}) => (
  <div className='flex justify-center items-center h-[100vh] text-white'>
    <div className='flex flex-col'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex justify-start items-start flex-col text-2xl mr-4'>
          <h1 className='mb-[20px]'>{price}</h1>
          <p>Твій результат: {score}</p>
        </div>
        <div onClick={handleTrick}>
          <Progress
            type='circle'
            status={status}
            percent={(score / amount) * 100}
          />
        </div>
      </div>
      <div className='flex justify-between'>
        <Button type='primary' className='mb-4' onClick={restartQuizz}>
          Пройти ще раз
        </Button>
        <Button type='primary' onClick={comeBackMainLobby}>
          Головне меню
        </Button>
      </div>
      <Button onClick={activeResultsFunc} type='primary'>Подивитися відповіді</Button>
    </div>
  </div>
)
