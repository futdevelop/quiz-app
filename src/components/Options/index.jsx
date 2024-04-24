export const Options = ({ Radio, quizData, num, onChange, value, correct, incorrect, activatedResults }) => {


  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        {
          quizData[num].options.map((item, i) => {
            return (
              <Radio
                key={i}
                value={i + 1}
                className={`text-lg border-[1px] rounded-[10px] mt-4 ml-2 w-[300px] p-2 ${
                  incorrect === item
                    ? 'text-red-600 border-red-600'
                    : correct === item
                    ? 'text-green-600 border-green-600'
                    : 'text-white'
                }`}
              >
                {item}
              </Radio>
            )
          })}
      </Radio.Group>
    </>
  )
}

// ` incorrect === item ? `text-red-600 border-red-600`
// : correct === item ? `text-green-600 border-green-600`
// : `text-white`
