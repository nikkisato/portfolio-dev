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
  return (
    <div>
      <h2>Hero Component</h2>
      <p>{data.eyebrow}</p>
      <h2>{data.heading}</h2>
      <div>{data.content}</div>
    </div>
  );
}
