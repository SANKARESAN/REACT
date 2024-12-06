import React from "react"
import {Link} from 'react-router-dom'

const NavComp = (props)=> {
    return (
        <div>
            {/* <h2>This  is NAV Component</h2> */}
            <Link to = "mystate" className="btn btn-outline-primary btn-sm" style={{margin:"5px"}}>mystate</Link>
            <Link to = "virtualDOM" className="btn btn-outline-info btn-sm" style={{margin:"5px"}}>virtualdom</Link>
            <Link to = "Hooks" className="btn btn-outline-warning btn-sm" style={{margin:"5px"}}>Hooks</Link>
            <Link to = "favcolor" className="btn btn-outline-success btn-sm" style={{margin:"5px"}}>MyFavColor</Link>
            <Link to = "formval" className="btn btn-outline-primary btn-sm" style={{margin:"5px"}}>Form Val</Link>
        </div>
    )
}
export default NavComp;