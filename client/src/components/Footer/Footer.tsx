import React from 'react'
type FooterProps = {
Status : {
    counter:number,
    doneCounter:number,
    remCounter:number
  }
}
const Footer = ({Status}:FooterProps) => {
  return (
    <div className='fixed sticky z-50 bg-slate-200 bottom-0 w-full p-4 flex flex-row '>
        <div className="flex flex-row gap-2 items-center justify-between w-full">
        <h1 className="text-2xl font-bold text-sky-700 dark:text-sky-300">Your To-Do List</h1>
        <div className="flex flex-row gap-2 items-center">
          <abbr className="p-2 rounded bg-white dark:bg-slate-400" title="Tasks Number">
            <i className="fa-solid fa-hashtag"></i> <span id="tasksnumber">{Status.counter}</span>
          </abbr>
          <abbr className="p-2 rounded bg-orange-100 dark:bg-orange-400" title="Active Tasks">
            <i className="fa-regular fa-clock"></i> <span id="activenumber">{Status.remCounter}</span>
          </abbr>
          <abbr className="p-2 rounded bg-green-100 dark:bg-green-400" title="Completed Tasks">
            <i className="fa-solid fa-check"></i> <span id="donenumber">{Status.doneCounter}</span>
          </abbr>
        </div>
      </div>
    </div>
  )
}

export default Footer