import React, { useState, useEffect } from 'react'

export interface ICommonImageProps {
  src: string
  fallbackSrc?: string
  alt?: string
  height?: string
  width?: string
  [propName: string]: any // This is for restProps
}

const CommonImage: React.FC<ICommonImageProps> = (props) => {
  const { height, width, src, alt, fallbackSrc, ...restProps } = props

  const [imageSource, setImageSource] = useState('')

  const [errored, setError] = useState(false)

  useEffect(() => {
    setImageSource(src)
  }, [src])

  const setImageError = () => {
    if (!errored && fallbackSrc) {
      setImageSource(fallbackSrc)
      setError(true)
    }
  }

  return (
    <img
      src={imageSource}
      alt={alt ? alt : 'Image'}
      style={{ height, width }}
      {...restProps}
      onError={() => setImageError()}
    />
  )
}

export default CommonImage
