import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();
  if (loading || isInstructorLoading) {
    return (
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    );
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default InstructorRoute;
