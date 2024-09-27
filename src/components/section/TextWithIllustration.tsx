import ImageComponent from '@/components/ImageComponent';
import { ImageProp } from '@/sanity/lib/types';

interface TextWithIllustrationProps {
  data: {
    heading: string;
    eyebrow: string;
    content: string;
    image: ImageProp[];
    image_alignment: 'left' | 'right';
    text_alignment: 'left' | 'center' | 'right';
  };
}

export default function TextWithIllustration({ data }: TextWithIllustrationProps) {
  const { heading, eyebrow, content, image, image_alignment, text_alignment } = data;

  return (
    <section className="container h-full mx-auto">
      <div className={`flex ${image_alignment === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Image on left or right based on alignment */}
        <div className="w-1/2 textWithImage">
          <ImageComponent image={image} />
        </div>

        <div className="w-1/2">
          <div
            className={`flex flex-col h-full p-6 justify-center ${text_alignment === 'left' ? 'text-left item-left' : text_alignment === 'right' ? 'text-right item-right' : 'text-center items-center'}`}
          >
            {eyebrow && <p>{eyebrow}</p>}
            {heading && <h2>{heading}</h2>}
            {content && <p>{content}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
