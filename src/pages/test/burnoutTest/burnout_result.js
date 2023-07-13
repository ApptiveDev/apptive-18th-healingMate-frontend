import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './burnout_result.scss';
import burnoutResult from '../../../images/result_burnout.png';
import stressButton from '../../../images/stressButton.png';
import depressionButton from '../../../images/depressionButton.png';
import line from '../../../images/result_line.png';
function BurnoutResult(){


   return(
        <div className='burnoutResultP1'>
                <div className='indexBurnout'>번아웃 증후군 테스트</div>

            <div className='burnoutScore'>
                <div className='burnout_score_1'>당신의 자가진단 점수는 </div>
                <div className='burnout_score'>42점 </div> 
                <div className='burnout_score_2'>입니다 </div>
               
            </div>

            <div className='burnoutResult'><img alt='burnoutResult' src={burnoutResult}  ></img></div>
               
            <div className='resultLine_'><img alt='resultLine_' src={line}></img></div>

    

            <div className='burnoutTestComment2'>
            -자책하지 마세요<br/></div>

            <div className='burnoutTestComment3'>
            번아웃이 왔다고 자책하면 스트레스가 쌓이고, 스스로에 대한 2차 가해가 됩니다.<br/>
             번아웃이 왔다면 ‘내가 열심히 살았구나’라 생각하고 재충전의 시간을 보내 보아요<blockquote/>
            </div>

            <div className='burnoutTestComment4'>
            -주변에 도움을 구해봐요<br/></div>

            <div className='burnoutTestComment5'>
            번아웃이 왔을 때 사람들과의 만남을 피하지 말아요.<br/> 
            사랑하는 사람들과 만나며 적극적으로 그들의 지지를 받아내면 불안감을 극복하는데 큰 도움이 될 거에요.<blockquote/>
             </div>

             <div className='burnoutTestComment6'>
            -건강한 식단, 숙면, 가벼운 운동<br/>

            </div>

            <div className='burnoutTestComment7'>
            바쁜 일상 속에서 혹사당한 몸을 건강하게 만들어봐요. <br/>
            건강한 식단, 가벼운 운동, 숙면은 체력과 신체 건강 뿐만 아니라 정신 건강에도 큰 도움이 될 거에요. 
            </div>
            
            <div className='resultLine__'><img alt='resultLine__' src={line}></img></div>


           <div className='otherTest1'>
            다른 검사 받아보기
           </div>

          <div className='OtherTest1'></div>
          <Link to="/stress">
           <button className='stressButton1'><img alt='burnoutB' src={stressButton}></img></button>
           </Link>

           <Link to="/depression">
           <button className='depressionButton1'><img alt='depressionB' src={depressionButton}></img></button>
           </Link>
        </div>
   )




}

export default BurnoutResult;