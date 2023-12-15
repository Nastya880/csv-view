// import logo from './logo.svg';
import './Main.css';

function App() {
  return (
    <div>
      <div className="Error">
        <p>Неправильный формат файла, разрешены только файлы .CSV</p>
      </div>
      <div className="Button">
        <h1>Выберите файл в&nbsp;формате CSV</h1>
        <div className="App">
          <input
            className={Upload-input}
            type='file'
            multiple
            onChange={handleFilesChange}
            id='file-uploader-input-button'
          />
          <label
            className={Upload-label}
            htmlFor='file-uploader-input-button'>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
