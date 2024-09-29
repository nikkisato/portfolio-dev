import BlockContent from '@/components/BlockContent';
import ButtonLink from '@/components/ButtonLink';
import ImageComponent from '@/components/ImageComponent';
import { ButtonsItemProp, DescriptionContentItemProp, ImageProp } from '@/sanity/lib/types';

interface ProjectItemProp {
  data: {
    heading: string;
    eyebrow: string;
    project_type: string;
    description?: DescriptionContentItemProp[];
    buttons?: ButtonsItemProp[];
    image?: ImageProp;
  };
}

export default function ProjectItem({ data }: ProjectItemProp) {
  const { eyebrow, heading, description, buttons, image, project_type } = data;

  const renderItem = () => {
    switch (project_type) {
      case 'image_on_left_content_on_right':
        return (
          <div className="grid lg:grid-cols-2 gap-16 py-20">
            <div className="flex flex-col lg:order-2 space-y-4 md:space-y-5 max-w-xl">
              {eyebrow && <span>{eyebrow}</span>}
              {heading && <h3 className="font-bold text-4xl">{heading}</h3>}

              {description && <BlockContent data={description} />}
              {buttons && (
                <ButtonLink
                  buttons={buttons}
                  direction="row"
                  spacing="horizontal"
                />
              )}
            </div>

            {image && (
              <div className="lg:order-1">
                <ImageComponent image={image} />
              </div>
            )}
          </div>
        );
      case 'image_on_right_content_on_left':
        return (
          <div className="grid lg:grid-cols-2 gap-16 py-20">
            <div className="flex flex-col space-y-2 md:space-y-5 max-w-xl">
              {eyebrow && <span>{eyebrow}</span>}
              {heading && <h3 className="font-bold text-4xl">{heading}</h3>}

              {description && <BlockContent data={description} />}
            </div>
            {image && (
              <div>
                <ImageComponent image={image} />
              </div>
            )}
            {buttons && (
              <ButtonLink
                buttons={buttons}
                direction="row"
                spacing="horizontal"
              />
            )}
          </div>
        );

      default:
        return <div>Default Project Item content</div>;
    }
  };

  return <>{renderItem()}</>;
}
