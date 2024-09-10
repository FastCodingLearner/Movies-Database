import React,{useContext} from 'react'
import movieContext from '../../createContext'
import Cards from './Cards'
import Footer from './Footer'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner'


function AllContentTemp(props) {
    const value = useContext(movieContext)
    const { contentName, contentType, fetchMoreData } = props;
    const data = contentType
    

    return (
        <> 
        {value.res ? <Spinner/> :
         <div className="allMovies p-10 space-y-7 h-full ">
                <h1 className='text-2xl font-semibold text-white mx-1 '>{contentName}</h1>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={data.length !== 200}
                    loader={<Spinner />}
                    endMessage={
                        <p className='text-center text-white my-7'>
                            <b>Yay! You have seen it all and You want extra need then search</b>
                        </p>
                    }
                >
                    <div className="box flex gap-5 h-full flex-wrap justify-start space-y-4">
                        {data.map((val, i) => {
                            return <Cards key={i} title={val.Title} image={val.Poster === 'N/A' ? 'https://www.shutterstock.com/shutterstock/photos/89051818/display_1500/stock-vector-no-picture-image-internet-error-thumbnail-89051818.jpg' : val.Poster} />
                        })}
                    </div>
                </InfiniteScroll>
            </div>
}
            <Footer />
                        
        </>
    )
}

export default AllContentTemp
