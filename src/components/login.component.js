import React, { Component } from 'react'
import '../assets/css/style.css';
import Images from '../assets/images/SignInImage.png';
import AppLogo from '../assets/images/AppLogo.png';
import {Link,useNavigate} from 'react-router-dom';

class login extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);

        this.state = {
            username:'',
            password:''
        };
    }

    onchangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onchangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    handleLogin(e){
        e.preventDefault();
        console.log('test');
        // <Navigate to="/dashboard" replace={true}/>
    //   this.props.navigate("/dashboard");
      
    }
    
    render() {
        return (
            <div className="container-fluid">
            <div className='signin row' style={{ backgroundImage: 'url(' + Images + ')' }}>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                </div>
                <div className=' box col-sm-6 col-md-6 col-lg-6'>

                    <div className='row' style={{ 'textAlign': 'center' }}>
                        <div>< img src={AppLogo} /></div>
                        <div className="mt-4" style={{ fontSize: '32px', color: '#0078D4' }}>Sign In</div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-3 col-md-3 col-lg-3'></div>
                        <div className='col-sm-6 col-md-6 col-lg-6'>

                        <div className='' style={{'textAlign':'left','font': 'normal normal bold 20px/24px Lato'}}>
                            <form onSubmit={this.handleLogin}>
                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputEmail1" className='m-2'>Email ID<span className='required'>*</span></label>
                                    <input type="email" className="signininput form-control" id="exampleInputEmail1" placeholder="Enter ID" 
                                    value={this.state.username}
                                    onChange={this.onchangeUsername} />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputPassword1" className='m-2'>Password<span className='required'>*</span></label>
                                    <input type="password" className="form-control signininput" id="exampleInputPassword1" placeholder="Password" 
                                    value={this.state.password}
                                    onChange={this.onchangePassword}/>
                                </div>
                                <div className="form-group form-check mt-3 mb-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                     <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                     <Link style={{float:'right'}} to="#">Forgot Password</Link>
                                </div>
                                <div className='row m-1 mt-4'>
                                <Link style={{float:'right'}} to="dashboard" style={{'background':'#FF8000',color:'#fff',fontFamily:'bold'}} className="btn btn-lg btn-block"> Sign In</Link>
                                {/* <button type="submit" style={{'background':'#FF8000',color:'#fff',fontFamily:'bold'}} className="btn btn-lg btn-block">Sign In</button> */}
                                </div> 


                                    <div className='row text-center' style={{color:'#686868',font: 'caption',fontSize: '18px'}}>
                                        <div className='mt-4 mb-4'>Don't have an account? <Link to="/signup">Sign Up</Link></div>
                                        <div style={{lineHeight:'1.5'}}>By clicking the Sign in button,<br/>
                                        you agree to the DocPro</div>
                                        <div className='mt-1'><Link to="/signup">Terms & Conditions</Link> and <Link to="/signup">Privacy Policy.</Link></div>

                                    </div>  


                            </form>

                        </div>
                            
                        </div>
                        <div className='col-sm-3 col-md-3 col-lg-3'></div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default login;
