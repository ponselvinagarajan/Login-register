import './Login.css'
function Add (){
    return(
        <div>
            <div className='container'>
            <div className="item">
                <h1>LOGIN</h1>
                <div className="item1">
                    <input type="text" placeholder="Enter the Name"/>
                </div>
                <div className="item1"> 
                     <input type="email" placeholder="Enter The Email Address"/>
                </div >
                 <div className="item1"> 
                     <input type="password" placeholder="Enter The Password"/>
                </div>
                <div className="item2">
                    <p>forgot password?</p>
                    <button>LOGIN</button>
                    <button>SIGN UP</button>
                </div>
                
            </div>
            </div>
        </div>
    )
}
export default Add;