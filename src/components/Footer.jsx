
import { Link} from "react-router-dom";

function Footer() {
  return <div className="footerView" style={{ padding: "100px 0px", textAlign: "center" }}>
      <Link to="/about">About</Link>
      <Link to="/Contact">Contact</Link>
    </div>;
  }

  export default Footer;