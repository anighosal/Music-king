import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useMySelect from "../../hooks/useMySelect";
import { TiTick } from "react-icons/ti";

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
      fetch("https://music-king-server.vercel.app/classes", {
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
      <div className="rounded-md lg:w-[400px] w-full  bg-slate-600 glass text-white">
        <div style={{ height: '300px' }}>
          <img className="w-full h-full rounded-md p-4 hover:shadow-lg transition-transform transform hover:scale-105" src={classImage} alt={className} />
        </div>
        <div className="card-body">
        <p className="font-bold">{musicInstructorName}</p>
          <h2 className="">{className}</h2>
          
          <p>{availableSeats} seats are available</p>
          <p className="text-red-500 font-bold">$ {classPrice}</p>
          <div className="flex">
            <div
              onClick={() => handleSelectClass(singleClass)}
              className="bg-green-600 text-white p-2 rounded-md cursor-pointer"
            >
              Select Class
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
