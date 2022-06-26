import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: '',
    name: '',
    isNumber: false,
    isName: false,
    disabled: false,
    nameRed: '',
    numberRed: '',

}

const sliceFunc = createSlice({
    name: 'registration',
    initialState: initialState,
    reducers: {
        numberChangeHandler(state, action) {
            const number = action.payload
            state.number = number
            state.isNumber = number !== isNaN && number !== null ? true : false
        },
        nameChangeHandler(state, action) {
            const name = action.payload
            state.name = name
            state.isName = name !== '' && name !== null ? true : false
        },
        submitHandler(state) {
            console.log(state.name);
            console.log(state.number);
            state.name=''
            state.number=''
        },
        nameBlurChangeHandler(state) {
            state.nameRed = state.isName ? 'forNumber' : 'invalid'
        },
        numberBlurChangeHandler(state) {
            state.numberRed = state.isNumber ? 'forNumber' : 'invalid'
        }


    }
})

export const sliceActions = sliceFunc.actions
export default sliceFunc