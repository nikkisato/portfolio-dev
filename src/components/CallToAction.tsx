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

  console.log(data);
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
   
    </div>
  );
}
