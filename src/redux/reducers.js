import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    toArabicNumeralOutput: '',
    toRomanNumeralOutput: '',
    loading: false,
    error: ''
}

export const convertToRomanNumeral = createAsyncThunk('ops/convertToRomanNumeral', async (input) => {
    const fetchProps = {
        method: 'post',
        body: JSON.stringify({ "startVal": input }),
        headers: { 'Content-Type': 'application/json' },
    }
    const response = await fetch('http://localhost:4000/toRomanNumeral', fetchProps)
        .then(res => res.json())
    return response.result
})

export const convertToArabicNumeral = createAsyncThunk('ops/convertToArabicNumeral', async (input) => {
    const fetchProps = {
        method: 'post',
        body: JSON.stringify({ "startVal": input }),
        headers: { 'Content-Type': 'application/json' },
    }
    const response = await fetch('http://localhost:4000/toArabicNumeral', fetchProps)
        .then(res => res.json())
    return response
})

const operationSlice = createSlice({
    name: 'ops',
    initialState,
    reducers: {
    },
    extraReducers: {
        [convertToRomanNumeral.pending]: (state, action) => {
            state.loading = true
        },
        [convertToRomanNumeral.fulfilled]: (state, action) => {
            state.status = false
            state.error = action.payload.error
            state.toRomanNumeralOutput = action.payload.result
        },
        [convertToRomanNumeral.rejected]: (state, action) => {
            state.status = false
            state.errror = action.payload.error.message
        },
        [convertToArabicNumeral.pending]: (state, action) => {
            state.loading = true
        },
        [convertToArabicNumeral.fulfilled]: (state, action) => {
            state.status = false
            state.error = action.payload.error
            state.toArabicNumeralOutput = action.payload.result
        },
        [convertToArabicNumeral.rejected]: (state, action) => {
            state.status = false
            state.error = action.payload.error.message
        }
    }
})

export default operationSlice.reducer