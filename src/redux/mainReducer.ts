import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMainState {
  language: boolean
}

const initialState: IMainState = {
  language: false,
}

export const mainState = createSlice({
  name: 'mainState',
  initialState,
  reducers: {
    isLanguage: (state) => {
      state.language = !state.language
    },
  },
})

export const {isLanguage} = mainState.actions

export default mainState.reducer
