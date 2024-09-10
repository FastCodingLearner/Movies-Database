import Navbar from './components/Navbar'
import Slider from './components/Slider'
import MoviesCards from './components/MoviesCards'
import UsableData from './components/usableData'
import SeriesCards from './components/SeriesCards'
import CartoonCards from './components/CartoonCards'
import Footer from './components/Footer'
import AllMovies from './components/AllMovies'
import { 
  BrowserRouter ,
  Route,Routes
 } from 'react-router-dom'
import AllSeries from './components/AllSeries'
import AllCartoons from './components/AllCartoons'
import CardDetails from './components/CardDetails'
import SearchCard from './components/SearchCard'





function App() {


  return (
    <>
    < BrowserRouter>
       <UsableData >
       {/* <movieContext.Provider value={b} > */}
      <Navbar/>
      <div className="space-y-10">
      <Routes>
      <Route path='/' element={
        <>
        <Slider/>
        <MoviesCards/>
        <SeriesCards/>
        <CartoonCards/>
        <Footer/> 
       
        </>
        
        }/>

        <Route path='/allmovies' element={<AllMovies/>}></Route>
        <Route path='/allseries' element={<AllSeries/>}></Route>
        <Route path='/allcartoons' element={<AllCartoons/>}/>
        <Route path='/card-database' element={ <><CardDetails/><Footer/></>}></Route>
        <Route path='/searching-data' element={<SearchCard/>} ></Route>
      </Routes>
      </div>
      
      {/* </movieContext.Provider> */}
       
      </UsableData>
      </BrowserRouter>
     
    </>
  )
}

export default App
