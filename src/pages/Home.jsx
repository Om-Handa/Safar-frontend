import '../App.css'
import Searchbar from '../Components/Searchbar'
import Cards from '../Components/Cards'
import { NavLink, useLocation } from 'react-router-dom'

function Home() {
    return (
               <div
      className="relative flex justify-center items-center h-[50vh] w-full bg-gray-200 border-4 border-red-500"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/800x600.png?text=Safar+Image')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 p-4 rounded">
        <h1 className="text-white text-4xl">🏠 Home Page Loaded</h1>
      </div>
    </div>
    )
}

export default Home