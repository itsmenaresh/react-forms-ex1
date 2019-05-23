import React, {useState} from "react";

const UserForm = ({formSubmit})=>{
  const [usr, setUsr] = useState({});
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUsr({...usr, [name]:value, id: new Date()});
  };
  const handleForm = (e)=> {
    e.preventDefault();
    formSubmit(usr);
    setUsr({first_name:"", last_name: "", email: ""});
  }
  return (
    <div>
       <div className="row">
        <form className="col s12" onSubmit={handleForm}>
          <div className="row">
            <div className="input-field col s3">
              <input name="first_name" type="text" className="validate" 
              onChange={handleChange} />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s3">
              <input name="last_name" type="text" value={usr["last_name"]} className="validate"
              onChange={handleChange} />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="input-field col s3">
              <input name="email" type="email" className="validate"  onChange={handleChange} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">submit
          </button>
        </form>
      </div> 
    </div>
  )
}

export default  UserForm;