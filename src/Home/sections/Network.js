import React from 'react'
import { ReactComponent as PcSvg } from '../../media/pc-monitor.svg'
import { ReactComponent as FileSvg } from '../../media/file_with_lines.svg'


const Network = () => {
    return (
    <>  <div id="network"></div>
        <div className= 'w-10/12 h-full bg-yellow-300 flex justify-center items-center mt-80  p-8 justify between'>
        <div className = 'flex flex-row items-center '>    
            <div className='w-1/2'>
            <h1 className= 'p10 text-6xl font-display text-gray-800 font-bold text-left'>A blockchain:</h1>
            <p className= 'font-mono text-2xl text-gray-800 m-8 p10'>Spooky word right? Let's forget it. When you see the word 'blockchain'
            just think of a network. Just like the internet or your wifi at home.<br></br><br></br>
            You can think of a crypto-currency as a network of computers all around the world connected to each other and having only one file. One shared ledger, like 
            an Excel sheet.<br></br><br></br>On this ledger there are balances kept of every address.<br></br><br></br>For example:<br></br>
            Address 1 has 50 coins,<br></br>
            Address 2 100 coins,<br></br>
            Address 3 has 80 coins<br></br><br></br><br></br><br></br>
            <span className='font-mono font-bold'>That's it! Just a bunch of computers all having a copy of the same Excel sheet. </span>
            </p>
            </div>
            <div className=' w-1/2 '>
               <div className='grid grid-cols-3 gap-2'>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40 '/></div>
               <div className='flex justify-center'><FileSvg className='w-60'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className=' w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40'/></div>     
               </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Network
