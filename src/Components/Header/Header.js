import styles from "./Header.module.css";
import SearchBar from "../Search";
import { useNavigate } from "react-router-dom";
function Header() {
const navigate=useNavigate()
  function   navigateToHome(){
    navigate("/home")


  }


  return(
  <>
    <div className={styles.header}>
      <i className="fas fa-home"  onClick={navigateToHome}></i>
      <SearchBar ></SearchBar>
    </div>
  </>)
}
export default Header;
