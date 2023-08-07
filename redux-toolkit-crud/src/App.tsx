import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { User, deleteUser, updateUsername } from './features/Users';
import { addUser} from "./features/Users";

//useSelector -> data read
//useDispatch -> data update/create
function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state: { users: { value: User[] } }) => state.users.value) || []; // users name from reducer in store -> index.tsx
//id:0, name: name, username: username
  return (
    <div className="App">
        <div className="addUser">
          <input type="text" placeholder="Name.." onChange={(event) => {setName(event.target.value)}} />
          <input type="text" placeholder="Username.." onChange={(event) => {setUsername(event.target.value)}}/>
          <button onClick={() => dispatch(addUser({id:userList[userList.length - 1].id + 1, name, username}))}> Add User</button> 
        </div>
        <div className="displayUsers">
          {userList.map((user)=> {
            return (
              <div>
                   <h1> {user.name} </h1>
                   <h1> {user.username} </h1>
                   <input type="text" placeholder="new username.." onChange={(event) => {setNewUsername(event.target.value)}} />
                   <button onClick={() => dispatch(updateUsername({...user, username: newUsername}))}>Update Username</button>
                   <button onClick={() => dispatch(deleteUser(user.id))}> Delete User</button>
               </div> 
            )
          })}
        </div>
    </div>
  );
}

export default App;
