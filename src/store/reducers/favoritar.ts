import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritarState = {
  items: Produto[]
}

const initialState: FavoritarState = {
  items: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favorita: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.items.find((p) => p.id === produto.id)

      if (existe) {
        state.items = state.items.filter((p) => p.id !== produto.id)
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { favorita } = favoritarSlice.actions
export default favoritarSlice.reducer
