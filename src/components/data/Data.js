import React from 'react';
import "./Data.scss";

const Data = ({ data, onNewFileUpload }) => {
  return (
    <div className="data">
      <button className='button-new-upload' onClick={ onNewFileUpload }>
        <p>Загрузить новый файл</p>
      </button>
      <table>
        <thead>
          <tr>
            <th className="item-name-header">Имя</th>
            <th className="item-phone-header">Номер телефона</th>
            <th className="item-email-header">email</th>
            <th className="item-bday-header">Дата рождения</th>
            <th className="item-address-header">Адрес</th>
          </tr>
        </thead>
        <tbody>
          { data.map((item, index) => (
            <tr key={ index }>
              <td className="item-name">{item.name}</td>
              <td className="item-phone">{item.phone}</td>
              <td className="item-email">{item.email}</td>
              <td className="item-bday">{item.bday}</td>
              <td className="item-address">{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
