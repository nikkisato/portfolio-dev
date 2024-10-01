import ButtonLink from '@/components/ButtonLink';
import ImageComponent from '@/components/ImageComponent';
import { ButtonsItemProp, DescriptionContentItemProp, ImageProp } from '@/sanity/lib/types';

interface MissionStatementProps {
  missionStatement: {
    heading: string;
    content: DescriptionContentItemProp[];
    buttons: ButtonsItemProp[];
    image: ImageProp;
  };
}

export default function MissionStatement({ missionStatement }: MissionStatementProps) {
  const { heading, content, buttons, image } = missionStatement;

  return (
    <div className="container space-y-4">
      <h3 className="font-bold sr-only">{heading}</h3>
      {image && (
        <ImageComponent
          image={image}
          widthOverride={100}
          heightOverride={100}
        />
      )}
      <div>
        {content &&
          content.map((desc, index) => {
            const childText = desc.children[0].text;
            const childMark = desc.children[0].marks?.[0];

            // Handling text formatting (strong, emphasis)
            if (childMark) {
              switch (childMark) {
                case 'strong':
                  return <strong key={index}>{childText}</strong>;
                case 'em':
                  return <em key={index}>{childText}</em>;
                case 'underline':
                  return <u key={index}>{childText}</u>;
                case 'strike-through':
                  return <s key={index}>{childText}</s>;
                default:
                  return <span key={index}>{childText}</span>;
              }
            }

            // Handling list items
            if (desc.listItem === 'bullet') {
              return (
                <ul key={index}>
                  {desc.children.map((child, idx) => (
                    <li key={idx}>{child.text}</li>
                  ))}
                </ul>
              );
            }

            // Handling different styles (headings, paragraphs)
            switch (desc.style) {
              case 'h1':
                return <h1 key={index}>{childText}</h1>;
              case 'h2':
                return <h2 key={index}>{childText}</h2>;
              case 'h3':
                return <h3 key={index}>{childText}</h3>;
              case 'h4':
                return <h4 key={index}>{childText}</h4>;
              case 'h5':
                return <h5 key={index}>{childText}</h5>;
              case 'h6':
                return <h6 key={index}>{childText}</h6>;
              case 'normal':
                return <p key={index}>{childText}</p>;
              default:
                return <p key={index}>{childText}</p>;
            }
          })}
      </div>
      <div>
        <ButtonLink
          buttons={buttons}
          mobileDirection="row"
          mobileSpacing="horizontal"
          desktopDirection="row"
          desktopSpacing="horizontal"
        />
      </div>
    </div>
  );
}
