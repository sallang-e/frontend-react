import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../redux/actions';
import Header from './header';

function Login() {
    const navigate  = useNavigate();
    const dispatch = useDispatch();

    function doLogin() {
        dispatch(setToken("asdad123"));
        navigate('/');
    }

    return (
        <div className="body">
            <Header></Header>
            <div className='login-wrap'>
                <p className='login-info'>아래의 로그인 버튼을 눌러 로그인을 진행 해주세요.</p>
                <div className='option' onClick={doLogin} style={{ textAlign: 'center', margin: '10%' }}>로그인</div>
            </div>
        </div>
    );
}

export default Login;