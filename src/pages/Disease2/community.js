import React from 'react';
import './community.scss';
import searchIcon from '../../images/searchIcon.png';

function CrohnBoard(){


    return(
        <div className='board2'>
             <div className='name2_box'>
            <div className='nameDisease2'>크론병</div>
            <div className='EngnameDisease2'>(Chron renal failure)</div>
            </div>

            <div className="board2_box"
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

export default CrohnBoard;