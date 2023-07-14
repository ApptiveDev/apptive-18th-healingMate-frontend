import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './depression_result_2.scss';
import depressionResult2 from '../../../images/depression_result_2.png';
import stressButton from '../../../images/stressButton.png';
import burnoutButton2 from '../../../images/burnoutButton2.png';
import line from '../../../images/result_line.png';
function DepressionResult2(){


   return(
        <div className='depressionResultP1'>
                <div className='indexBurnout'>우울증 자가진단 테스트</div>

            <div className='depressionScore'>
                <div className='depression_score_1'>당신의 자가진단 점수는 </div>
                <div className='depression_score'>38점 </div> 
                <div className='depression_score_2'>입니다 </div>
               
            </div>

            <div className='depressionResult'><img alt='depressionResult' src={depressionResult2}  ></img></div>
               
            <div className='resultLine_'><img alt='resultLine_' src={line}></img></div>

    

            <div className='depressionTestComment2'>
            -이야기하세요<br/></div>

            <div className='depressionTestComment3'>
            솔직한 감정에 대해 주위 사람과 이야기해보세요<blockquote/>
            </div>

            <div className='depressionTestComment4'>
            -움직여보세요<br/></div>

            <div className='depressionTestComment5'>
            정기적인 운동을 시작하고, 하루 한 가지씩 기분이 좋아지는 일을 찾아서 해보세요.<blockquote/>
             </div>

             <div className='depressionTestComment6'>
            -전문적인 도움을 구해보세요<br/>

            </div>

            <div className='depressionTestComment7'>
            정신건강 전문의나 지역 정신보건기관의 상담사와 같은 전문가에게 도움을 구해보세요. <br/>
            마음의 감기인 우울증은 전문가를 통해 빨리 치료될 수 있습니다 
            </div>
            
            <div className='resultLine__'><img alt='resultLine__' src={line}></img></div>


           <div className='otherTest1'>
            다른 검사 받아보기
           </div>

          <div className='OtherTest1'></div>
          <Link to="/stress">
           <button className='stressButton1'><img alt='depressionB' src={stressButton}></img></button>
           </Link>

           <Link to="/burnout">
           <button className='burnoutButton2'><img alt='burnoutB' src={burnoutButton2}></img></button>
           </Link>
        </div>
   )




}

export default DepressionResult2;