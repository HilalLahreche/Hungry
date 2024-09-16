import { Outlet, Link } from "react-router-dom";

const MainConnection = () => {
  return (
    <>
      <div className="m-5">
        <div role="tablist" className="tabs tabs-lifted">
          <Link className="tab" to="signin">
            Sign In
          </Link>
          <Link className="tab" to="signup">
            Sign Up
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MainConnection;
