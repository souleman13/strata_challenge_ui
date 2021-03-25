import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    toArabicNumeralOutput: '',
    toRomanNumeralOutput: '',
    loading: false
}

export const convertToArabicNumeral = createAsyncThunk('ops/convertToArabicNumeral', async (input) => {
    const fetchProps = {
        method: 'post',
        body: JSON.stringify({ "startVal": input }),
        headers: { 'Content-Type': 'application/json' },
    }
    const response = await fetch('http://localhost:4000/toArabicNumeral', fetchProps)
        .then(res => res.json())
        .catch(err => console.log(err))
    return response.result
})

const operationSlice = createSlice({
    name: 'ops',
    initialState,
    reducers: {
    },
    extraReducers: {
        [convertToArabicNumeral.pending]: (state, action) => {
          state.loading = true
        },
        [convertToArabicNumeral.fulfilled]: (state, action) => {
          state.status = false
          state.toArabicNumeralOutput = action.payload
        },
        [convertToArabicNumeral.rejected]: (state, action) => {
          state.status = false
          console.log(action.error.message)
        }
      }
})

export default operationSlice.reducer