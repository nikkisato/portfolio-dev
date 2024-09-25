// interface FeatureProps {
//   heading: string;
//   content: string;
//   featureItems: Array<{
//     eyebrow: string;
//     icon: string;
//     heading: string;
//     description: string;
//     featureImage: { asset: { _ref: string }; alt: string };
//   }
// }

export default function Feature({ data }) {
  const { heading, content, buttons } = data;
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
}
