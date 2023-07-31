import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './thirdPage.scss';
import info1 from '../../../images/info1.png';
import info2 from '../../../images/info2.png';
import info3 from '../../../images/info3.png';
import line from '../../../images/test_line.png';
import resultButton from '../../../images/result.png';

function BurnoutTest3(){

  const [x13,setX13] = useState([]);
  const [x14,setX14] = useState([]); 
  const [x15,setX15] = useState([]);
  const [x16,setX16] = useState([]);
  const [x17,setX17] = useState([]);
 
  const handleClickRadioButton13 = (e) => {
    console.log(e.target.value)
    setX13(e.target.value)
  }

  const handleClickRadioButton14 = (e) => {
    console.log(e.target.value)
    setX14(e.target.value)
  }

  const handleClickRadioButton15 = (e) => {
    console.log(e.target.value)
    setX15(e.target.value)
  }

  
  const handleClickRadioButton16 = (e) => {
    console.log(e.target.value)
    setX16(e.target.value)
  }

  const handleClickRadioButton17 = (e) => {
    console.log(e.target.value)
    setX17(e.target.value)
  }

    return(
        <div className='burnoutP1'>
        <div className='indexBurnout'>번아웃 증후군 테스트</div>

      <div className='burnoutTestInfo'>
        <div className='burnoutTestInfo1'><img alt='info1' src={info1}  ></img></div>
        <div className='burnoutTestInfo2'><img alt='info2' src={info2}  ></img></div>
        <div className='burnoutTestInfo3'><img alt='info3' src={info3}  ></img></div>
        </div>

            <div className='testLine'><img alt='testLine' src={line}></img></div>

           <div className='burnoutQuestion'>
                <div className='stressq1'>
                    <div className='stressq1Label'> 13. 주변 사람과 대화를 나누는게 점점 버거워진다.<br/></div>
                   
                    <input 
                    className='burnoutR1' 
                    type='radio'
                    value='1'
                    checked={x13==="1"}
                    onChange={handleClickRadioButton13}         
                    />

                <label className='BurnoutR1'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='2'
                    checked={x13==="2"}
                    onChange={handleClickRadioButton13}
                    
                    />

                <label className='BurnoutR1'>그렇지 않다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='3'
                    checked={x13==="3"}
                    onChange={handleClickRadioButton13}
                    
                    />

                <label className='BurnoutR1'>보통이다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='4'
                    checked={x13==="4"}
                    onChange={handleClickRadioButton13}
                    
                    />

                <label className='BurnoutR1'>그렇다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='5'
                    checked={x13==="5"}
                    onChange={handleClickRadioButton13}
                    
                    />

                <label className='BurnoutR1'>매우 그렇다</label>
                </div>

                

                <div className='burnoutq2'>
                    <div className='burnoutq2Label'> 14. 만성피로, 두통, 소화불량 증상이 나타난다.<br/></div>
                   
                    <input 
                    className='burnoutR2' 
                    type='radio'
                    value='1'
                    checked={x14==="1"}
                    onChange={handleClickRadioButton14}         
                    />

                <label className='BurnoutR2'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='2'
                    checked={x14==="2"}
                    onChange={handleClickRadioButton14}
                    
                    />

                <label className='BurnoutR2'>그렇지 않다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='3'
                    checked={x14==="3"}
                    onChange={handleClickRadioButton14}
                    
                    />

                <label className='BurnoutR2'>보통이다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='4'
                    checked={x14==="4"}
                    onChange={handleClickRadioButton14}
                    
                    />

                <label className='BurnoutR2'>그렇다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='5'
                    checked={x14==="5"}
                    onChange={handleClickRadioButton14}
                    
                    />

                <label className='BurnoutR2'>매우 그렇다</label>
                </div>



                <div className='burnoutq3'>
                    <div className='Burnoutq3Label'> 15. 여가생활을 제대로 즐기지 못한다.<br/></div>
                   
                    <input 
                    className='burnoutR3' 
                    type='radio'
                    value='1'
                    checked={x15==="1"}
                    onChange={handleClickRadioButton15}         
                    />

                <label className='BurnoutR3'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='2'
                    checked={x15==="2"}
                    onChange={handleClickRadioButton15}
                    
                    />

                <label className='BurnoutR3'>그렇지 않다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='3'
                    checked={x15==="3"}
                    onChange={handleClickRadioButton15}
                    
                    />

                <label className='BurnoutR3'>보통이다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='4'
                    checked={x15==="4"}
                    onChange={handleClickRadioButton15}
                    
                    />

                <label className='BurnoutR3'>그렇다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='5'
                    checked={x15==="5"}
                    onChange={handleClickRadioButton15}
                    
                    />

                <label className='BurnoutR3'>매우 그렇다</label>
                </div>


                <div className='Burnoutq4'>
                    <div className='burnoutq4Label'>16. 물건을 잘 잃어버린다.<br/></div>
                   
                    <input 
                    className='burnoutR4' 
                    type='radio'
                    value='1'
                    checked={x16==="1"}
                    onChange={handleClickRadioButton16}         
                    />

                <label className='BurnoutR4'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='2'
                    checked={x16==="2"}
                    onChange={handleClickRadioButton16}
                    
                    />

                <label className='BurnoutR4'>그렇지 않다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='3'
                    checked={x16==="3"}
                    onChange={handleClickRadioButton16}
                    
                    />

                <label className='BurnoutR4'>보통이다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='4'
                    checked={x16==="4"}
                    onChange={handleClickRadioButton16}
                    
                    />

                <label className='BurnoutR4'>그렇다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='5'
                    checked={x16==="5"}
                    onChange={handleClickRadioButton16}
                    
                    />

                <label className='BurnoutR4'>매우 그렇다</label>
                </div>


                <div className='burnoutq5'>
                    <div className='burnoutq5Label'>17. 혼자 지내는 시간이 많아졌다.<br/></div>
                   
                    <input 
                    className='burnoutR5' 
                    type='radio'
                    value='1'
                    checked={x17==="1"}
                    onChange={handleClickRadioButton17}         
                    />

                <label className='BurnoutR5'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='2'
                    checked={x17==="2"}
                    onChange={handleClickRadioButton17}
                    
                    />

                <label className='BurnoutR5'>그렇지 않다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='3'
                    checked={x17==="3"}
                    onChange={handleClickRadioButton17}
                    
                    />

                <label className='BurnoutR5'>보통이다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='4'
                    checked={x17==="4"}
                    onChange={handleClickRadioButton17}
                    
                    />

                <label className='BurnoutR5'>그렇다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='5'
                    checked={x17==="5"}
                    onChange={handleClickRadioButton17}
                    
                    />

                <label className='BurnoutR5'>매우 그렇다</label>
                </div>

               

                <div className='testLine_'><img alt='testLine' src={line}></img></div>

            
                <button className='test_result'><img alt='resultButton' src={resultButton}></img></button>
                

                



           </div>


        </div>
    )
}


export default BurnoutTest3;