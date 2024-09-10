import React, { useEffect, useState } from 'react'
import movieContext from '../../createContext'


function UsableData(props) {
  const [poster,setPoster] = useState([
    {Title:'Avengers',Year : '2012',Poster:'https://wallpapercave.com/wp/wp4866154.jpg'},
    {Title:'Avengers: Infinity War',Year : '2018',Poster:'https://wallpapercave.com/wp/wp3131108.jpg'},
    {Title:'Avengers: Endgame',Year : '2019',Poster:'https://wallpapercave.com/wp/wp12764521.jpg'},
    {Title:'Animal',Year : '2023',Poster:'https://wallpapercave.com/wp/wp13286331.jpg'},
    {Title:'Deadpool & Wolverine',Year : '2024',Poster:'https://wallpapercave.com/wp/wp13479999.jpg'},
  ])

  const [movie, setMovie] = useState([])
  const [series, setSeries] = useState([])
  const [cartoons, setCartoons] = useState([])
  const [allMovies,setAllMovies] = useState([])
  const [totalResult,setTotalResult] = useState(0)
  let [page,setPage] = useState(1)
  const [allSeries,setAllSeries] = useState([])
  const [allCartoon,setAllCartoon] = useState([])
  const [cardDetails,setCardDetails] = useState({})
  const [value, setValue] = useState("")
  const [searchData,setSearchData] = useState([])
  const [res,setRes] = useState(true)
  // let value = ''
  

let API_KEY =  "1113cbcc"//"32fcbf5f"//"d6990ed8" //"d1f06b23" //"5f717b1b"
// const fetchApi = async (searchType,searchValue,typeValue)=>{
//   let type  = searchValue === "cartoon" || searchType === "t" ? "" : `&type=${typeValue}` 
//    let url = `https://www.omdbapi.com/?${searchType}=${searchValue}${type}&page=${page}&apikey=${API_KEY}`
//    let response = await fetch(url)
//    let data = await response.json()
// // console.log(data)
//     let allData =data.Search
//     // console.log(allData)
//     setValue(data)
// }
const movieApi = async ()=>{
   let url = `https://www.omdbapi.com/?s=movie&type=movie&apikey=${API_KEY}`
   let response = await fetch(url)
   let data = await response.json()
   let allData =data.Search
   setMovie(allData)
   
 
}
const seriesApi = async ()=>{
   let url = `https://www.omdbapi.com/?s=series&type=series&page=1&apikey=${API_KEY}`
  let response = await fetch(url)
  let data = await response.json()
  let allData =data.Search
  
   setSeries(allData)
  }
  const kidsApi = async ()=>{
    let url = `https://www.omdbapi.com/?s=cartoon&page=1&apikey=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    let allData =data.Search
    
    setCartoons(allData)
    
  }
  
  const allMoviesApi = async ()=>{
    setRes(true)
    
    let url = `https://www.omdbapi.com/?s=movie&type=movie&page=${page}&apikey=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    let allData =data.Search
    
    setAllMovies(allData)
    setTotalResult(data.totalResults)
    setRes(false)
    
  }
  const allSeriesApi = async ()=>{
    setRes(true)
    
    let url = `https://www.omdbapi.com/?s=series&type=series&page=${page}&apikey=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    let allData =data.Search
    
    setAllSeries(allData)
    setTotalResult(data.totalResults)
    setRes(false)
    
  }
  const allCartoonApi = async ()=>{
    setRes(true)
    let url = `https://www.omdbapi.com/?s=cartoon&page=${page}&apikey=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    let allData =data.Search
    
    setAllCartoon(allData)
   
    setTotalResult(data.totalResults)
    setRes(false)
    
  }
  const SearchingDataApi = async (item)=>{
    setValue(item)
    setRes(true)
    let url = `https://www.omdbapi.com/?s=${item}&page=${page}&apikey=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    let allData =data.Search
    // console.log("Search"+allData)
    
    setSearchData(allData)
    setTotalResult(data.totalResults)
    setRes(false)
    
    
  }

  let fetchMoreData = async ()=>{
    setPage(page+1)
  
    
      let url = `
      https://www.omdbapi.com/?s=movie&type=movie&page=${page}&apikey=${API_KEY}`
      let response = await fetch(url)
      let data = await response.json()
      let allData = await data.Search
      setAllMovies(allMovies.concat(allData))
      
  }
  let seriesMoreData = async ()=>{
    setPage(page+1)
  
    
      let url = `
      https://www.omdbapi.com/?s=series&type=series&page=${page}&apikey=${API_KEY}`
      let response = await fetch(url)
      let data = await response.json()
      let allData = await data.Search
      setAllSeries(allMovies.concat(allData))
      
  }
 
  let cartoonMoreData = async ()=>{
    setPage(page+1)
  
    
      let url = `
      https://www.omdbapi.com/?s=cartoon&page=${page}&apikey=${API_KEY}`
      let response = await fetch(url)
      let data = await response.json()
      let allData = await data.Search
      setAllCartoon(allCartoon.concat(allData))
      
  }
  let searchMoreData = async ()=>{
    setPage(page+1)
  
    
      let url = `
      https://www.omdbapi.com/?s=${value}&page=${page}&apikey=${API_KEY}`
      let response = await fetch(url)
      let data = await response.json()
      let allData = await data.Search
      setSearchData(searchData.concat(allData))
      
  }
 
  


  const CardDetailsAPi = async (item)=>{
    setRes(true)
  
    // https://www.omdbapi.com/?t=Scary%20Movie&apikey=1113cbcc
    let url = `https://www.omdbapi.com/?t=${item}&apikey=${API_KEY}`
 
    let response = await fetch(url)
    let data = await response.json()
  
    setCardDetails(data)
    // cardDetails = data
    setRes(false)
  
    
  }

 


 
 
useEffect(()=>{
  movieApi()
  seriesApi()
  kidsApi()
  allMoviesApi()
  allSeriesApi()
  allCartoonApi()
  // fetchApi("t","scary","movie")
  // console.log(value)
  
 
 
},[])

  return (
    
    <movieContext.Provider value={{
      poster,movie,series,cartoons,allMovies,fetchMoreData,totalResult,seriesMoreData,allSeries,
      allCartoon,cartoonMoreData,cardDetails,CardDetailsAPi,searchData,SearchingDataApi,searchMoreData,res
     
      }}>
       {props.children}
      </movieContext.Provider> 
  )
}

export default UsableData
