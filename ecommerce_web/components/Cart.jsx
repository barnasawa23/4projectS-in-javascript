"use client";

import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (
    <div>
        <Link className='unstyled-button' href="/cart">
            <i className="fa-solid fa-bag-shopping"></i>
        </Link>
    </div>
  )
}
