import { ButtonsItemProp, DescriptionContentItemProp } from '@/sanity/lib/types';
import BlockContent from '../BlockContent';
import ButtonLink from '../ButtonLink';

interface CallToActionProps {
  data: {
    eyebrow: string;
    heading: string;
    content?: DescriptionContentItemProp[];
    buttons: ButtonsItemProp[];
    section_id?: string;
  };
}
export default function CallToAction({ data }: CallToActionProps) {
  const { heading, content, buttons, section_id } = data;

  return (
    <div
      id={section_id}
      className="flex flex-col justify-center items-center space-y-10 py-20 p-4"
    >
      {heading && <h2 className="font-bold text-4xl">{heading}</h2>}
      {content && (
        <div className="max-w-2xl text-left lg:text-center">
          <BlockContent data={content} />
        </div>
      )}
      {buttons && (
        <div className="flex items-center">
          <ButtonLink
            buttons={buttons}
            mobileDirection="column"
            mobileSpacing="vertical"
            desktopDirection="row"
            desktopSpacing="horizontal"
            paddingButton={true}
          />
        </div>
      )}
    </div>
  );
}
