interface CallToActionProps {
  data: {
    heading: string;
    content: string;
    buttons: Array<{
      text: string;
      url: string;
      style: string;
      isExternal: boolean;
      _key: string;
    }>;
  };
}
export default function CallToAction({ data }: CallToActionProps) {
  const { heading, content, buttons } = data;
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
      <ul className="flex space-x-10">
        {buttons.map((button) => (
          <li key={button._key}>
            <a
              href={button.url}
              className={`${button.style} p-2`}
              target={button.isExternal ? '_blank' : '_self'}
              rel={button.isExternal ? 'noopener noreferrer' : undefined}
            >
              {button.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
