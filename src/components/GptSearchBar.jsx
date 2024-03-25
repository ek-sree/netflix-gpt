import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector((store)=>store.config.lang)

  return (
    <div className='bg-black pt-[10%] opacity-90'>
        <form className='p-6 m-6 grid grid-cols-12'>
            <input type="text" className='p-4 m-4 col-span-9 text-lg font-medium' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar