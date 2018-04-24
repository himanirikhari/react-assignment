import React from 'react';
import Sidebar from '../sidebar/sidebar';
import './login.css';
import data from '../data';
class Login extends React.Component{
constructor(props)
{
    super(props);
    this.state=
    {
        username:'',
        password:'',
        disableflag: true
    }
}

    handleuser=(event)=>
    {
       
      event.preventDefault();
      this.setState({ username: event.target.value});
    }
    handlepass=(event)=>
    {
      event.preventDefault();
      this.setState({ password: event.target.value});
    }
    handleSubmit=(event)=>
    {
        event.preventDefault();
       if(this.state.username===data.username && this.state.password===data.password)
       {
          this.setState({disableflag:false});
       }
   
    }
    render()
    {
        return(
           <div className="wrap">
               <div className="row">
                   <div className="col-md-2 sidebar">
                      <Sidebar flag={this.state.disableflag}/>
                       </div>
                       <div className="col-md-6 login">
               <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label>Username</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="username" onChange={this.handleuser}/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handlepass}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
               </div>

        )
    }

}

export default Login;