import React from 'react';
import './index.scss';
import { useState } from 'react';
import RetintisInfo from './information'
import RetintisBoard from './community';


function CholinMain(){

    const [activeIndex, setActiveIndex] = useState(0);

    const tabContArr = [
        {
            tabTitle:(
                <button  className= "tabInfo4" onClick={()=>tabClickHandler(0)}> 질병정보 </button>
            ),
            tabCont:(
                <div> <RetintisInfo/> </div>
            )
        },
        {
            tabTitle:(
                <button className="tabBoard4"  onClick={()=>tabClickHandler(1)}>게시판 </button>
            ),
            tabCont:(
                <div> <RetintisBoard/> </div>
            )
        }
    ];

    const tabClickHandler=(index)=>{
        setActiveIndex(index)
    }



      
      return (
        <div className='tab4'>


        <ul className="tabs4">
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
      

export default CholinMain;