import AnimatedBorder from '@/components/AnimatedBorder';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className='relative text-white p-8 overflow-hidden'>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_30%_70%_at_50%_-20%,rgba(30,119,198,0.3),rgba(255,255,255,0))]' />
      <header className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Buena Vista Agency</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a className='hover:underline' href='#'>
                services
              </a>
            </li>
            <li>
              <a className='hover:underline' href='#'>
                projects
              </a>
            </li>
            <li>
              <a className='hover:underline' href='#'>
                about
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12'>
        <section className=''>
          <h2 className='text-base font-mono mb-4 text-gray-400'>WHAT WE DO</h2>
          <p className='mb-4 tracking-tighter text-2xl md:text-3xl lg:text-4xl'>
            We&apos;re on a mission to create a world where every product or service
            offers a seamless user experience across all platforms. At Buena
            Vista, we believe in the power of intuitive design to transform the
            way people interact with technology. Join us as we pave the way for
            a future where usability knows no bounds.
          </p>
        </section>
        <div className='border-b-2 border-gray-400 mb-4' />
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3'>
            <h2 className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#598CB1] to-blue-100 font-mono'>
              OUR PHILOSOPHY
            </h2>
          </div>
          <div className='col-span-2'>
            <p className='text-xs md:text-base lg:text-xl'>
              Focused on timeless design, our products are distinguishable by
              their sophisticated simplicity and dedicated craftsmanship. They
              are designed to outlive trends and deliver functional beauty that
              complements your individual expression.
            </p>
          </div>
          <div className='col-span-1'>
            <p className='text-xs md:text-base lg:text-xl'>
              Pioneering designs and innovative business models are our
              foundation. Distinguished by a fusion concept of functionality as
              design, our products embody a lifetime of cultivated elegance and
              originality.
            </p>
          </div>
          <div className='col-span-1'>
            <h3 className='text-lg font-semibold'>RESEARCH</h3>
            <p className='text-xs md:text-base lg:text-xl'>
              All good products are the result of a continuous process of
              refinement and dedication. At our core, we are about making things
              better and as perfect as they can be.
            </p>
          </div>
          <div className='col-span-1'>
            <ArrowRightIcon className='text-white w-8 h-8' />
          </div>
          <div className='col-span-1'>
            <Image
              alt='Craftsmanship'
              className='w-full h-auto'
              height='200'
              src='/blue.jpeg'
              style={{
                aspectRatio: '200/200',
                objectFit: 'cover',
              }}
              width='200'
            />
          </div>
          <div className='col-span-2'>
            <h3 className='text-lg font-semibold'>CRAFTSMANSHIP / CEO</h3>
            <p className='text-xs md:text-base lg:text-xl'>
              We believe in the value of craftsmanship, which is why we invest
              in the best professionals in the field. Our CEO, with his expert
              eye, ensures that every product is faultless.
            </p>
          </div>

          <div className='col-span-1'>
            <Image
              alt='Materials'
              className='w-full h-auto'
              height='200'
              src='/blue.jpeg'
              style={{
                aspectRatio: '200/200',
                objectFit: 'cover',
              }}
              width='200'
            />
          </div>

          <div className='col-span-3 grid grid-cols-4 gap-4 mt-4'>
            <div className='col-span-1'>
              <h3 className='text-lg font-semibold'>MATERIALS</h3>
              <p className='text-xs md:text-base lg:text-xl'>
                Premium materials are pivotal in our approach to design. We
                source only the finest leathers and textiles that contribute to
                the longevity and beauty of our products.
              </p>
            </div>
            <div>
              <Image
                alt='Design / Functionality'
                className='w-full h-auto'
                height='200'
                src='/blue.jpeg'
                style={{
                  aspectRatio: '200/200',
                  objectFit: 'cover',
                }}
                width='200'
              />
            </div>

            <div>
              <Image
                alt='Favorite'
                className='w-full h-auto'
                height='200'
                src='/blue.jpeg'
                style={{
                  aspectRatio: '200/200',
                  objectFit: 'cover',
                }}
                width='200'
              />
            </div>
            <div>
              <Image
                alt='Leather'
                className='w-full h-auto'
                height='200'
                src='/blue.jpeg'
                style={{
                  aspectRatio: '200/200',
                  objectFit: 'cover',
                }}
                width='200'
              />
            </div>
          </div>
        </div>
      </div>
      <section className='max-w-7xl mx-auto grid gap-16' id='services'>
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
      </section>

      <section className='max-w-7xl mx-auto grid gap-2 md:gap-4 sm:grid-cols-3 lg:px-6 lg:gap-12 mt-8'>
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
      </section>
    </main>
  );
}

function ArrowRightIcon(props: any) {
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
