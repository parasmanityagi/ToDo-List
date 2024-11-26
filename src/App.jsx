import React, { useState } from 'react'

const App = () => {

  let [toDoListitem, setToDoListItem] = useState([])

  let [itemName, setItemName] = useState();


  // item add to todo list
  let addItemToToDoList = (item) => {
    if (item && item !== '' && item !== ' ') {
      setToDoListItem(prev => [
        ...prev,
        { 'item': item }
      ]);
    }
    setItemName('')
  };



  // item remove from todo list
  let removeItemFromToDoList = (name) => {
    let todo = toDoListitem.filter((data) => name != data.item)

    setToDoListItem(todo)
  }


  return (
    <div className='w-full min-h-screen bg-sky-400 flex items-center justify-center'>

      {/* todo list */}
      <section className='w-96 shadow-lg bg-white rounded-lg p-4'>

        {/* todo list search box and add icon container */}
        <div className='flex items-center justify-between relative mb-4'>
          <input type="text" name='item' value={itemName} onChange={(e) => setItemName(e.target.value)}
            className='border-b-2 outline-none p-1 py-2 pr-10 w-full' placeholder='Enter Item Name' />
          <i
            onClick={() => addItemToToDoList(itemName)}
            className='absolute right-0 top-1 bi bi-plus-lg cursor-pointer bg-sky-400 hover:bg-sky-600 hover:text-black rounded-full px-1.5 py-0.5 text-white' />
        </div>

        {/* todo list item cintainer */}
        <ul className='list-none'>
          {
            toDoListitem.map((data, idx) => (
              <li key={idx}
                className='flex justify-between itemc-center border-b-[1px] border-b-black mb-3 pb-1'>

                <span className='truncate'>
                  {data.item}
                </span>


                {/* remove item button */}
                <i
                  onClick={() => removeItemFromToDoList(data.item)}
                  className='bi bi-x-lg cursor-pointer bg-red-400 hover:bg-red-600 hover:text-black rounded-full px-1.5 py-0.5 text-white' />
              </li>
            ))
          }
        </ul>


      </section>
    </div>
  )
}

export default App