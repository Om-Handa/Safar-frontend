import '../App.css'
import Searchbar from '../Components/Searchbar'
import Cards from '../Components/Cards'
import { NavLink, useLocation } from 'react-router-dom'

function Home() {
    return (
        <>
<div className="text-3xl p-10">
      This is Home page
      <Searchbar/>
    </div>
        </>
    )
}

export default Home

