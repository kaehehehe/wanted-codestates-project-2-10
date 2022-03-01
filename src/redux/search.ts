import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Search {
  data: {
    id: number;
    name: string;
  }[];
}

interface Data {
  id: number;
  name: string;
}

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (inputValue: string) => {
    console.log(inputValue)
    // if(inputValue === '') return;
    try {
      const { data } = await axios.get(
        `https://api.clinicaltrialskorea.com/api/v1/search-conditions/name=${inputValue}`
      );
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

// store에 뭐를 저장하는지 정의
export const search = createSlice({
  name: 'search',
  initialState: { data: [] } as Search,
  reducers: {},
  extraReducers: {
    [fetchSearch.fulfilled.type]: (
      state: Search,
      action: PayloadAction<Data[]>
    ) => {
      state.data = action.payload;
    },
  },
});
