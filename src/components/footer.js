import { useDispatch } from "react-redux";
import styles from "../footer.css";

const Footer = () => {
  return (
    <>
      <div class="footer_wrapper">
        <div class="footer_menus">주변 자전거</div>
        <div class="footer_menus">한강 이벤트</div>
        <div class="footer_menus">내 이용내역</div>
      </div>
      <div class="copyright">
        copyright &copy; 2022. Free Riders. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
