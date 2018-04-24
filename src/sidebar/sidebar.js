import React from 'react';
import './sidebar.css'
class SideBar extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <button className="btn btn-primary home">Home</button><br/>
                <button className="btn btn-primary  portal" disabled={this.props.flag}>Portal</button>
                </div>
            )
    }
   
}


export default SideBar;