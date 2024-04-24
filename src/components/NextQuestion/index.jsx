export const NextQuestion = ({ Button, clickHandle }) => {
  return (
    <div className='flex justify-end'>
      <Button type='primary' onClick={clickHandle} >
        Next
      </Button>
    </div>
  )
}
