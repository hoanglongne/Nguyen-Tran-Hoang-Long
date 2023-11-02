import React from 'react'

function Title({children}) {
  return (
    <div className="uppercase font-bold text-md md:text-2xl lg:text-4xl">{children}</div>
  )
}

export default Title