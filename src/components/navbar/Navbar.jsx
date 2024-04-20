import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          IYKE
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/ik-mba-91a94520a">
            <img src="/linkedin1.png" alt="" />
          </a>
          <a href="https://github.com/IkMba">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.facebook.com/ik.mba.77/">
            <img src="/facebook2.png" alt="" />
          </a>
          <a href="https://twitter.com/Ikmba1">
            <img src="/x2.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
