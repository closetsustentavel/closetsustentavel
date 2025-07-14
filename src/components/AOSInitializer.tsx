'use client'; 

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quad', 
      once: true, 
      offset: 50, 
    });

  }, []); 

  return null; 
}