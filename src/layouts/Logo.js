import { ReactComponent as LogoDark } from "../assets/images/logos/Logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="d-flex text-decoration-none align-items-center">
      <LogoDark />
    </Link>
  );
};

export default Logo;
