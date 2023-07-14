import React from 'react';
import './community.scss';
import searchIcon from '../../images/searchIcon.png';

function CrohnicBoard(){


    return(
        <div className='board1'>
             <div className='name1_box'>
            <div className='nameDisease1'>만성콩팥병</div>
            <div className='EngnameDisease1'>(Chronic renal failure)</div>
            </div>

            <div className="board1_box"
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

export default CrohnicBoard;