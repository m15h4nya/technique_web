import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './ContentMain.scss'


function AllFiles({ setFileName }) {
  const [files, setFiles] = useState([]);
  setFileName('/')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/all_files');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="content__main">
      <ul className="content__list">
        {files.map((file, index) => (
          <li key={index} className="main_content-items">
            <Link className="main_content-links" to={`/${file}`}>
              {file}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}


function FileContent( {setFileName} ) {

  const filename = window.location.pathname;
  const [content, setContent] = useState('');
  
  setFileName(filename);

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/file${filename}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setContent(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchFileContent();
  }, []);

  return (
    <div className="file-content">
      <pre>{content}</pre>
    </div>
  );
}

// Основной компонент приложения с маршрутизацией
export default function MainContent({ setFileName }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllFiles setFileName={ setFileName }/>} />
        <Route path="/:filename" element={<FileContent setFileName={ setFileName }/>} />
      </Routes>
    </Router>
  );
}