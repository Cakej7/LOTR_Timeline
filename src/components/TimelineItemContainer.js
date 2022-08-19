import { useState, useEffect } from 'react';
import { timelineData }from '../TimelineData'
import TimelineItem from './TimelineItemComponent';

const Timeline = () => {

    // const [filteredResults, setFilteredResults] = useState([])
    const [tData, setTData] = useState(timelineData)
    const [searchInput, setSearchInput] = useState('')
    const [searched, setSearched] = useState([])

    useEffect(() => {
        if (searchInput) {
            setSearched(
                tData.filter((data) => {
                    return Object.values(data)
                        .join('')
                        .toLowerCase()
                        .includes(searchInput.toLowerCase());
                })
            )
        } else {
            setTData(tData)
        }
    }, [searchInput])


    return (
        <>
            <div className='searchbarContainer'>
                <h1>Search by book, chapter, or character to find which dates match your query!</h1>
                <input
                className='searchbar'
                type="search"
                placeholder="Search..."
                onChange={(e) => setSearchInput(e.target.value)}
                /> 
            </div>

            
            {searchInput.length > 0 ? (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        margin: '10px'
                    }}>
                        {tData.length > 0 &&
                        searched.map((data, idx) => {
                            return (
                                <TimelineItem data={data} key={idx}/>
                            )})}
                    </div>
                )
                :
                (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        margin: '10px'
                    }}>
                        {tData.length > 0 &&
                        tData.map((data, idx) => (
                            <TimelineItem data={data} key={idx}/>
                        ))}
                    </div>
                )
            }
        </>
        
    )

}


export default Timeline