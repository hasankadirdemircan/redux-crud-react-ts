import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export interface User {
    id: number;
    name: string;
    username: string;
  }
  
  export interface UserState {
    value: User[];
  }
  
  const initialState: UserState = {
    value: [...UsersData],
  };
export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:  {
        addUser: (state, action: PayloadAction<User>) => {
            //write code for adding a user
            state.value.push(action.payload);
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter((user) => user.id !== action.payload)
        },
        updateUsername: (state, action: PayloadAction<User>) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            })
        }
    }
});

export const {addUser, deleteUser, updateUsername} = userSlice.actions;
export default userSlice.reducer;