import React from 'react'
import Item from './Item'

const PackingList = ({items , handleDeleteItem,handleToggleItem}) => {
  return (
    <div className='list'>
    <ul>
      {items.map(item => <Item key={item.id} item={item} handleDeleteItem = {handleDeleteItem} handleToggleItem={handleToggleItem}/>)}
    </ul>
    </div>
  )
}

export default PackingList