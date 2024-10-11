import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUser', 
    async (_, thunkApi) => {        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');        
            if (!response.ok) {
                throw new Error('Что-то пошло не так!');
            };
        return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
})


const initialState = {
    users: [],
    loading: false,
    error: null,
    user_id: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        onclick: (state, action) => {
            state.user_id = action.payload;
        }
    },
    extraReducers: 
        (builder) => {
            builder
                .addCase(fetchUsers.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.loading = false;
                    state.users = action.payload;
                })
                .addCase(fetchUsers.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                })

    },
});

export default usersSlice.reducer;
export const {fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess} = usersSlice.actions;
export const { onclick } = usersSlice.actions;
