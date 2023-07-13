import React from 'react';
import './index.scss';
import { useState } from 'react';
import CrohnInfo from './information'
import CrohnBoard from './community';


function CrohnMain(){

    const [activeIndex, setActiveIndex] = useState(0);

    const tabContArr = [
        {
            tabTitle:(
                <button  className= "tabInfo2" onClick={()=>tabClickHandler(0)}> 질병정보 </button>
            ),
            tabCont:(
                <div> <CrohnInfo/> </div>
            )
        },
        {
            tabTitle:(
                <button className="tabBoard2"  onClick={()=>tabClickHandler(1)}>게시판 </button>
            ),
            tabCont:(
                <div> <CrohnBoard/> </div>
            )
        }
    ];

    const tabClickHandler=(index)=>{
        setActiveIndex(index)
    }



      
      return (
        <div className='tab2'>


        <ul className="tabs2">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
        </ul>
        
    
        <div>
            { tabContArr[activeIndex].tabCont }
        </div>
        </div>
    );
    
};
      

export default CrohnMain;