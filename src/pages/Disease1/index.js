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
                <li  className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 질병정보 </li>
            ),
            tabCont:(
                <div> <CrohnicInfo/> </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>게시판 </li>
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
        <div>
        <ul className="tabs is-boxed">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
        </ul>
        
        // activeIndex의 탭콘트만 보여줌!
        <div>
            { tabContArr[activeIndex].tabCont }
        </div>
        </div>
    );
    
};
      

export default CrohnicMain;