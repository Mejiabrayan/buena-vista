import { scaleAnimation } from './animation';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import Project from './components/project';
import gsap from 'gsap';

const projects = [
  {
    title: 'C2 Montreal',
    src: '/blue.jpeg',
    color: '#000000',
  },
  {
    title: 'Office Studio',
    src: '/blue.jpeg',
    color: '#8C8C8C',
  },
  {
    title: 'Locomotive',
    src: '/blue.jpeg',
    color: '#EFE8D3',
  },
  {
    title: 'Silencio',
    src: '/blue.jpeg',
    color: '#706D63',
  },
];

export default function Index() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    // Initialize GSAP quickTo tweens for modal container movement on the x and y axes.
    // This allows for a performant way to update the position with a smooth animation.
    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    // Initialize GSAP quickTo tweens for cursor movement on the x and y axes.
    xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    // Initialize GSAP quickTo tweens for cursor label movement on the x and y axes.
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });
  }, []);

  const moveItems = (x, y) => {
    // This function will be called with x and y coordinates to move the modal container,
    // cursor, and cursor label to the new position using the previously defined tweens.
    // The actual movement will be performed by updating the tweens with the new coordinates.
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <Rounded>
        <p>More work</p>
      </Rounded>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + '%' }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt='image'
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
