import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Genre } from '../../types/genre';
import { WtwProcess } from '../../types/state';
import { DEFAULT_GENRE } from '../../const';

const initialState: WtwProcess = {
  genre: DEFAULT_GENRE
};

export const wtwProcess = createSlice({
  name: NameSpace.Wtw,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<Genre>) => {
      state.genre = action.payload;
    }
  },
});

export const {changeGenre} = wtwProcess.actions;
