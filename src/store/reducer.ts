//@ts-nocheck

import {combineReducers} from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const reducer = combineReducers({
    todos: todoSlice.reducer
})

export default reducer
