import { Outlet } from "react-router-dom";
import Header from "../components/Reusables/Header";
import Footer from "../components/Reusables/Footer";
import styles from "./modules/biglayout.module.css";

function BigLayout() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main>{<Outlet />}</main>
        <Footer />
      </div>
    </>
  );
}

export default BigLayout;
