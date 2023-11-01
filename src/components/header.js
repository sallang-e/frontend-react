import React from 'react';
import { useDispatch } from 'react-redux';

function Header(){
    const dispatch = useDispatch();
    
    const logOut = () =>{
        dispatch({ type: 'REMOVE_TOKEN' });
      }

    return(
        <header>
            <div className="header-wrap">
                <div className="title-wrap">
                    <img id="logo" src="sle_logo.png" alt="sle logo" height={32}/>
                    <div className="service-title">살랑이</div>
                </div>
            </div>
            <div className="log-out" onClick={logOut}>로그아웃</div>
        </header>
    )
}


export default Header;