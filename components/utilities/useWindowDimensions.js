import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  const { height, width } = window ? {height : window.screen.height, width : window.screen.width} : {height : 0 , width : 0 };

  return {height, width}
}

export const useWindowDimensions = () => {
  const [{height, width}, setScreenDim] = useState({height : 0, width : 0})

  useEffect(() => {
    const resetSize = () => {
      const {height, width} = getWindowDimensions()
      setScreenDim({ height , width })
    }
    resetSize()
    
    window.addEventListener('resize', resetSize);
    return () => window.removeEventListener('resize', resetSize);
  }, [])

  return [height , width]
}
