import React from 'react'

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl">Page not found</p>
      <p className="text-lg mt-2">
        Oops! The page you are looking for does not exist.
      </p>
    </div>  )
}

export default PageNotFound