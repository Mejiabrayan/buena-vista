import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Index() {
  const phrase =
    'Crafting timeless digital experiences with a focus on innovation and functional beauty.';
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={`${styles.description} w-full`}>
      <div className={styles.body}>
        <p>
          {phrase.split(' ').map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}

// export default function Description() {
//   const phrase =
//     'Focused on timeless design, our products are distinguishable by their sophisticated simplicity and dedicated craftsmanship. They are designed to outlive trends and deliver functional beauty that complements your individual expression';
//   const description = useRef(null);
//   const isInView = useInView(description);

//   return (
//     <div className='grid grid-cols-3 gap-4'>
//       <div className='col-span-3'>
//         <h2 className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#598CB1] to-blue-100 font-mono'>
//           OUR PHILOSOPHY
//         </h2>
//       </div>
//       <div className='col-span-2'>
//         <p>
//           {phrase.split(' ').map((word, index) => {
//             return (
//               <span key={index} className='text-xs md:text-base lg:text-xl'>
//                 <motion.span
//                   variants={slideUp}
//                   custom={index}
//                   animate={isInView ? 'open' : 'closed'}
//                   key={index}
//                 >
//                   {word}
//                 </motion.span>
//               </span>
//             );
//           })}
//         </p>
//       </div>
//       <div className='col-span-1'>
//         <motion.p
//           variants={opacity}
//           animate={isInView}
//           className='text-xs md:text-base lg:text-xl'
//         >
//           Pioneering designs and innovative business models are our foundation.
//           Distinguished by a fusion concept of functionality as design, our
//           products embody a lifetime of cultivated elegance and originality.
//         </motion.p>
//       </div>
//       <div className='col-span-1'>
//         <h3 className='text-lg font-semibold'>RESEARCH</h3>
//         <p className='text-xs md:text-base lg:text-xl'>
//           All good products are the result of a continuous process of refinement
//           and dedication. At our core, we are about making things better and as
//           perfect as they can be.
//         </p>
//       </div>
//       <div className='col-span-1'>
//         <ArrowRightIcon className='text-white w-8 h-8' />
//       </div>
//       <div className='col-span-1'>
//         <Image
//           alt='Craftsmanship'
//           className='w-full h-auto'
//           height='200'
//           src='/blue.jpeg'
//           style={{
//             aspectRatio: '200/200',
//             objectFit: 'cover',
//           }}
//           width='200'
//         />
//       </div>
//       <div className='col-span-2'>
//         <h3 className='text-lg font-semibold'>CRAFTSMANSHIP / CEO</h3>
//         <p className='text-xs md:text-base lg:text-xl'>
//           We believe in the value of craftsmanship, which is why we invest in
//           the best professionals in the field. Our CEO, with his expert eye,
//           ensures that every product is faultless.
//         </p>
//       </div>

//       <div className='col-span-1'>
//         <Image
//           alt='Materials'
//           className='w-full h-auto'
//           height='200'
//           src='/blue.jpeg'
//           style={{
//             aspectRatio: '200/200',
//             objectFit: 'cover',
//           }}
//           width='200'
//         />
//       </div>

//       <div className='col-span-3 grid grid-cols-4 gap-4 mt-4'>
//         <div className='col-span-1'>
//           <h3 className='text-lg font-semibold'>MATERIALS</h3>
//           <p className='text-xs md:text-base lg:text-xl'>
//             Premium materials are pivotal in our approach to design. We source
//             only the finest leathers and textiles that contribute to the
//             longevity and beauty of our products.
//           </p>
//         </div>
//         <div>
//           <Image
//             alt='Design / Functionality'
//             className='w-full h-auto'
//             height='200'
//             src='/blue.jpeg'
//             style={{
//               aspectRatio: '200/200',
//               objectFit: 'cover',
//             }}
//             width='200'
//           />
//         </div>

//         <div>
//           <Image
//             alt='Favorite'
//             className='w-full h-auto'
//             height='200'
//             src='/blue.jpeg'
//             style={{
//               aspectRatio: '200/200',
//               objectFit: 'cover',
//             }}
//             width='200'
//           />
//         </div>
//         <div>
//           <Image
//             alt='Leather'
//             className='w-full h-auto'
//             height='200'
//             src='/blue.jpeg'
//             style={{
//               aspectRatio: '200/200',
//               objectFit: 'cover',
//             }}
//             width='200'
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
