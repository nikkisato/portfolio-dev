import React from 'react';

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
          const renderChildren = (children: { text: string; marks?: string[] | undefined }[]) => {
            return children.map((child, childIndex) => {
              let formattedText: React.ReactNode = child.text;

              if (child.marks) {
                child.marks.forEach((mark) => {
                  switch (mark) {
                    case 'strong':
                      formattedText = <strong key={mark}>{formattedText}</strong>;
                      break;
                    case 'em':
                      formattedText = <em key={mark}>{formattedText}</em>;
                      break;
                    case 'underline':
                      formattedText = <u key={mark}>{formattedText}</u>;
                      break;
                    case 'strike-through':
                      formattedText = <s key={mark}>{formattedText}</s>;
                      break;
                    default:
                      formattedText = <span key={mark}>{formattedText}</span>;
                  }
                });
              }

              return <span key={childIndex}>{formattedText}</span>;
            });
          };

          if (desc.listItem === 'bullet') {
            return (
              <ul key={index}>
                {desc.children.map((child, idx) => (
                  <li key={idx}>{renderChildren([child])}</li>
                ))}
              </ul>
            );
          }

          const content = renderChildren(desc.children);

          switch (desc.style) {
            case 'h1':
              return <h1 key={index}>{content}</h1>;
            case 'h2':
              return <h2 key={index}>{content}</h2>;
            case 'h3':
              return <h3 key={index}>{content}</h3>;
            case 'h4':
              return <h4 key={index}>{content}</h4>;
            case 'h5':
              return <h5 key={index}>{content}</h5>;
            case 'h6':
              return <h6 key={index}>{content}</h6>;
            case 'normal':
            default:
              return <p key={index}>{content}</p>;
          }
        })}
    </div>
  );
}
