import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useMySelect from "../../hooks/useMySelect";

const ClassCard = ({ singleClass }) => {
  const {
    className,
    classImage,
    classPrice,
    availableSeats,
    musicInstructorName,
    _id,
  } = singleClass;
  const { user } = useAuth();
  const [, refetch] = useMySelect();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectClass = (singleClass) => {
    console.log(singleClass);
    if (user && user.email) {
      const classes = {
        singleClassId: _id,
        email: user.email,
        className,
        classImage,
        classPrice,
        availableSeats,
        musicInstructorName,
      };
      fetch("https://my-12th-work-server-anighosal.vercel.app/classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classes),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              title: "This Class selected",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select class",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] w-[200px]" w-20 src={classImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p className="font-bold">Instructor :{musicInstructorName}</p>
          <p>Available Seats: {availableSeats}</p>
          <p className="text-red-700 font-bold">Price:$ {classPrice}</p>
          <div className="card-actions">
            <button
              onClick={() => handleSelectClass(singleClass)}
              className="btn btn-primary"
            >
              Select Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
