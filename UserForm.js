import React, {useState} from "react";

const UserForm = ({formSubmit})=>{
  const [usr, setUsr] = useState({first_name:"", last_name: "", email: ""});
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUsr({...usr, [name]:value, id: new Date()});
  };
  const handleForm = (e)=> {
    e.preventDefault();
    if (usr["first_name"] && usr["last_name"] && usr["email"]) formSubmit(usr);
    setUsr({first_name:"", last_name: "", email: ""});
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="form-row">
          <div className="col">
            <input name="first_name" value={usr["first_name"]} type="text" className="form-control"
              onChange={handleChange} placeholder="First Name"/>
          </div>
          <div className="col">
            <input name="last_name" value={usr["last_name"]} type="text" className="form-control"
              onChange={handleChange} placeholder="Last Name"/>
          </div>
          <div className="col">
            <input name="email" value={usr["email"]} type="email" className="form-control"
              onChange={handleChange} placeholder="Email"/>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary mb-2" name="action">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default  UserForm;
