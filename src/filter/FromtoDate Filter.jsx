import { useSelector } from "react-redux";
import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
// dad

const TestRide = () => {
  const booktestride = useSelector((st) => st.testrides.data);

  const [startDate, setStartDate] = useState(""); // State variable for the start date
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]); // State variable to track whether filter is applied
  const handleFilter = () => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    endDateObj.setHours(23, 59, 59, 999);

    const filteredData = booktestride.filter((itm) => {
      const createdAt = new Date(itm.createdAt);
      return createdAt >= startDateObj && createdAt <= endDateObj;
    });

    setFilteredData(filteredData); // Store the filtered data in state
  };

  const resetFilter = () => {
    setStartDate(""); 
    setEndDate(""); 
    setFilteredData([]); 
  };

  return (
      <div className= "flex flex-row" >
       <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mr-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
        <button onClick={resetFilter}>Reset filter</button>
      </div>
       
  

      <h1 className="h3 font-bold">Test Rides</h1>
      <div className="col-12 border overflow-x-scroll">
        <table className="table table-striped col-12 cursor-pointer">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Date</th>
              <th scope="col">Booking ID</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Bike</th>

            </tr>
          </thead>
          <tbody>
            {(filteredData.length > 0 ? filteredData : booktestride).map(
              (itm, i) => (
                <tr key={itm._id}>
                  <th scope="row">{i + 1}</th>
                  <td className=" text-capitalize">
                    {itm?.createdAt.split("T")[0]}
                  </td>
                  <td className=" text-capitalize">{itm?.bookingid}</td>
                  <td className=" text-capitalize">{itm.name}</td>
                  <td>{itm.number}</td>
                  <td>{itm.bike}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      gap: 1,
                      padding: "14px",
                    }}
                  >
                    <AiFillEdit fontSize={22} color="green" />
                    <AiFillDelete fontSize={22} color="red" />
                    <GrView fontSize={22} color="skyblue" />
                  </td>

                </tr>
              )
            )}
            {booktestride?.length === 0 && (
              <p className="h4 ml-2 col-12 pt-4 pb-2">No test booking found</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestRide;
