import { useDispatch } from 'react-redux';


function MyPage() {
    const dispatch = useDispatch();
    const backToMain = () => {dispatch({ type: 'BACK_TO_MAIN' })};
    return (
        <>
            <div> 마이페이지 </div>
            <div onClick={backToMain}> 뒤로가기 </div>
        </>
    )
}

export default MyPage;