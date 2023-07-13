import React from 'react';
import './community.scss';
import searchIcon from '../../images/searchIcon.png';

function RetintisBoard(){


    return(
        <div className='board3'>
             <div className='name3_box'>
            <div className='nameDisease3'>망막색소변성증</div>
            <div className='EngnameDisease3'>(Retinitis Pigmentosa)</div>
            </div>

            <div className="board3_box"
        style={{
            border: '2px solid',
            borderImage: 'linear-gradient(90deg, #6CFFCA, #7CF7FF) 1',
            borderImageSlice: 1
          }}     >

                <div className='writeButton'>
                    <button className='WriteButton' >글쓰기</button>
    
                </div>

                <div className='searchBox'
                style={{
            border: '2px solid',
            borderImage: 'linear-gradient(90deg, #6CFFCA, #7CF7FF) 1',
            borderImageSlice: 1
          }} >
                <img alt="searchIcon" src={searchIcon} style={{marginTop:"5px", marginLeft:"170px"}}></img>
                </div>



          </div>



        </div>
    )
}

export default RetintisBoard;