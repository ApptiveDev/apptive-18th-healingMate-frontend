import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './firstPage.scss';
import info1 from '../../../images/info1.png';
import info2 from '../../../images/info2.png';
import info3 from '../../../images/info3.png';
import line from '../../../images/test_line.png';
import nextButton from '../../../images/nextButton.png';

function BurnoutTest1(){

  const [x,setX] = useState([]);
  const [x2,setX2] = useState([]); 
  const [x3,setX3] = useState([]);
  const [x4,setX4] = useState([]);
  const [x5,setX5] = useState([]);
  const [x6,setX6] = useState([]);

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
  const handleClickRadioButton6 = (e) => {
    console.log(e.target.value)
    setX6(e.target.value)
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
                    <div className='stressq1Label'> 1. 일을 하는데 정서적으로 지쳐 있다.<br/></div>
                   
                    <input 
                    className='burnoutR1' 
                    type='radio'
                    value='1'
                    checked={x==="1"}
                    onChange={handleClickRadioButton}         
                    />

                <label className='BurnoutR1'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='2'
                    checked={x==="2"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='BurnoutR1'>그렇지 않다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='3'
                    checked={x==="3"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='BurnoutR1'>보통이다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='4'
                    checked={x==="4"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='BurnoutR1'>그렇다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='5'
                    checked={x==="5"}
                    onChange={handleClickRadioButton}
                    
                    />

                <label className='BurnoutR1'>매우 그렇다</label>
                </div>

                

                <div className='burnoutq2'>
                    <div className='burnoutq2Label'> 2. 일을 마칠 때 완전히 지쳤다고 느낀다.<br/></div>
                   
                    <input 
                    className='burnoutR2' 
                    type='radio'
                    value='1'
                    checked={x2==="1"}
                    onChange={handleClickRadioButton2}         
                    />

                <label className='BurnoutR2'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='2'
                    checked={x2==="2"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='BurnoutR2'>그렇지 않다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='3'
                    checked={x2==="3"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='BurnoutR2'>보통이다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='4'
                    checked={x2==="4"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='BurnoutR2'>그렇다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='5'
                    checked={x2==="5"}
                    onChange={handleClickRadioButton2}
                    
                    />

                <label className='BurnoutR2'>매우 그렇다</label>
                </div>



                <div className='burnoutq3'>
                    <div className='Burnoutq3Label'> 3. 아침에 일어나 출근할 생각만 하면 벌써 피곤하다.<br/></div>
                   
                    <input 
                    className='burnoutR3' 
                    type='radio'
                    value='1'
                    checked={x3==="1"}
                    onChange={handleClickRadioButton3}         
                    />

                <label className='BurnoutR3'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='2'
                    checked={x3==="2"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='BurnoutR3'>그렇지 않다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='3'
                    checked={x3==="3"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='BurnoutR3'>보통이다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='4'
                    checked={x3==="4"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='BurnoutR3'>그렇다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='5'
                    checked={x3==="5"}
                    onChange={handleClickRadioButton3}
                    
                    />

                <label className='BurnoutR3'>매우 그렇다</label>
                </div>


                <div className='Burnoutq4'>
                    <div className='burnoutq4Label'>4. 일하는데 부담감과 긴장감을 느낀다.<br/></div>
                   
                    <input 
                    className='burnoutR4' 
                    type='radio'
                    value='1'
                    checked={x4==="1"}
                    onChange={handleClickRadioButton4}         
                    />

                <label className='BurnoutR4'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='2'
                    checked={x4==="2"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='BurnoutR4'>그렇지 않다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='3'
                    checked={x4==="3"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='BurnoutR4'>보통이다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='4'
                    checked={x4==="4"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='BurnoutR4'>그렇다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='5'
                    checked={x4==="5"}
                    onChange={handleClickRadioButton4}
                    
                    />

                <label className='BurnoutR4'>매우 그렇다</label>
                </div>


                <div className='burnoutq5'>
                    <div className='burnoutq5Label'>5. 업무에 대한 관심이 크게 줄었다.<br/></div>
                   
                    <input 
                    className='burnoutR5' 
                    type='radio'
                    value='1'
                    checked={x5==="1"}
                    onChange={handleClickRadioButton5}         
                    />

                <label className='BurnoutR5'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='2'
                    checked={x5==="2"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='BurnoutR5'>그렇지 않다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='3'
                    checked={x5==="3"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='BurnoutR5'>보통이다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='4'
                    checked={x5==="4"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='BurnoutR5'>그렇다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='5'
                    checked={x5==="5"}
                    onChange={handleClickRadioButton5}
                    
                    />

                <label className='BurnoutR5'>매우 그렇다</label>
                </div>

                <div className='burnoutq6'>
                    <div className='burnoutq6Label'>6. 업무 수행할 때 무기력하고 싫증이 난다.<br/></div>
                   
                    <input 
                    className='burnoutR6' 
                    type='radio'
                    value='1'
                    checked={x6==="1"}
                    onChange={handleClickRadioButton6}         
                    />

                <label className='BurnoutR6'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='2'
                    checked={x6==="2"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='BurnoutR6'>그렇지 않다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='3'
                    checked={x6==="3"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='BurnoutR6'>보통이다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='4'
                    checked={x6==="4"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='BurnoutR6'>그렇다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='5'
                    checked={x6==="5"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='BurnoutR6'>매우 그렇다</label>
                </div>


                <div className='testLine_'><img alt='testLine' src={line}></img></div>

                <Link to="/burnout/2">
                <button className='test_nextButton'><img alt='nextButton' src={nextButton}></img></button>
                </Link>
             


                



           </div>


        </div>
    )
}


export default BurnoutTest1;