import React from "react";

const Card = ({header, title1, title2, data}) => {
  return (
    <div className="card" id="card">
      <div className="card-content">
        <h3>{header}</h3>
        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>{title1}</th>
                <th>{title2}</th>
              </tr>
              {data && data.map((item) => {
                return (
                  <tr key={item}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
