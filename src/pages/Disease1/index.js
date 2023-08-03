import React from 'react';
import './index.scss';
import { useState } from 'react';
import CrohnicInfo from './information'
import CrohnicBoard from './community';


function CrohnicMain(){

    const [activeIndex, setActiveIndex] = useState(0);

    const tabContArr = [
        {
            tabTitle:(
                <button  className= "tabInfo1" onClick={()=>tabClickHandler(0)}> 질병정보 </button>
            ),
            tabCont:(
                <div> <CrohnicInfo/> </div>
            )
        },
        {
            tabTitle:(
                <button className="tabBoard1"  onClick={()=>tabClickHandler(1)}>게시판 </button>
            ),
            tabCont:(
                <div> <CrohnicBoard/> </div>
            )
        }
    ];

    const tabClickHandler=(index)=>{
        setActiveIndex(index)
    }



      
      return (
        <div className='tab1'>


        <ul className="tabs1">
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
      

export default CrohnicMain;