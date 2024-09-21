import { sanityFetch } from '../sanity/lib/client';
import ProjectItem from './ProjectItem';
import { PROJECT_QUERY } from '../sanity/lib/queries';

interface ProjectProps {
  data: {
    _ref: string;
  };
}

interface ProjectDataProp {
  heading: string;
  description: Array<string>;
  buttons: Array<string>;
}

export default async function Project({}: ProjectProps) {
  const data = await sanityFetch({ query: PROJECT_QUERY });
  if (!data) return null;

  return (
    <div>
      {data.map((item: ProjectDataProp, index: number) => {
        return (
          <ProjectItem
            key={index}
            data={item}
          />
        );
      })}
    </div>
  );
}
