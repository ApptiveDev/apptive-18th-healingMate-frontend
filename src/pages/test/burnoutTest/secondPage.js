import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './secondPage.scss';
import info1 from '../../../images/info1.png';
import info2 from '../../../images/info2.png';
import info3 from '../../../images/info3.png';
import line from '../../../images/test_line.png';
import nextButton from '../../../images/nextButton.png';

function BurnoutTest2(){

  const [x7,setX7] = useState([]);
  const [x8,setX8] = useState([]); 
  const [x9,setX9] = useState([]);
  const [x10,setX10] = useState([]);
  const [x11,setX11] = useState([]);
  const [x12,setX12] = useState([]);

  const handleClickRadioButton7 = (e) => {
    console.log(e.target.value)
    setX7(e.target.value)
  }

  const handleClickRadioButton8 = (e) => {
    console.log(e.target.value)
    setX8(e.target.value)
  }

  const handleClickRadioButton9 = (e) => {
    console.log(e.target.value)
    setX9(e.target.value)
  }

  
  const handleClickRadioButton10 = (e) => {
    console.log(e.target.value)
    setX10(e.target.value)
  }

  const handleClickRadioButton11 = (e) => {
    console.log(e.target.value)
    setX11(e.target.value)
  }
  const handleClickRadioButton12 = (e) => {
    console.log(e.target.value)
    setX12(e.target.value)
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
                    <div className='stressq1Label'> 7. 맡은 일은 하는데 소극적이고 방어적이다.<br/></div>
                   
                    <input 
                    className='burnoutR1' 
                    type='radio'
                    value='1'
                    checked={x7==="1"}
                    onChange={handleClickRadioButton7}         
                    />

                <label className='BurnoutR1'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='2'
                    checked={x7==="2"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='BurnoutR1'>그렇지 않다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='3'
                    checked={x7==="3"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='BurnoutR1'>보통이다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='4'
                    checked={x7==="4"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='BurnoutR1'>그렇다</label>

                <input 
                    className='burnoutR1_' 
                    type='radio'
                    value='5'
                    checked={x7==="5"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='BurnoutR1'>매우 그렇다</label>
                </div>

                

                <div className='burnoutq2'>
                    <div className='burnoutq2Label'> 8. 나의 직무 기여도에 냉소적이다.<br/></div>
                   
                    <input 
                    className='burnoutR2' 
                    type='radio'
                    value='1'
                    checked={x8==="1"}
                    onChange={handleClickRadioButton8}         
                    />

                <label className='BurnoutR2'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='2'
                    checked={x8==="2"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='BurnoutR2'>그렇지 않다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='3'
                    checked={x8==="3"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='BurnoutR2'>보통이다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='4'
                    checked={x8==="4"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='BurnoutR2'>그렇다</label>

                <input 
                    className='burnoutR2_' 
                    type='radio'
                    value='5'
                    checked={x8==="5"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='BurnoutR2'>매우 그렇다</label>
                </div>



                <div className='burnoutq3'>
                    <div className='Burnoutq3Label'> 9. 스트레스를 풀려고 폭식이나 음주, 흡연 등을 즐긴다.<br/></div>
                   
                    <input 
                    className='burnoutR3' 
                    type='radio'
                    value='1'
                    checked={x9==="1"}
                    onChange={handleClickRadioButton9}         
                    />

                <label className='BurnoutR3'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='2'
                    checked={x9==="2"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='BurnoutR3'>그렇지 않다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='3'
                    checked={x9==="3"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='BurnoutR3'>보통이다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='4'
                    checked={x9==="4"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='BurnoutR3'>그렇다</label>

                <input 
                    className='burnoutR3_' 
                    type='radio'
                    value='5'
                    checked={x9==="5"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='BurnoutR3'>매우 그렇다</label>
                </div>


                <div className='Burnoutq4'>
                    <div className='burnoutq4Label'>10. 짜증과 불안이 늘고 여유가 없다.<br/></div>
                   
                    <input 
                    className='burnoutR4' 
                    type='radio'
                    value='1'
                    checked={x10==="1"}
                    onChange={handleClickRadioButton10}         
                    />

                <label className='BurnoutR4'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='2'
                    checked={x10==="2"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='BurnoutR4'>그렇지 않다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='3'
                    checked={x10==="3"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='BurnoutR4'>보통이다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='4'
                    checked={x10==="4"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='BurnoutR4'>그렇다</label>

                <input 
                    className='burnoutR4_' 
                    type='radio'
                    value='5'
                    checked={x10==="5"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='BurnoutR4'>매우 그렇다</label>
                </div>


                <div className='burnoutq5'>
                    <div className='burnoutq5Label'>11. 내가 점점 냉소적으로 변하고 있다고 느낀다.<br/></div>
                   
                    <input 
                    className='burnoutR5' 
                    type='radio'
                    value='1'
                    checked={x11==="1"}
                    onChange={handleClickRadioButton11}         
                    />

                <label className='BurnoutR5'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='2'
                    checked={x11==="2"}
                    onChange={handleClickRadioButton11}
                    
                    />

                <label className='BurnoutR5'>그렇지 않다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='3'
                    checked={x11==="3"}
                    onChange={handleClickRadioButton11}
                    
                    />

                <label className='BurnoutR5'>보통이다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='4'
                    checked={x11==="4"}
                    onChange={handleClickRadioButton11}
                    
                    />

                <label className='BurnoutR5'>그렇다</label>

                <input 
                    className='burnoutR5_' 
                    type='radio'
                    value='5'
                    checked={x11==="5"}
                    onChange={handleClickRadioButton11}
                    
                    />

                <label className='BurnoutR5'>매우 그렇다</label>
                </div>

                <div className='burnoutq6'>
                    <div className='burnoutq6Label'>12. 유머감각이 점점 사라진다.<br/></div>
                   
                    <input 
                    className='burnoutR6' 
                    type='radio'
                    value='1'
                    checked={x12==="1"}
                    onChange={handleClickRadioButton12}         
                    />

                <label className='BurnoutR6'>매우 그렇지 않다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='2'
                    checked={x12==="2"}
                    onChange={handleClickRadioButton12}
                    
                    />

                <label className='BurnoutR6'>그렇지 않다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='3'
                    checked={x12==="3"}
                    onChange={handleClickRadioButton12}
                    
                    />

                <label className='BurnoutR6'>보통이다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='4'
                    checked={x12==="4"}
                    onChange={handleClickRadioButton12}
                    
                    />

                <label className='BurnoutR6'>그렇다</label>

                <input 
                    className='burnoutR6_' 
                    type='radio'
                    value='5'
                    checked={x12==="5"}
                    onChange={handleClickRadioButton12}
                    
                    />

                <label className='BurnoutR6'>매우 그렇다</label>
                </div>


                <div className='testLine_'><img alt='testLine' src={line}></img></div>

                <Link to="/burnout/3">
                <button className='test_nextButton'><img alt='nextButton' src={nextButton}></img></button>
                </Link>
             


                



           </div>


        </div>
    )
}


export default BurnoutTest2;