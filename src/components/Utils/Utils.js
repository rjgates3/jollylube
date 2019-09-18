import React from 'react'

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />
}

export function Input({ className, ...props }) {
  return (
    <input className={['Input', className].join(' ')} {...props} />
  )
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}


