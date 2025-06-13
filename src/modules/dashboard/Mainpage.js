import React from 'react'
import Myimg from "../shares/assets/prince logo.png"
import { FcHome,FcBusinessman } from "react-icons/fc";
const Abc = "https://t3.ftcdn.net/jpg/08/15/95/20/240_F_815952018_uiZLpsAaWD3aN2WesOQUY2NlVOrF07Fi.jpg";

function Mainpage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1>this is main page</h1>
                <img src='../photos/logo.png' height={300} alt="abcd"/>
                {/* <img src={Myimg} height={300}/> */}
                {/* <img src={Abc} height={300}/> */}
                <hr/>
                <FcHome/>
                <h1><FcBusinessman/></h1>
            </div>
        </div>
    </div>
  )
}

export default Mainpage