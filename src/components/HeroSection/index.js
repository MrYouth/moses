import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Comprehensive Structural Engineering Program with Advanced Software Analysis</HeroH1>
            <HeroP>Join us to Upgrade Your Skill in Structural Analysis Specialist for Oil and Gas Industry</HeroP>
            <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >Get started {hover ? <ArrowForward /> : <ArrowRight/>}</Button>

        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;