import React from 'react';
import './information.scss';
import infoLine from '../../images/infoLine.png';
import good from '../../images/good.png';
import bad from '../../images/bad.png';
import { useState } from 'react';

function CrohnInfo(){
    

    return(
        <div className='info2'>
            <div className='name2_box'>
            <div className='nameDisease2'>크론병</div>
            <div className='EngnameDisease2'>(Chron's)</div>
            </div>

            <div className="info2_box"
        style={{
            border: '2px solid',
            borderImage: 'linear-gradient(90deg, #6CFFCA, #7CF7FF) 1',
            borderImageSlice: 1
          }}     >


            <div className="outlineBox2">
                <div className='outline2'>
                    <div className="Outline2">개요</div>
                    </div>

                   <div className="outlineComment2">
                   크론병은 우리나라에서 매우 드문 질환이었으나, 최근 10여 년 사이에 식생활의 서구화 등으로 인해 급증하고 있는 자가면역성 질환입니다. <blockquote/>크론병은 지속적인 치료에도 불구하고 증상이 악화와 재발을 반복하여 완치가 되지 않는 만성 염증성 장 질환으로, 주로 젊은이들에게 발병합니다. 모든 연령층에서 발생할 수 있지만, 15~35세에 진단이 되는 경우가 많고, 크론병 환자의 약 25%는 가족력이 있어서 유전적 소인이 있는 사람에서 발생이 잘 될 것으로 추정됩니다.<blockquote/>
                    크론병은 식도부터 항문까지 위장관의 어느 부위에도 나타날 수 있으며, 염증이 있는 부위는 연속되지 않고 여러 곳에 다발성으로 발생할 수 있습니다.<blockquote/>
                    비교적 드문 질환이고, 확실한 진단 지표가 없어 진단이 지연되는 경우가 많습니다. 정확한 원인이 밝혀져 있지 않아서 증상에 대한 치료가 어려울 수 있습니다.
                </div>

                 </div>


           <div className='symptomsBox2'>
                <div className='symptoms2'>
                    <div className="Symptoms2">증상</div>
                    </div>

                <div className='symptomsComment2'>
                크론병 환자의 증상의 종류와 정도는 환자마다 다양합니다. 서서히 나타나기도 하고 때로는 급속히 진행되기도 하며, 수술이 필요할 정도로 심각한 경우가 있거나 어떤 경우에는 증상이 거의 나타나지 않기도 합니다.
초기 증상으로는 대개 복통, 설사, 체중 감소 등이 나타나며, 빈혈, 나른함, 복부팽만, 구토 등이 나타날 수 있습니다.
장관 외 증상으로는 관절, 피부, 눈 등의 증상이 있습니다.<blockquote/>
(1) 관절 증상
크론병의 장관 외 증상으로 가장 흔한 증상은 관절염(관절통), 강직성 척추염이며, 여러 관절 부위에 바뀌어 나타납니다.<br/>
(2) 피부 증상
1~5cm 정도의 붉은 색조를 보이는 둥근 결절로서 누르면 통증이 있는 ‘결정홍반’, 고름이 잡히는 피부 궤양인 ‘괴저농피증’ 등이 나타납니다.<br/>
(3) 눈 증상
‘홍채염’과 안구통, 눈부심, 두통이나 시력 불선명 등이 나타나는 ‘포도막염’이 있습니다. 포도막염은 빠르게 진행하면 실명할 수 있으므로 빠른 치료가 필요합니다. <br/>
(4) 기타 증상
기타 증상으로 만성간염, 지방간, 경화성 담관염, 담석 등이 생길 수 있습니다.

                </div>         
           </div>

           <div className='causeBox2'>
              <div className='cause2'>
                    <div className="Cause2">원인</div>
                    </div>

              <div className='causeComment2'>
              크론병의 원인은 아직 정확히 밝혀지지 않았습니다. 하지만 한 가족 내에서 여러 명의 환자가 나타나는 경향을 봤을 때 유전, 면역, 환경요인 등 다양한 요인의 상호작용에 의해 발병할 것으로 추정하고 있습니다. <blockquote/>
              또한 흡연은 크론병 발생을 촉진하고, 흡연자의 경우 수술 후에도 재발률이 높고 증상이 더욱 악화되는 것으로 알려져 있습니다.

              </div>
           </div>

           <div className='infoLine2'>
           <img alt="info_line" src={infoLine} style={{width:"1100px"}}></img>
           </div>
            
           <div
                className="happyBox2"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  좋아요
          </div>

          <div
                className="badBox2"
                style={{
             
                backgroundImage: 'linear-gradient(90deg, #6CFFCA 0%, #7CF7FF 100%)'
                }}
            >
  싫어요
          </div>

          <div className='goodComment2'>
          -가벼운 운동(활동적인 생활)<br/>
            -기름기 없는 살코기, 생선<br/>
        -충분한 수분 섭취<br/>
        -계란, 두부

          </div>
            

          <div className='badComment2'>
          -카페인 음료<br/>
            -음주<br/>
            -흡연<br/>
            -섬유질이 많은 채소<br/>

          </div>
            
             
        </div>

        

        </div>
    )
}

export default CrohnInfo;