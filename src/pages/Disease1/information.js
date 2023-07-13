import React from 'react';
import './information.scss';
import infoLine from '../../images/infoLine.png';
import good from '../../images/good.png';
import bad from '../../images/bad.png';
import { useState } from 'react';

function CrohnicInfo(){
    

    return(
        <div className='info1'>
            <div className='name1_box'>
            <div className='nameDisease1'>만성콩팥병</div>
            <div className='EngnameDisease1'>(Chronic renal failure)</div>
            </div>

          
            <div className="info1_box"
        style={{
            border: '2px solid',
            borderImage: 'linear-gradient(90deg, #6CFFCA, #7CF7FF) 1',
            borderImageSlice: 1
          }}     >


            <div className="outlineBox1">
                <div className='outline1'>
                    <div className="Outline1">개요</div>
                    </div>

                   <div className="outlineComment">
                    만성 콩팥병은 신장이 제대로 기능하지 않는 만성 질환입니다. 흔하고 위중하지만, 치료와 관리가 가능합니다.<blockquote/>
                    우리나라 국민 7~8명 당 1명은 이 질환을 앓고 있지만, 신장 기능의 의미 있는 감소를 동반하는 경우는 5~7%입니다. 고령화가 진행됨에 따라 만성 콩팥병 환자는 빠른 속도로 증가할 것으로 보입니다.<blockquote/>
                    콩팥은 침묵의 장기로 불릴 정도로 자각 증상이 없어 뒤늦게 발견되고, 치료 시기를 놓치는 경우가 많습니다. 만성 콩팥병은 시간이 지나면서 악화될 수 있고, 경우에 따라 투석이나 신장 이식이 필요한 말기 신부전증으로 진행되기도 합니다.<blockquote/>
                    또, 만성 콩팥병은 다양한 합병증으로 인해 사망의 위험성이 높아집니다. 암, 심장 질환 등 만성 질환을 동반하는 경우가 많고, 이 경우 신장 기능의 저하로 인해 약물 치료가 제한됩니다. 그러나, 조기에 발견하여 치료하고, 철저히 관리한다면 완치가 가능하고, 완치가 어려운 경우에도 적극적인 관리를 통해 만성 콩팥병을 가진 상태로 잘 지낼 수 있습니다.<blockquote/>
                    만성 콩팥병은 3개월 이상 지속적으로 신장 기능의 감소를 보이거나 신장 손상의 근거가 있는 경우로 정의합니다. 만성 콩팥병은 사구체 여과율에 따라 다음과 같이 단계를 나눌 수 있습니다.<blockquote/>
                    1단계: 사구체 여과율 {'>'} 90 ml/min/1.73<blockquote/>
                    2단계: 사구체 여과율 60~89 ml/min/1.73<blockquote/>
                    3a단계: 사구체 여과율 45~59 ml/min/1.73<blockquote/>
                    3b단계: 사구체 여과율 30~44 ml/min/1.73<blockquote/>
                    4단계: 사구체 여과율 15~29 ml/min/1.73<blockquote/>
                    5단계: 사구체 여과율 {'>'} 15 ml/min/1.73</div>

                 </div>


           <div className='symptomsBox1'>
                <div className='symptoms1'>
                    <div className="Symptoms1">증상</div>
                    </div>

                <div className='symptomsComment'>
                만성 콩팥병은 초기에는 증상이 거의 없어 소변 검사 등 적절한 검사를 하지 않으면 말기 신부전에 도달하기 전까지 모르고 지내는 경우가 많습니다. 신장 기능의 저하로 나타날 수 있는 증상들은 다음과 같습니다.<blockquote/>
                -피로감을 느끼고 기운이 없다.<br/>
                -집중력이 떨어진다.<br/>
               -식욕감소<br/>
                -수면장애<br/>
                -밤에 쥐가 잘 난다.<br/>
                -손발이 붇는다.<br/>
                -아침에 눈이 푸석푸석하다.<br/>
                -소변을 자주 본다(특히 밤에).
                </div>         
           </div>

           <div className='causeBox1'>
              <div className='cause1'>
                    <div className="Cause1">원인</div>
                    </div>

              <div className='causeComment'>
              70% 이상의 환자가 당뇨와 고혈압에 의해 만성 콩팥병을 앓게 되었습니다. 
              이외에도 사구체 콩팥염, 다낭성 신질환, 선천성 기형, 루푸스 등의 자가 면역질환, 약물남용, 
              그 외 결석이나 전립선 비대로 인한 요로 폐색도 만성 콩팥병의 원인이 될 수 있습니다.

              </div>
           </div>

           <div className='infoLine1'>
           <img alt="info_line" src={infoLine} style={{width:"1100px"}}></img>
           </div>
            
           <div
                className="happyBox"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  좋아요
          </div>

          <div
                className="badBox"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  싫어요
          </div>

          <div className='goodComment1'>
          -저염식 및 저단백 식단<br/>
            -가벼운 운동(격렬하지 않은 운동)<br/>
        -칼륨이 적은 음식(사과, 포도, 통조림 과일 등)<br/>
        -빵, 떡 등 탄수화물 간식(부족한 식사 보충)<br/>
          </div>
            

          <div className='badComment1'>
          -흡연<br/>
-칼륨이 많은 음식(부추, 바나나, 토마토 등)<br/>
-반려동물(감염의 위험)<br/>
-인 함량이 높은 음식(초콜릿, 잡곡, 탄산음료 등)<br/>
          </div>
            
             
        </div>

        

        </div>
    )
}

export default CrohnicInfo;