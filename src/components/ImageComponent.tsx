import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export default function ImageComponent({
  image,
  widthOverride,
  heightOverride,
}: {
  image: SanityImageSource;
}) {
  const { asset } = image;

  const width = widthOverride || asset.width || 800;
  const height = heightOverride || asset.height || 600;

  return (
    <Image
      className="h-full"
      src={urlFor(image).url()}
      alt="Sanity Image"
      style={{ objectFit: 'cover' }}
      width={width}
      height={height}
    />
  );
}
