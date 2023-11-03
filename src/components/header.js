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
        <header className="header">
            <div className="menu-wrap">메뉴</div>
            <div className="title-wrap">
                <img id="logo" src="sle_logo.png" alt="sle logo" height={48}/>
                <div className="service-title">살랑이</div>
            </div>
            {token ? (
                <div className="mypage-wrap">
                    <div className="log-out" onClick={()=>{alert("현재 시연을 위하여 로그아웃 기능을 비활성화 하였습니다.")}}>로그아웃</div> 
                    <div className="log-out" onClick={()=>{alert("현재 시연을 위하여 마이페이지 기능을 비활성화 하였습니다.")}}>마이페이지</div>
                </div>
            ):(<div className="mypage-wrap">
                    <div className="log-out" onClick={logOut}>로그인</div> 
                </div>
            ) }
            
        </header>
    )
}


export default Header;