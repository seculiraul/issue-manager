// import { useEffect, useState } from 'react'

const Sidebar = () => {
  return (
    <div className="relative">
      <div className="flex flex-row p-2 text-black rounded-b-sm justify-start items-center h-7 w-full bg-emerald-500">
        <span className="material-icons cursor-pointer text-black hover:scale-105 hover:text-gray-900 duration-200">
          menu
        </span>
      </div>
      <div className="fixed flex flex-col rounded-md inset-y-0 left-[-100%] lg:w-[200px] md:w-[150px] w-32 bg-emerald-500 duration-700">
        <div class="flex flex-row justify-end px-4 mt-6">
          <label className="cursor-pointer hover:scale-125 duration-200">
            X{' '}
          </label>
        </div>
        <div className="flex flex-col gap-2 p-2 mt-2">
          <span className="p-2 overflow-hidden cursor-pointer duration-300">
            Create new issue
          </span>
          <span className="p-2 cursor-pointer duration-300">
            See all issues
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
