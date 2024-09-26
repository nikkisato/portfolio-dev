import BlockContent from '@/components/BlockContent';
import ButtonLink from '@/components/ButtonLink';

interface ProjectItemProp {
  data: {
    heading: string;
    description: Array<{
      _key: string;
      style: string;
      listItem?: string;
      children: Array<{
        text: string;
        marks?: Array<string>;
      }>;
    }>;
    buttons: Array<{
      text: string;
      url: string;
      style: string;
      isExternal: boolean;
      _key: string;
    }>;
  };
}

export default function ProjectItem({ data }: ProjectItemProp) {
  const { heading, description, buttons } = data;
  return (
    <div>
      <h2>{heading}</h2>
      <BlockContent data={description} />
      <div>
        <ButtonLink
          buttons={buttons}
          direction="row"
          spacing="horizontal"
        />
      </div>
    </div>
  );
}
