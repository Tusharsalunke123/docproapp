import React from 'react'
import '../assets/css/style.css';
import Images from '../assets/images/SignInImage.png';
import AppLogo from '../assets/images/AppLogo.png';
import { Link } from 'react-router-dom';

export default function Signup() {
    const handleLogin = (e) => {

    }


    return (
        <div className="container-fluid">
            <div className='signin row' style={{ backgroundImage: 'url(' + Images + ')' }}>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                </div>
                <div className=' box col-sm-6 col-md-6 col-lg-6'>

                    <div className='row' style={{ 'textAlign': 'center' }}>
                        <div>< img src={AppLogo} /></div>
                        <div className="mt-4" style={{ fontSize: '32px', color: '#0078D4' }}>Sign Up</div>
                    </div>
                    <form onSubmit={e => handleLogin(e)}>
                        <div className='row'>
                            <div className='col-sm-1 col-md-1 col-lg-1'></div>
                            <div className='col-sm-5 col-md-5 col-lg-5'>
                                <div className='' style={{ 'textAlign': 'left', 'font': 'normal normal bold 20px/24px Lato' }}>
                                    <div className="form-group mt-3">
                                        <label htmlFor="exampleInputEmail1" className='m-2'>Email ID 123<span className='required'>*</span></label>
                                        <input type="email" className="signininput form-control" id="exampleInputEmail1" placeholder="Enter ID"
                                        />
                                    </div>
                                    <div className='row m-1 mt-4'>
                                        <Link style={{ float: 'right' }} to="dashboard" style={{ 'background': '#FF8000', color: '#fff', fontFamily: 'bold' }} className="btn btn-lg btn-block"> Sign In</Link>
                                        {/* <button type="submit" style={{'background':'#FF8000',color:'#fff',fontFamily:'bold'}} className="btn btn-lg btn-block">Sign In</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-5 col-md-5 col-lg-5'>
                                </div>
                            <div className='col-sm-1 col-md-1 col-lg-1'></div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
