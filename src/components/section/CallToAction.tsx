import { ButtonsItemProp, DescriptionContentItemProp } from '@/sanity/lib/types';
import BlockContent from '../BlockContent';
import ButtonLink from '../ButtonLink';

interface CallToActionProps {
  data: {
    eyebrow: string;
    heading: string;
    content: DescriptionContentItemProp[];
    buttons: ButtonsItemProp[];
  };
}
export default function CallToAction({ data }: CallToActionProps) {
  const { heading, content, buttons } = data;

  return (
    <div className="flex flex-col justify-center items-center space-y-10 py-20">
      <h2 className="font-bold text-4xl">{heading && heading}</h2>
      <div>{data && <BlockContent data={content} />}</div>
      <div className="flex items-center">
        {buttons && (
          <ButtonLink
            buttons={buttons}
            spacing="horizontal"
            direction="row"
            paddingButton={true}
          />
        )}
      </div>
    </div>
  );
}
