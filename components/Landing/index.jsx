'use client';
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styles from './style.module.scss';

export default function Index() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.main
      variants={slideUp}
      initial='initial'
      animate='enter'
      className={styles.landing}
    >
      {/* <div className={styles.sliderContainer}>
        <div  className={styles.slider}>
          {' '}
          <p >Development Agency -</p>
        </div>
      </div> */}
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p>
          Passion for design, code, and interaction places us uniquely in the
          web design world.
        </p>
      </div>

      <p className={styles.textBackground}>
        We&apos;re on a mission to{' '}
        <span className='text-[#fdcda2]'>create </span>a world where every
        product or service offers a seamless user experience across all
        platforms. At{' '}
        <span className='text-[#fdcda2]' data-scroll data-scroll-speed={0.1}>
          Buena Vista
        </span>{' '}
        , we believe in the power of intuitive design to transform the way
        people interact with technology. Join us as we pave the way for a future
        where usability knows no bounds.
      </p>
    </motion.main>
  );
}
