import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import { ImageComponentProps } from '@/sanity/lib/types';

export default function ImageComponent({
  image,
  widthOverride,
  heightOverride,
}: ImageComponentProps) {
  const { asset } = image;

  if (!asset) {
    return <div>No image available</div>;
  }

  const width = widthOverride || asset.width || 800;
  const height = heightOverride || asset.height || 600;

  return (
    <Image
      className="h-full"
      src={urlFor(asset).url()}
      alt={image.alt || 'Sanity Image'}
      style={{ objectFit: 'contain' }}
      width={width}
      height={height}
    />
  );
}
