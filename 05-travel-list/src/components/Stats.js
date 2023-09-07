import React from 'react'

const Stats = ({ numItems, packedItems }) => {
  const percentage = Math.floor((packedItems / numItems) * 100);

  return (
    <footer className='stats'>
      {percentage !== 100 && <em>💼 You have {numItems} items on your list, and you already have packed {packedItems} items ({percentage} %)</em>}
    {percentage === 100 && <em>You have got everything ! Ready to go</em>}
    </footer>
  )
}

export default Stats