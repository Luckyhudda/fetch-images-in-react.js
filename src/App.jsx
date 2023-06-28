import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/photos");
        let finalData = await data.json();
        setData(finalData);
      } catch {
        return "Error";
      }
    }
    getData();
  }, []);
  console.log(data);
  return (
    <>
      {data &&
        data.map((item, index) => {
          return <img key={index} src={item.thumbnailUrl} />;
        })}
    </>
  );
}
