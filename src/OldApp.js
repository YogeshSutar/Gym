import React, { useState, useEffect } from 'react';
import './App.css';
import './Data';
// import { data } from './Data';

function App() {

  const [datas, setDatas] = useState(data);

  return (
    <div className="App">
      <table border="1">
        <thead>
          <th>
            <td>Name</td>
          </th>
          <th>
            <td>Age</td>
          </th>
          <th>
            <td>salary</td>
          </th>
          <th>
            <td>Location</td>
          </th>
        </thead>

        <tbody>

          {datas.map((jsondata, key) => {
            return (
              <tr>
                <td>
                    {jsondata.Name}
                </td>
                <td>
                    {jsondata.age}
                </td>
                <td>
                    {jsondata.salary}
                </td>
                <td>
                    {jsondata.Location}
                </td>
              </tr>
            )
          })}
          {/* <tr>
            <th>salary</th>
          </tr> */}
        </tbody>

      </table>
    </div>
  );
}

export default App;
