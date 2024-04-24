export const Questions = ({ quizData, num, amount }) => {
  return (
    <div className='mt-[30px] flex justify-between items-start'>
      <p className='text-xl'>{quizData[num] && quizData[num].question}</p>
      <div className='w-[100px] flex justify-end'>{num + 1} of {amount}</div>
    </div>
  )
}
