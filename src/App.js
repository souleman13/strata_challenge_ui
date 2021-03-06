import ToArabicNumeralInput from './components/toArabicNumeral/toArabicNumeral'
import ToRomanNumeralInput from './components/toRomanNumeral/toRomanNumeral'
import { useSelector } from 'react-redux'
import './App.css';

function App() {
  //JS
  //HTML
  return (
    <div className="App">
      <h1>Roman Numeral Converter</h1>
      <div className="Row">
        <div className="Column">
          <div>toArabicNumeral</div>
          <ToArabicNumeralInput />
        </div>
        <div className="Column">
          <div>toRomanNumeral</div>
          <ToRomanNumeralInput />
        </div>
      </div>

      <div>{useSelector(state => state.ops.error)}</div>
    </div>
  );
}

export default App;
