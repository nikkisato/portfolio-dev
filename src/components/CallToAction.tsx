interface CallToActionProps {
  data: {
    heading: string;
    content: string;
    button: {
      text: string;
      link: string;
    };
  };
}
export default function CallToAction({ data }: CallToActionProps) {
  const { heading, content, button } = data;
  return (
    <div>
      <h2>Call To Action Component</h2>
      <p>Put your call to action here!</p>
    </div>
  );
}
