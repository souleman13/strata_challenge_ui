import {useState} from 'react'
import { convertToArabicNumeral } from '../../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'
import './toArabicNumeral.css';

function ToArabicNumeralInput() {
  //JS Work
  const [input, setInput] = useState('')
  const output = useSelector(state => state.ops.toArabicNumeralOutput)
  const dispatch = useDispatch()
  const onConvertClick = () => {
      console.log(input)
    if (input !== '') {
      dispatch(
        convertToArabicNumeral(input)
      )
    }
  }

  return (
    <div className="ToArabicNumeral">
        <input type='text' onChange={e => setInput(e.target.value)}/>
        <input type='button' value='convert' onClick={onConvertClick} />
        <div>{output}</div>
    </div>
  );
}

export default ToArabicNumeralInput;