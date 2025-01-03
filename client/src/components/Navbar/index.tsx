import React from 'react'
import { Menu, Moon, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed, setIsDarkMode} from '@/state'

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)
  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
      <div className='flex items-center gap-8'>
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="h-8 w-8 dark:text-white" />
          </button>
        )}
        <div className='relative flex h-min w-[200px]'>
        </div>
      </div>
      {/*Icon*/}
      <div className='flex items-center'>
        <button onClick={() => dispatch(setIsDarkMode(!isDarkMode))} 
                className = {
                    isDarkMode 
                        ? 'rounded p-2 dark:hover:bg-gray-700' 
                        : 'rounded p-2 hover:bg-gray-100'
        }>{
            isDarkMode ?
                (<Sun className='h-6 w-6 cursor-pointer dark:text-white'></Sun>) 
                : (<Moon className='h-6 w-6 cursor-pointer dark:text-white'></Moon>)
        }</button>
        <Link href='/settings'
        className = {
            isDarkMode 
                ? 'h-min w-min rounded p-2 dark:hover:bg-gray-700' 
                : 'h-min w-min rounded p-2 hover:bg-gray-100'
        }>
            <Settings className='h-6 w-6 cursor-pointer dark:text-white'/>
        </Link>
        <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'></div>
      </div> 
    </div>
  )
}

export default Navbar