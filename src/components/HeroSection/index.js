import React, {useState} from 'react';
import Video from '../../videos/lock.mp4';
import {HeroContainer,ColorAccent, QuotesOpen, QuotesClose, HeroBg, VideoBg, HorizontalLine, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'; 
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='Hero'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Thinkgrpy <ColorAccent>Services</ColorAccent> Private Limited</HeroH1>
                <br />
                <HorizontalLine/>
                <HeroP>
                    <QuotesOpen>❝</QuotesOpen> a startup that foucuses primarily on cyber attacks and legit ways to find bugs in other startup platforms and help them to fix that vulnerability <QuotesClose>❞</QuotesClose>
                </HeroP>
                <br />
                <HorizontalLine/>
                <HeroBtnWrapper>
                    <Button primary="true" dark="true" to="about" onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}>
                        {hover ? <ArrowRight/> : <ArrowForward/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}


export default HeroSection