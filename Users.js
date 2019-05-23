import React, {useState} from "react";
import Table from "./Table"
import UserForm from "./UserForm"

const Users = ({users, sendInvite})=>{
  const [user, setUsers] = useState(users);
  return <div>
    <UserForm formSubmit={sendInvite}/>
    <hr />
    <Table users={users} />
  </div>
}

export default Users;