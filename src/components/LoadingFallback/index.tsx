import React from 'react'

type LoadingFallbackProps = {
  asOverlay?: boolean
  fullscreen?: boolean
}

const LoadingFallback = (props: LoadingFallbackProps) => {
  const { fullscreen } = props
  console.log("fullscreen", fullscreen);
  return (
    <div>Loading...</div>
  )
}

export default LoadingFallback;