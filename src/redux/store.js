
import { configureStore } from "@reduxjs/toolkit";
import usersAllReducer from '../redux/reducers/usersAllReducer';
import { loggerMiddleWare } from "./loggerMiddleware";
import userOwnReducer from '../redux/reducers/userOwnReducer';


const store = configureStore({
    reducer: {
        users: usersAllReducer,
        user_card: userOwnReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
});

export default store;
