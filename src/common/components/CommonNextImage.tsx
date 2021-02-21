import React from 'react'
import Image, { ImageProps } from 'next/image'

interface Props {
  src: string
  alt?: string
  width?: string
  height?: string
  objectFit?: ImageProps['objectFit']
  layout?: 'fixed' | 'responsive' | 'intrinsic'
  wider?: boolean
  priority?: boolean
}

export const CommonNextImage = ({
  src,
  alt,
  width,
  height,
  objectFit,
  layout,
  priority,
}: Props) => {
  return (
    <Image
      src={src}
      alt={alt ?? 'Image'}
      width={width ?? 'auto'}
      height={height ?? '100%'}
      layout={layout ?? 'intrinsic'}
      objectFit={objectFit ?? 'none'}
      priority={priority}
    />
  )
}
