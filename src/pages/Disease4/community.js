import React from 'react';
import './community.scss';
import searchIcon from '../../images/searchIcon.png';

function CholinBoard(){


    return(
        <div className='board4'>
             <div className='name4_box'>
            <div className='nameDisease4'>콜린성 두드러기</div>
            <div className='EngnameDisease4'>(cholinergic urticaria)</div>
            </div>

            <div className="board4_box"
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

export default CholinBoard;