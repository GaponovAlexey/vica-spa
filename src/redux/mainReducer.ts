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

// Action creators are generated for each case reducer function
export const {isLanguage} = mainState.actions

export default mainState.reducer
