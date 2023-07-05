import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

const Userprofile = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const location = useLocation();
  const history = useHistory();

  return (
    <h1>{sessionUser.email}</h1>
  );
}

export default Userprofile;
