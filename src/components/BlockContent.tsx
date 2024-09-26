interface BlockContentProps {
  className?: string;

  data: {
    _key: string;
    style: string;
    listItem?: string | undefined;
    children: { text: string; marks?: string[] | undefined }[];
    _type?: string;
  }[];
}

export default function BlockContent({ data, className }: BlockContentProps) {
  return (
    <div className={className}>
      {data &&
        data.map((desc, index) => {
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

          // Handling description list (dl, dt, dd)
          if (desc._type === 'descriptionList') {
            console.log('HELLO');
            return (
              <dl key={index}>
                {desc.children.map((child, idx) => (
                  <>
                    <dt key={`${desc._key}-dt-${idx}`}>{child.text}</dt>
                    {child.text && (
                      <dd key={`${desc._key}-dd-${idx}`}>
                        {/* Replace with logic to render dd content or use another data field */}
                        {`Description of ${child.text}`}
                      </dd>
                    )}
                  </>
                ))}
              </dl>
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
  );
}
