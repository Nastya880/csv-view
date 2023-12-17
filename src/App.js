import React, { useState, useEffect } from 'react';
import Main from './components/main/Main';
import Data from './components/data/Data';
import Papa from 'papaparse';

function App() {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const localStoredData = localStorage.getItem('csv');
    if (localStoredData) {
      setFileData(JSON.parse(localStoredData));
    }
  }, []);

  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const textData = event.target.result;

        Papa.parse(textData, {
          header: false,
          complete: (result) => {
            const parsedData = result.data.slice(1).map((col) => ({
              name: col[0],
              phone: col[1],
              email: col[2],
              bday: col[3],
              address: col[4],
            }));
  
            setFileData(parsedData);
            localStorage.setItem('csv', JSON.stringify(parsedData));
          },
        });
      } catch (error) {
        console.log(error);
        alert('Ошибка в содержании файла или правах доступа');
      }
    };

    reader.readAsText(file);
  };

  const handleNewFileUpload = () => {
    setFileData(null);
    localStorage.removeItem('csv');
  };

  return (
    <div className="App">
      { fileData ? (
        <Data data={ fileData } onNewFileUpload={ handleNewFileUpload } />
      ) : (
        <Main onFileUpload={ handleFileUpload } />
      )}
    </div>
  );
}

export default App;
