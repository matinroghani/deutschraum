import { Moon } from 'lucide-react'
import React from 'react'

export default function ChangeTheme() {
  return (
    <button className='
        text-(--color-text)
        transition-colors
        duration-200
        hover:bg-(--color-bg-secondary)
        p-2
        rounded-full'>
        <Moon size={20}/>
    </button>
  )
}
