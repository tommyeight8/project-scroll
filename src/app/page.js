'use client'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';

import { FaBars } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="page-content hero">
//       <h1>
//         Index<sup>(01)</sup>
//       </h1>
//     </div>
//   );
// }
export default function Home() {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#intro-slider', {
        xPercent: '-100',
        duration: 1.3,
        delay: .3
      }).from(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '+=30',
        stagger: .5
      }).to(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '-=30',
        delay: .3,
        stagger: .5
      }).to('#intro-slider', {
        xPercent: '-100',
        duration: 1.3
      }).from('#welcome', {
        opacity: 0,
        duration: .5
      })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative" ref={comp}>
      <div 
      id='intro-slider'
      className="h-screen p-10 bg-gray-50 absolute top-0
      left-0 z-10 w-full flex flex-col tracking-tight gap-10">
        <h1 className="text-9xl" id='title-1'>Blankers</h1>
        <h1 className="text-9xl" id='title-2'>Skwezed</h1>
        <h1 className="text-9xl" id='title-3'>Litto</h1>
      </div>
      <div className="h-screen bg-gray-950 flex justify-center place-items-center">
        <h1 className="text-9xl text-white font-bold to-gray-100" id='welcome'>
          Welcome
        </h1>
      </div>
    </div>
  );
}

