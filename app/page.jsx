'use client';

import AnimatedBorder from '@/components/AnimatedBorder';
import { Button } from '@/components/ui/button';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Landing />
      <Description />
      <Projects />
      <Contact />

      {/* <section className='max-w-7xl mx-auto grid gap-16' id='services'>
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-5xl'>Brand Strategy</h3>
            <span className='text-xs font-bold'>01</span>
          </div>
          <AnimatedBorder />
          <p className='max-w-md mb-4 font-mono'>
            We craft your Brand Strategy. We are experts in the development of
            strategies that are deeply connected to the company vision.
          </p>
          <a className='text-xs underline' href='#'>
            VIEW PROJECTS
          </a>
        </div>
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-5xl'>Interface Design</h3>
            <span className='text-xs font-bold'>02</span>
          </div>
          <AnimatedBorder />
          <p className='max-w-md mb-4 font-mono'>
            {' '}
            We consider user interaction to be key for success. Our interface
            designs are focused on creating the best user experience.
          </p>
          <a className='text-xs underline' href='#'>
            VIEW PROJECTS
          </a>
        </div>
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-5xl'>Website Design</h3>
            <span className='text-xs font-bold'>03</span>
          </div>
          <AnimatedBorder />
          <p className='max-w-md mb-4 font-mono'>
            {' '}
            We create a tailored strategy to suit your business needs. Our team
            ensures the design aligns with your company&apos;s identity.
          </p>
          <a className='text-xs underline' href='#'>
            VIEW PROJECTS
          </a>
        </div>
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-5xl'>Mobile Design</h3>
            <span className='text-xs font-bold'>04</span>
          </div>
          <AnimatedBorder />
          <p className='max-w-md mb-4 font-mono'>
            {' '}
            We create experiences of any complexity for mobile devices. Our
            approach is to deliver a product that stands out.
          </p>
          <a className='text-xs underline' href='#'>
            VIEW PROJECTS
          </a>
        </div>
      </section> */}

      {/* <section className='max-w-7xl mx-auto grid gap-2 md:gap-4 sm:grid-cols-3 lg:px-6 lg:gap-12 mt-8'>
        <div className='rounded-lg border border-gray-200 bg-black shadow-sm overflow-hidden dark:border-gray-800 '>
          <div className='p-6'>
            <h3 className='text-xl font-semibold'>Starter</h3>
            <p className='flex items-baseline gap-1 text-2xl font-semibold'>
              <span>$</span>
              <span>1,000</span>
              <span className='text-base font-normal'>/month</span>
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Pay only for what you use.
            </p>
          </div>
          <ul className='grid gap-1 px-6 pb-6 border-t text-center'>
            <li className='flex items-center justify-center h-10'>
              <span>Unlimited requests</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Global edge network</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Serverless functions</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>API traffic</span>
            </li>
          </ul>
          <div className='p-6'>
            <Link
              className='w-full inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 h-11 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-900/90'
              href='#'
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className='flex flex-col rounded-lg border-2 border-indigo-600 bg-black shadow-lg overflow-hidden dark:border-indigo-400 dark:bg-gray-950'>
          <div className='p-6'>
            <h3 className='text-xl font-semibold'>Professional</h3>
            <p className='flex items-baseline gap-1 text-2xl font-semibold'>
              <span>$</span>
              <span>2,000</span>
              <span className='text-base font-normal'>/month</span>
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Accelerate your team with collaboration tools.
            </p>
          </div>
          <ul className='grid gap-1 px-6 pb-6 border-t text-center'>
            <li className='flex items-center justify-center h-10'>
              <span>Unlimited requests</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Global edge network</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Serverless functions</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>API traffic</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Collaboration tools</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Code review</span>
            </li>
          </ul>
          <div className='p-6'>
            <Link
              className='w-full inline-flex items-center justify-center rounded-lg border border-indigo-600 bg-gray-50 px-4 h-11 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-indigo-400 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
              href='#'
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className='flex flex-col rounded-lg border border-gray-200 bg-black shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950'>
          <div className='p-6'>
            <h3 className='text-xl font-semibold'>Business</h3>
            <p className='flex items-baseline gap-1 text-2xl font-semibold'>
              <span>$</span>
              <span>3400</span>
              <span className='text-base font-normal'>/month</span>
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Scale your business with enterprise-grade infrastructure.
            </p>
          </div>
          <ul className='grid gap-1 px-6 pb-6 border-t text-center'>
            <li className='flex items-center justify-center h-10'>
              <span>Unlimited requests</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Global edge network</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Serverless functions</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>API traffic</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Collaboration tools</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Code review</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>Enterprise-grade SLA</span>
            </li>
            <li className='flex items-center justify-center h-10'>
              <span>24/7 support</span>
            </li>
          </ul>
          <div className='p-6'>
            <Link
              className='w-full inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 h-11 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-900/90'
              href='#'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
      <path d='m12 5 7 7-7 7' />
    </svg>
  );
}
