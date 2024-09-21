import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';

interface ImageProp {
  image: {
    asset: {
      _ref: string;
      _id?: string;
      url?: string;
      width?: number;
      height?: number;
    };
  };
  widthOverride?: number;
  heightOverride?: number;
}

export default function ImageComponent({ image, widthOverride, heightOverride }: ImageProp) {
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
