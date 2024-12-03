import React, { useEffect, useState } from "react";
import apiClient from "./api/apiClient";
import { Banner } from "./types/Banner";

function App() {
  const [data, setData] = useState<Banner[]>([]);


  useEffect(() => {
    apiClient
      .get("/kecskemet")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Href:</th>
            <th>End date:</th>
            <th>Position ID:</th>
            <th>Kép:</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sz) => (
            <tr>
              <td>{sz._id}</td>
              <td>{sz.href}</td>
              <td>{sz.endDate}</td>
              <td>{sz.position.id}</td>
              <td><img src={"https://s3.sootsoft.hu/365commercial/"+sz.key} alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
