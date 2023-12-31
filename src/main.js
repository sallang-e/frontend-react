import Header from "./components/header";
import { useSelector } from "react-redux";
import MyPage from "./components/mypage";
import Map from "./components/map";
import footer from "./components/footer";

function Main() {
  const page = useSelector((state) => state.page);

  if (page == 1) {
    return (
      <div className="body">
        <Header />
        <Map />
        <footer />
      </div>
    );
  } else if (page == 2) {
    return (
      <div className="body">
        <MyPage />
      </div>
    );
  }
}

export default Main;
