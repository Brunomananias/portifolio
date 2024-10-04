import React, { useEffect, useState } from 'react';
import './TypingEffect.css'; // Importe o CSS

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const text = "Fuull-Stack Developer";
  const typingSpeed = 100; 

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer); 
  }, [text]);

  return (
    <div className="typing-container">
      <h1>{displayedText}</h1>
      <div className="typing-indicator">|</div>
    </div>
  );
};

export default TypingEffect;
