import React, { useState } from 'react';
import './Main.scss';

const Main = ({ onFileUpload }) => {
    const [printError, setprintError] = useState(false);

    const handleFileChange = (evt) => {
      const file = evt.target.files[0];

      if (file.type === 'text/csv') {
        onFileUpload(file);
      } else {
        setprintError(true);
        setTimeout(() => {
          setprintError(false);
        }, 1000);
      }
    };
  
    return (
        <div>
            <div className="error__container">
                { printError &&
                  (
                    <div className="error__wrapper">
                      <p>Неправильный формат файла, разрешены только файлы .CSV</p>
                    </div>
                  )
                }
            </div>
            <div className="button-upload__container">
              <p>Выберите файл в&nbsp;формате CSV</p>
              <div className="button-upload__wrapper">
                <input className="visually-hidden" type="file" id="button-upload" onChange={ handleFileChange } />
                <label htmlFor="button-upload">Выберите файл</label>
              </div>
            </div>
        </div>
    );
  };

  export default Main;
