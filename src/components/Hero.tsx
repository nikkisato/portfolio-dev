interface HeroProps {
  data: {
    eyebrow: string;
    heading: string;
    content: string;
    backgroundImage: string;
    buttons: Array<{
      text: string;
      link: string;
    }>;
  };
}

export default function Hero({ data }: HeroProps) {
  const { eyebrow, heading, content } = data;
  return (
    <div className="container h-96	mx-auto">
      <div className="flex items-center justify-center flex-col h-full">
        <p>{eyebrow}</p>
        <h2>{heading}</h2>
        <div>{content}</div>
      </div>
    </div>
  );
}
