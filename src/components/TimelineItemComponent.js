const TimelineItem = ({ data }) => {


    return (
    <>
        <div className="timeline-item">
            <div className="timeline-item-content">

                <div className="timeline-text">
                    <h1 style={{fontSize: '5vw', textDecoration: 'underline'}}>Date:</h1>
                    <h3 style={{fontSize: '3vw'}}>{data.date}</h3>
                </div>

                <div className="timeline-text">                    
                    <div>
                        <h1 style={{fontSize: '4vw', textDecoration: 'underline'}}>Book:</h1>
                        <h3 style={{fontSize: '3vw'}}>{data.book}</h3>
                    </div>
                    
                </div>
                
                <div className="timeline-text">
                    <h1 style={{fontSize: '4vw', textDecoration: 'underline'}}>Chapter:</h1>
                    <h3 style={{fontSize: '3vw'}}>{data.chapter}</h3>
                </div>

                <div className="circle" >
                    <div className="popupCard">

                        {data.book === 'The Fellowship of the Ring' ? 
                            <img src="fellowship.png" className="bookImg" />
                        
                        :
                            null
                        }

                        {data.book === 'The Two Towers' ?  
                            <img src="two.png" className="bookImg" />
                        :
                        null}

                        {data.book === 'The Return of the King' ?  
                            <img src="return.png" className="bookImg" />
                        :
                        null}
                        
                        <h1 style={{fontSize: '4vw', textDecoration: 'underline'}}>Notable Characters:</h1>
                        <h3 style={{fontSize: '2.5vw'}}>{data.characters}</h3>
                    </div>
                </div>


                {/* <div className="timeline-text">
                    <h1 style={{fontSize: '4vw', textDecoration: 'underline'}}>Notable Characters:</h1>
                    <h3 style={{fontSize: '2.5vw'}}>{data.characters}</h3>
                </div> */}

                
            </div>
        </div>
    </>

)};

export default TimelineItem