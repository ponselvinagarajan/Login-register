import './register.css'

import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import { RiLockPasswordFill } from "react-icons/ri";



function Reg(){
    return(
        <div>
            <div className='container1'>
                <h1>Register form</h1>
                <div className='item3'>
                <div className='card'>
                     <div className='icon'><BsFillPersonFill /></div>
                     <input type='text' placeholder='Enter the Name'/>
                </div>
                <div className='card'>
                <div className='icon'><MdOutlineMail /></div>

                <input type='email' placeholder='Enter the Email'/>

                </div>
                <div className='card'>
                <div className='icon'><RiLockPasswordFill /></div>

                <input type='password' placeholder='Enter the Password'/>

                </div>
                <div className='card'>
                <div className='icon'><RiLockPasswordFill /></div>

                <input type='password'placeholder='Enter the Correct Password'/>
    
                </div>
                <div className='card'>
                    <div className='icon'><IoCall /></div>
                <input type='phone' placeholder='Enter the mobile number' />

                </div>

                
            </div>
            <div className='btn3'>
                <button>Register</button>
            </div>
            </div>
        </div>
    )
}
export default Reg;