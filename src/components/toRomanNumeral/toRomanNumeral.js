import {useState} from 'react'
import { convertToRomanNumeral } from '../../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'
import './toRomanNumeral.css';

function ToRomanNumeralInput() {
  //JS Work
  const [input, setInput] = useState('')
  const output = useSelector(state => state.ops.toRomanNumeralOutput)
  const dispatch = useDispatch()
  const onConvertClick = () => {
    if (input !== '') {
      dispatch(
        convertToRomanNumeral(input)
      )
    }
  }

  return (
    <div className="ToRomanNumeral">
        <input type='text' onChange={e => setInput(e.target.value)}/>
        <input type='button' value='convert' onClick={onConvertClick} />
        <div>{output}</div>
    </div>
  );
}

export default ToRomanNumeralInput;