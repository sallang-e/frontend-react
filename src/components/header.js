import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Header(){
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    
    const logOut = () =>{
        dispatch({ type: 'REMOVE_TOKEN' });
      }

    const goMyPage = () =>{
        dispatch({ type: 'GO_MYPAGE' });
    }

    return(
        <header>
            <div className="header-wrap">
                <div className="title-wrap">
                    <img id="logo" src="sle_logo.png" alt="sle logo" height={32}/>
                    <div className="service-title">살랑이</div>
                </div>
            </div>
            {token ? (
                <>
                    <div className="log-out" onClick={logOut}>로그아웃</div> 
                    <div className="log-out" onClick={goMyPage}>마이페이지</div>
                </>
            ):(<></>) }
            
        </header>
    )
}


export default Header;