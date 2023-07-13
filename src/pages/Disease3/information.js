import React from 'react';
import './information.scss';
import infoLine from '../../images/infoLine.png';
import good from '../../images/good.png';
import bad from '../../images/bad.png';
import { useState } from 'react';

function RetintisInfo(){
    

    return(
        <div className='info3'>
            <div className='name3_box'>
            <div className='nameDisease3'>망막색소변성증</div>
            <div className='EngnameDisease3'>(Retinitis Pigmentosa)</div>
            </div>

            <div className="info3_box"
        style={{
            border: '2px solid',
            borderImage: 'linear-gradient(90deg, #6CFFCA, #7CF7FF) 1',
            borderImageSlice: 1
          }}     >


            <div className="outlineBox3">
                <div className='outline3'>
                    <div className="Outline3">개요</div>
                    </div>

                   <div className="outlineComment3">
                   망막색소변성증은 가장 흔한 유전성 망막질환으로, 시각세포 손상으로 인해 초기에는 야맹증이 나타나고, 점차 시야가 좁아지면서 결국 시력을 잃게 됩니다.<blockquote/>
                    환자 중 일부는 난청, 신장병 그리고 다른 기형, 중추신경계와 대사질환과 염색체 이상과 관련이 있는 증후군의 한 증상으로 나타납니다.<blockquote/>
망막색소변성증은 전세계적으로 4,000~5,000명당 한 명의 비율로 발생하는 것으로 알려져 있습니다. 중국에서도 4,016명당 한 명의 비율로 발생하는 것으로 알려졌는데, 한국의 정확한 통계는 알려져 있지 않습니다.

                </div>

                 </div>


           <div className='symptomsBox3'>
                <div className='symptoms3'>
                    <div className="Symptoms3">증상</div>
                    </div>

                <div className='symptomsComment3'>
                망막색소변성증은 가장 흔한 유전성 망막질환으로, 시각세포 손상으로 인해 초기에는 야맹증이 나타나고, 점차 시야가 좁아지면서 결국 시력을 잃게 됩니다.<blockquote/>
                 환자 중 일부는 난청, 신장병 그리고 다른 기형, 중추신경계와 대사질환과 염색체 이상과 관련이 있는 증후군의 한 증상으로 나타납니다.<blockquote/>
망막색소변성증은 전세계적으로 4,000~5,000명당 한 명의 비율로 발생하는 것으로 알려져 있습니다. 중국에서도 4,016명당 한 명의 비율로 발생하는 것으로 알려졌는데, 한국의 정확한 통계는 알려져 있지 않습니다.

                </div>         
           </div>

           <div className='causeBox3'>
              <div className='cause3'>
                    <div className="Cause3">원인</div>
                    </div>

              <div className='causeComment3'>
              주로 유전적 변이에 의해 발생하며, 특정한 이유 없이 발생하는 경우도 있습니다.<blockquote/>
               각각 다른 형질로 유전되는 망막색소변성증은 증상과 증상의 중증도에 다소간의 차이를 보이기도 합니다.
              </div>
           </div>

           <div className='infoLine3'>
           <img alt="info_line" src={infoLine} style={{width:"1100px"}}></img>
           </div>
            
           <div
                className="happyBox3"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  좋아요
          </div>

          <div
                className="badBox3"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  싫어요
          </div>

          <div className='goodComment3'>
          -선글라스<br/>
       -비타민A가 많은 음식(당근, 시금치 등)


          </div>
            

          <div className='badComment3'>
          -스트레스<br/>
         -야간 활동<br/>
          -음주<br/>
          -흡연


          </div>
            
             
        </div>

        

        </div>
    )
}

export default RetintisInfo;