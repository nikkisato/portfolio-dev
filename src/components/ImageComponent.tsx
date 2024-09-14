import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export default function ImageComponent({ image }: { image: SanityImageSource }) {
  const { asset } = image;

  const width = asset.width || 800;
  const height = asset.height || 600;

  return (
    <Image
      src={urlFor(image).url()}
      alt="Sanity Image"
      style={{ objectFit: 'cover' }}
      width={width}
      height={height}
    />
  );
}
