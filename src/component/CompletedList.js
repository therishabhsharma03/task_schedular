import React, { useState, useEffect } from "react";
import CompletedListRow from "./CompletedListRow";
import apiService from "./apiService";
import Spinner from "./spinner"; // Assuming you have a Spinner component

function CompletedList() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.userId) {
      apiService
        .get(`/completedTaskRoute/${user.userId}/tasks`)
        .then((res) => {
          if (res.status === 200) {
            setArr(res.data);
            
          } else {
            Promise.reject();
          }
        })
        .catch((err) => alert(err))
        .finally(() => setLoading(false)); // Set loading to false regardless of success or failure
    } else {
      console.error("User ID not found in localStorage");
      setLoading(false); // Set loading to false if user ID is not found
    }
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <CompletedListRow obj={val} />;
    });
  };

  return (
    <div className="skills--section">
      {loading ? (
        <Spinner /> // Show the loading spinner while data is being fetched
      ) : (
        <table
          className="table table-bordered table-striped table-success"
          style={{ maxWidth: "60%", margin: "10px auto" }}
        >
          <thead>
            <tr>
              <th className="text-center">Task</th>
              <th className="text-center">Label</th>
              <th className="text-center">Due Date/Time</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>{ListItems()}</tbody>
        </table>
      )}
    </div>
  );
}

export default CompletedList;
