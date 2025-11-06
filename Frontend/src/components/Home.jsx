import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setClicked(true);
        navigate('/playground');
    };
    
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Edith's Portfolio</h1>
      <p className="text-lg text-gray-600">Explore my projects and learn more about me!</p>
      <button onClick={handleClick} className="mt-6 bg-pink-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-pink-500 transition">CLICK ME FOR A SURPISE</button>
    </div>
  );
}

export default Home;