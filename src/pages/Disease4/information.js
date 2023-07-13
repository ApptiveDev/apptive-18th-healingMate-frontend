import React from 'react';
import './information.scss';
import infoLine from '../../images/infoLine.png';
import good from '../../images/good.png';
import bad from '../../images/bad.png';
import { useState } from 'react';

function CholinInfo(){
    

    return(
        <div className='info4'>
            <div className='name4_box'>
            <div className='nameDisease4'>콜린성 두드러기</div>
            <div className='EngnameDisease4'>(cholinergic urticaria)</div>
            </div>

            <div className="info4_box"
        style={{
            border: '2px solid',
            borderImage: 'linear-gradient(90deg, #6CFFCA, #7CF7FF) 1',
            borderImageSlice: 1
          }}     >


            <div className="outlineBox4">
                <div className='outline4'>
                    <div className="Outline4">개요</div>
                    </div>

                   <div className="outlineComment4">
                   콜린성 두드러기는 과도한 운동, 정신적 스트레스나 뜨거운 목욕 등으로 심부 체온이 1℃ 정도 상승했을 때 두드러기가 발생하는 질병입니다.<br/>
                   전 인구의 15~20%가 살면서 적어도 한 번 이상은 경험하는 것으로 알려져 있습니다. 연령으로는 10~20대의 점유율이 가장 높고, 여성보다 남성에게서 더 많이 발견되는 질병입니다.
                </div>

                 </div>


           <div className='symptomsBox4'>
                <div className='symptoms4'>
                    <div className="Symptoms4">증상</div>
                    </div>

                <div className='symptomsComment4'>
                과도한 운동, 정신적 스트레스, 목욕 등으로 체온이 상승하면 두드러기가 발생합니다. 손바닥과 발바닥, 얼굴을 제외한 전신에 1~2mm의 아주 작은 팽진이 발생하는데, 대부분 1시간 안에 소실됩니다. 심한 가려움 혹은 따가움이 동반되는데, 가려움보다는 따가움을 호소하는 환자가 더 많습니다. 심한 경우 전신에 땀, 복통, 현기증이 동반되기도 합니다.<blockquote/>
환자마다 증상의 지속시간, 정도는 다릅니다. 환자에 따라 여름에 주로 증상이 나타나는 경우가 있고, 겨울에 주로 증상이 나타나는 경우도 있습니다


                </div>         
           </div>

           <div className='causeBox4'>
              <div className='cause4'>
                    <div className="Cause4">원인</div>
                    </div>

              <div className='causeComment4'>
              자율신경계 중 체온을 조절하는 피부 교감신경계에 오작동이 일어나 발생하는 것으로 알려져 있습니다.
              </div>
           </div>

           <div className='infoLine4'>
           <img alt="info_line" src={infoLine} style={{width:"1100px"}}></img>
           </div>
            
           <div
                className="happyBox4"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  좋아요
          </div>

          <div
                className="badBox4"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  싫어요
          </div>

          <div className='goodComment4'>
          -물 자주 마시기

          </div>
            

          <div className='badComment4'>
          -사우나, 뜨거운 목욕<br/>
          -과도한 운동<br/>
         -스트레스<br/>
         -더운 날 야외활동<br/>


          </div>
            
             
        </div>

        

        </div>
    )
}

export default CholinInfo;