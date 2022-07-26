import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid from "../videos/video-4.mp4"

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={vid} autoPlay loop muted type="video/mp4"/>
        <h1>Game Developer</h1>
        <p>What are you waiting for</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                Watch Trailer <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;