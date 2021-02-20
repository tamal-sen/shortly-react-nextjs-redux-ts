import React, { useState, useEffect } from 'react'

export interface ICommonImageProps {
  src: string
  fallbackSrc?: string
  alt?: string
  height?: string
  [propName: string]: any // This is for restProps
}

const CommonImage: React.FC<ICommonImageProps> = (props) => {
  const { height, src, alt, fallbackSrc, ...restProps } = props

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
      style={{ height }}
      {...restProps}
      onError={() => setImageError()}
    />
  )
}

export default CommonImage
