import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stress_result_3.scss';
import stressResult3 from '../../../images/stress_result_3.png';
import burnoutButton from '../../../images/burnoutButton.png';
import depressionButton from '../../../images/depressionButton.png';
import line from '../../../images/result_line.png';
function StressResult3(){


   return(
        <div className='stressResultP1'>
                <div className='indexStress'>스트레스 자가진단 테스트</div>

            <div className='StressScore'>
                <div className='stress_score_1'>당신의 자가진단 점수는 </div>
                <div className='stress_score'>28점 </div> 
                <div className='stress_score_2'>입니다 </div>
               
            </div>

            <div className='stressResult3'><img alt='stressResult3' src={stressResult3}  ></img></div>
               
            <div className='resultLine_'><img alt='resultLine_' src={line}></img></div>

            <div className='testComment1'>
            적당한 스트레스는 신체와 정신에 활력을 주기도 하지만, 과도한 스트레스는 건강에 좋지 않은 <br/>
            영향을 미치기 때문에 해소할 필요가 있습니다. 스트레스를 해소하는 방법은 다음과 같습니다. <blockquote/></div>

            <div className='testComment2'>
            -적극적인 대인관계<br/></div>

            <div className='testComment3'>
            스트레스가 쌓이고, 정신적으로 힘들 때일수록 사람들과 관계를 맺어보세요. <br/>
            상대방에게 공감과 조언을 받아 스트레스를 받는 상황을 해결할 수도 있고, 서로의 생각을 허심탄회하게 <br/>말하다 <br/>
            보면 심리적인 부담감을 줄일 수 있을 거에요.<blockquote/>
            </div>

            <div className='testComment4'>
            -취미생활<br/></div>

            <div className='testComment5'>
             스트레스를 해소할 수 있는 자신만의 취미생활을 만들어 즐겨보세요.<blockquote/>
             </div>

             <div className='testComment6'>
            -전문가의 도움<br/>

            </div>

            <div className='testComment7'>
            혼자 해결하기 힘들 정도로 스트레스 때문에 고통을 받는다면 정신과 의사에게 상담을 받는 것도 좋은 <br/>방법입니다. 
            </div>
            
            <div className='resultLine__'><img alt='resultLine__' src={line}></img></div>


           <div className='otherTest1'>
            다른 검사 받아보기
           </div>

          <div className='OtherTest1'></div>
          <Link to="/burnout">
           <button className='burnoutButton1'><img alt='burnoutB' src={burnoutButton}></img></button>
           </Link>

           <Link to="/depression">
           <button className='depressionButton1'><img alt='depressionB' src={depressionButton}></img></button>
           </Link>
        </div>
   )




}

export default StressResult3;