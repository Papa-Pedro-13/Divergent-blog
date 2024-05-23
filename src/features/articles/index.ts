import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { ArticlesInitState } from '../../utils/types';

//Function create article. Payload contains data of article
export const createArticle = createAsyncThunk(
  'articles/createArticle',
  async (payload) => {
    try {
      const res = await axios.post(`${BASE_URL}/articles`, payload, {
        params: {
          key: '1854d230',
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    try {
      const res = await axios(`${BASE_URL}/articles`, {
        params: {
          key: '1854d230',
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState: ArticlesInitState = {
  list: [],
  filtered: [],
  isLoading: false,
};
const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    filterByTitle: (state, { payload }) => {
      state.filtered = state.list.filter((item) =>
        item.title.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
  },
});

export const { filterByTitle } = articlesSlice.actions;
export default articlesSlice.reducer;
