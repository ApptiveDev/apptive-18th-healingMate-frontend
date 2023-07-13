import React, { useState } from 'react';
import './secondPage.scss';
import info1 from '../../../images/info1.png';
import info2 from '../../../images/info2.png';
import info3 from '../../../images/info3.png';
import line from '../../../images/test_line.png';
import resultButton from '../../../images/result.png';

function StressTest2(){

  const [x6,setX6] = useState([]);
  const [x7,setX7] = useState([]); 
  const [x8,setX8] = useState([]);
  const [x9,setX9] = useState([]);
  const [x10,setX10] = useState([]);

  const handleClickRadioButton6 = (e) => {
    console.log(e.target.value)
    setX6(e.target.value)
  }

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
                    <div className='stressq1Label'> 6. 나는 화를 잘 다스릴 수 있다.<br/></div>
                   
                    <input 
                    className='stressR1' 
                    type='radio'
                    value='1'
                    checked={x6==="1"}
                    onChange={handleClickRadioButton6}         
                    />

                <label className='StressR1'>매우 그렇지 않다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='2'
                    checked={x6==="2"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='StressR1'>그렇지 않다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='3'
                    checked={x6==="3"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='StressR1'>보통이다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='4'
                    checked={x6==="4"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='StressR1'>그렇다</label>

                <input 
                    className='stressR1_' 
                    type='radio'
                    value='5'
                    checked={x6==="5"}
                    onChange={handleClickRadioButton6}
                    
                    />

                <label className='StressR1'>매우 그렇다</label>
                </div>

                

                <div className='stressq2'>
                    <div className='stressq2Label'>7. 해야 할 일을 감당할 수 없다고 느끼곤 한다.<br/></div>
                   
                    <input 
                    className='stressR2' 
                    type='radio'
                    value='1'
                    checked={x7==="1"}
                    onChange={handleClickRadioButton7}         
                    />

                <label className='StressR2'>매우 그렇지 않다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='2'
                    checked={x7==="2"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='StressR2'>그렇지 않다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='3'
                    checked={x7==="3"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='StressR2'>보통이다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='4'
                    checked={x7==="4"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='StressR2'>그렇다</label>

                <input 
                    className='stressR2_' 
                    type='radio'
                    value='5'
                    checked={x7==="5"}
                    onChange={handleClickRadioButton7}
                    
                    />

                <label className='StressR2'>매우 그렇다</label>
                </div>



                <div className='stressq3'>
                    <div className='stressq3Label'> 8. 최근 기분이 매우 좋다고 느낀 날이 많다.<br/></div>
                   
                    <input 
                    className='stressR3' 
                    type='radio'
                    value='1'
                    checked={x8==="1"}
                    onChange={handleClickRadioButton8}         
                    />

                <label className='StressR3'>매우 그렇지 않다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='2'
                    checked={x8==="2"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='StressR3'>그렇지 않다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='3'
                    checked={x8==="3"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='StressR3'>보통이다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='4'
                    checked={x8==="4"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='StressR3'>그렇다</label>

                <input 
                    className='stressR3_' 
                    type='radio'
                    value='5'
                    checked={x8==="5"}
                    onChange={handleClickRadioButton8}
                    
                    />

                <label className='StressR3'>매우 그렇다</label>
                </div>


                <div className='stressq4'>
                    <div className='stressq4Label'>9. 일이 잘 풀리지 않을 때마다 자주 화를 낸다.<br/></div>
                   
                    <input 
                    className='stressR4' 
                    type='radio'
                    value='1'
                    checked={x9==="1"}
                    onChange={handleClickRadioButton9}         
                    />

                <label className='StressR4'>매우 그렇지 않다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='2'
                    checked={x9==="2"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='StressR4'>그렇지 않다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='3'
                    checked={x9==="3"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='StressR4'>보통이다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='4'
                    checked={x9==="4"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='StressR4'>그렇다</label>

                <input 
                    className='stressR4_' 
                    type='radio'
                    value='5'
                    checked={x9==="5"}
                    onChange={handleClickRadioButton9}
                    
                    />

                <label className='StressR4'>매우 그렇다</label>
                </div>


                <div className='stressq5'>
                    <div className='stressq5Label'>10. 어려운 일이 많이 누적되어 극복할 수 없다고 느낀 적이 있다.<br/></div>
                   
                    <input 
                    className='stressR5' 
                    type='radio'
                    value='1'
                    checked={x10==="1"}
                    onChange={handleClickRadioButton10}         
                    />

                <label className='StressR5'>매우 그렇지 않다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='2'
                    checked={x10==="2"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='StressR5'>그렇지 않다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='3'
                    checked={x10==="3"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='StressR5'>보통이다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='4'
                    checked={x10==="4"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='StressR5'>그렇다</label>

                <input 
                    className='stressR5_' 
                    type='radio'
                    value='5'
                    checked={x10==="5"}
                    onChange={handleClickRadioButton10}
                    
                    />

                <label className='StressR5'>매우 그렇다</label>
                </div>


                <div className='testLine_'><img alt='testLine' src={line}></img></div>

                <button className='test_result'><img alt='resultButton' src={resultButton}></img></button>


                



           </div>


        </div>
    )
}


export default StressTest2;