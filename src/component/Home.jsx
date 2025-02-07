import { useNavigate } from "react-router-dom";
import MyService from "./MyService";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [link, setLink] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setLink(value);
    console.log(value);
  };

  const handleClick = () => {
    MyService.getDetail(link)
      .then((response) => {
        navigate("/detail", { state: { link: link, data: response.data } });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        navigate("/detail", { state: { link: link, error: "There was an error fetching the data" } });
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-gray-900 py-5 px-8 text-white">
        <h1 className="text-6xl">YouTube Video Data Scrapper</h1>
        <input
          className="w-full px-2 py-2 rounded mt-5 bg-white text-black"
          type="text"
          placeholder="Enter YouTube Video URL"
          name="link"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="bg-white text-black mt-4 py-2 px-4 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;