import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './firstPage.scss';
import info1 from '../../../images/info1.png';
import info2 from '../../../images/info2.png';
import info3 from '../../../images/info3.png';
import line from '../../../images/test_line.png';
import nextButton from '../../../images/nextButton.png';

function StressTest1(){

  const [x,setX] = useState([]);
  const [x2,setX2] = useState([]); 
  const [x3,setX3] = useState([]);
  const [x4,setX4] = useState([]);
  const [x5,setX5] = useState([]);

  const handleClickRadioButton = (e) => {
    console.log(e.target.value)
    setX(e.target.value)
  }

  const handleClickRadioButton2 = (e) => {
    console.log(e.target.value)
    setX2(e.target.value)
  }

  const handleClickRadioButton3 = (e) => {
    console.log(e.target.value)
    setX3(e.target.value)
  }

  
  const handleClickRadioButton4 = (e) => {
    console.log(e.target.value)
    setX4(e.target.value)
  }

  const handleClickRadioButton5 = (e) => {
    console.log(e.target.value)
    setX5(e.target.value)
  }
    return(
        <div className='stressP1'>
            <div className='indexStress'>스트레스 자가진단 테스트</div>

          <div className='testInfo'>
            <div className='testInfo1'><img alt='info1' src={info1}  ></img></div>
            <div className='testInfo2'><img alt='info2' src={info2}  ></img></div>
            <div className='testInfo3'><img alt='info3' src={info3}  ></img></div>
            </div>

            <div className='testLine'><img alt='testLine' src={line}></img></div>

           <div className='stressQuestion'>
                <div className='stressq1'>
                    <div className='stressq1Label'> 1. 최근 예상치 못한 일로 속상했던 적이 많다.<br/></div>
                   
                    <input 
                    className='stressR1' 
                    type='radio'
                    value='1'
                    checked={x==="1"}
                    onChange={handleClickRadioButton}         
                    />

                <label className='StressR1'>매우 그렇지 않다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='2'
                    checked={x==="2"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='StressR1'>그렇지 않다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='3'
                    checked={x==="3"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='StressR1'>보통이다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='4'
                    checked={x==="4"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='StressR1'>그렇다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='5'
                    checked={x==="5"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='StressR1'>매우 그렇다</label>
                </div>

                

                <div className='stressq2'>
                    <div className='stressq2Label'> 2. 중요한 일을 제어할 수 없다고 느끼는 경우가 많다.<br/></div>
                   
                    <input 
                    className='stressR2' 
                    type='radio'
                    value='1'
                    checked={x2==="1"}
                    onChange={handleClickRadioButton2}         
                    />

                <label className='StressR2'>매우 그렇지 않다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='2'
                    checked={x2==="2"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='StressR2'>그렇지 않다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='3'
                    checked={x2==="3"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='StressR2'>보통이다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='4'
                    checked={x2==="4"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='StressR2'>그렇다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='5'
                    checked={x2==="5"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='StressR2'>매우 그렇다</label>
                </div>



                <div className='stressq3'>
                    <div className='stressq3Label'> 3. 긴장되고, 스트레스를 받는 경우가 많다.<br/></div>
                   
                    <input 
                    className='stressR3' 
                    type='radio'
                    value='1'
                    checked={x3==="1"}
                    onChange={handleClickRadioButton3}         
                    />

                <label className='StressR3'>매우 그렇지 않다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='2'
                    checked={x3==="2"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='StressR3'>그렇지 않다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='3'
                    checked={x3==="3"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='StressR3'>보통이다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='4'
                    checked={x3==="4"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='StressR3'>그렇다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='5'
                    checked={x3==="5"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='StressR3'>매우 그렇다</label>
                </div>


                <div className='stressq4'>
                    <div className='stressq4Label'>4. 개인적인 문제들을 처리하는 능력에 확신이 있다.<br/></div>
                   
                    <input 
                    className='stressR4' 
                    type='radio'
                    value='1'
                    checked={x4==="1"}
                    onChange={handleClickRadioButton4}         
                    />

                <label className='StressR4'>매우 그렇지 않다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='2'
                    checked={x4==="2"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='StressR4'>그렇지 않다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='3'
                    checked={x4==="3"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='StressR4'>보통이다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='4'
                    checked={x4==="4"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='StressR4'>그렇다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='5'
                    checked={x4==="5"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='StressR4'>매우 그렇다</label>
                </div>


                <div className='stressq5'>
                    <div className='stressq5Label'>5. 나의 뜻대로 일들이 처리되고 있다고 느낀다.<br/></div>
                   
                    <input 
                    className='stressR5' 
                    type='radio'
                    value='1'
                    checked={x5==="1"}
                    onChange={handleClickRadioButton5}         
                    />

                <label className='StressR5'>매우 그렇지 않다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='2'
                    checked={x5==="2"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='StressR5'>그렇지 않다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='3'
                    checked={x5==="3"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='StressR5'>보통이다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='4'
                    checked={x5==="4"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='StressR5'>그렇다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='5'
                    checked={x5==="5"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='StressR5'>매우 그렇다</label>
                </div>


                <div className='testLine_'><img alt='testLine' src={line}></img></div>

                <Link to="/stress/2">
                <button className='test_nextButton'><img alt='nextButton' src={nextButton}></img></button>
                </Link>


                



           </div>


        </div>
    )
}


export default StressTest1;