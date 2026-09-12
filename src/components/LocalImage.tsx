import React, { useState } from 'react';
import { getLocalImagePath, LOCAL_PLACEHOLDERS } from '../assets/assetManager';

export type AssetCategory = keyof typeof LOCAL_PLACEHOLDERS;

export interface LocalImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'category'> {
  src: string;
  alt: string;
  category?: AssetCategory;
  fallbackSrc?: string;
  priority?: boolean;
}

export const LocalImage: React.FC<LocalImageProps> = ({
  src,
  alt,
  category = 'services',
  fallbackSrc,
  priority = false,
  className = '',
  loading,
  ...rest
}) => {
  const cat: AssetCategory = (category as AssetCategory) || 'services';
  const defaultFallback = fallbackSrc || LOCAL_PLACEHOLDERS[cat] || LOCAL_PLACEHOLDERS.services;
  const initialValidatedSrc = getLocalImagePath(src, cat);

  const [currentSrc, setCurrentSrc] = useState<string>(initialValidatedSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError) {
      console.warn(`[LocalImage] Failed to load image: ${src}. Falling back to ${defaultFallback}`);
      setHasError(true);
      setCurrentSrc(defaultFallback);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt || 'تصویر خدمات ایرسا سیمرغ'}
      loading={priority ? 'eager' : (loading || 'lazy')}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-90'} ${className}`}
      {...rest}
    />
  );
};
