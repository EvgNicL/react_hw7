import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserOwn = createAsyncThunk(
    'users/fetchUser', 
    async (id, thunkApi) => {        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);        
            if (!response.ok) {
                throw new Error(' Опять что-то пошло не так!');
            };
        return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
})


const initialState = {
    user: [],
    loading: false,
    error: null,
};

const userOwnSlice = createSlice({
    name: 'user_card',
    initialState,
    reducers: {},
    extraReducers: 
        (builder) => {
            builder
                .addCase(fetchUserOwn.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchUserOwn.fulfilled, (state, action) => {
                    state.loading = false;
                    state.user = action.payload;
                })
                .addCase(fetchUserOwn.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                })

    },
});

export default userOwnSlice.reducer;
export const {fetchUserOwnFailure, fetchUserOwnRequest, fetchUserOwnSuccess} = userOwnSlice.actions;