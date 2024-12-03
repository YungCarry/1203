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

  const deletetd = () => {

  }

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
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sz) => (
            <tr>
              <td>{sz._id}</td>
              <td>{sz.href}</td>
              <td>{sz.endDate}</td>
              <td>{sz.position.id}</td>
              <td><a href={"https://s3.sootsoft.hu/365commercial/"+sz.key}>Kép</a></td>
              <td><button onClick={deletetd}>Törlés</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
