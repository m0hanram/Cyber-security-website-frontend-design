import React from 'react'
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import Icon4 from '../../images/svg-2.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';



const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services Provided</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Lorem, ipsum</ServicesH2>
                    <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, adipisci.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Lorem, ipsum</ServicesH2>
                    <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, adipisci.</ServicesP>
                    <ServicesIcon src={Icon2}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Lorem, ipsum</ServicesH2>
                    <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, adipisci.</ServicesP>
                    <ServicesIcon src={Icon3}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Lorem, ipsum</ServicesH2>
                    <ServicesP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, adipisci.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
