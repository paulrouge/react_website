import React from 'react'
import { ReactComponent as PcSvg } from '../../media/pc-monitor.svg'
import { ReactComponent as FileSvg } from '../../media/files.svg'
import { useInView, InView } from 'react-intersection-observer';

const Network = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1,
      });
      
    return (
        <div ref={ref} className={`${inView ? 'fade-in' : 'fade-out'} flex justify-center`}>  
            <div id="network"></div>
            <div className= 'w-11/12 md:w-10/12 h-full bg-yellow-300 items-center mt-20 p-4 md:p-8 justify-between rounded'>
                <div className = 'flex flex-col md:flex-row items-center '>    
                    <div className='md:w-1/2'>
                    <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>A blockchain:</h1>
                    <p className= 'font-mono md:text-2xl text-gray-800 p-4 md:m-8'>Spooky word right? Let's forget it. When you see the word 'blockchain'
                    just think of a network. Just like the internet or your wifi at home.<br></br><br></br>
                    You can think of a crypto-currency as a network of computers all around the world connected to each other and having only one file. One shared ledger, like 
                    an Excel sheet.<br></br><br></br>On this ledger there are balances kept of every address.<br></br><br></br>For example:<br></br><br></br>
                    <span className='text-gray-800 font-mono underline leading-8'>Address 1 has 50 coins<br></br>
                    Address 2 has 100 coins<br></br>
                    Address 3 has 80 coins<br></br><br></br></span>
                    <span className='md:block hidden font-mono font-bold'>That's it! Just a bunch of computers all having a copy of the same Excel sheet. </span>
                    </p>
                    </div>
                    <div className='md:w-1/2'>
                    <div className='grid grid-cols-3 gap-6'>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40'/></div>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40'/></div>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40'/></div>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40 '/></div>
                    <div className='flex justify-center fill-current text-gray-800'><FileSvg className='w-40 h-20 md:h-60'/></div>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40'/></div>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40'/></div>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40'/></div>
                    <div className='flex justify-center hover:animate-wiggle fill-current text-gray-800'><PcSvg className='w-20 md:w-40'/></div>     
                    </div>
                    </div>
                    <p className='mt-20 md:hidden mt-6 visible font-mono font-bold text-gray-800'>
                    That's it! Just a bunch of computers all having a copy of the same Excel sheet.
                    </p>  
                    
                </div>
            </div>
        </div>
    )
}

export default Network
