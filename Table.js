import React from "react";

const Table = ({users})=>{
  const handleEdit = (val)=>  alert(`Editing ${val.item["first_name"]}`);

  const handleDelete = (val) =>  alert(`Deleting ${val.item["first_name"]}`);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(item=> {
          return (
            <tr key={item.id}>
              <td>
                {item["first_name"]}
              </td>
              <td>{item["last_name"]}</td>
              <td>{item.email}</td>
              <td>
              <button  className="btn btn-primary" onClick={handleEdit.bind(null, {item})}>Edit</button>{' '}
              <button  className="btn btn-danger" onClick={handleDelete.bind(null, {item})}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;