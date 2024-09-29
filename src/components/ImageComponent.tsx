import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import { ImageComponentProps } from '@/sanity/lib/types';

export default function ImageComponent({
  image,
  widthOverride,
  heightOverride,
}: ImageComponentProps) {
  const { asset } = image;

  // Handle case where asset is undefined
  if (!asset) {
    return <div>No image available</div>; // Or render a placeholder image
  }

  const width = widthOverride || asset.width || 800;
  const height = heightOverride || asset.height || 600;

  return (
    <Image
      className="h-full"
      src={urlFor(asset).url()} // This is safe now
      alt={image.alt || 'Sanity Image'} // Use image.alt if provided
      style={{ objectFit: 'cover' }}
      width={width}
      height={height}
    />
  );
}
