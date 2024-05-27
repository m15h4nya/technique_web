import React, { useState, useEffect } from 'react';

export default function ContentMain() {
  const [files, setFiles] = useState([]);

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
            <a className="main_content-links" href={`http://127.0.0.1:5173/${file}`}>
              {file}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};


// localhost:5173/blabla => MainContent (делает запрос на бэк, получает контент файла blabla, рисуем контент) -> сложный блок