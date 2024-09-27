import ProjectItem from '@/components/ProjectItem';
import {
  ButtonsItemProp,
  ProjectImageProp,
  DescriptionContentItemProp,
  ProjectItemsProp,
} from '@/sanity/lib/types';

interface ProjectDataProp {
  data: {
    title: string;
    eyebrow: string;
    description?: DescriptionContentItemProp[];
    projectItems: ProjectItemsProp[];
    buttons?: ButtonsItemProp[];
    projectImage: ProjectImageProp[];
  };
}

export default function Project({ data }: ProjectDataProp) {
  const { projectItems, title } = data;
  return (
    <div className="flex flex-col justify-center items-center">
      {title && <h2 className="font-bold text-4xl">{title}</h2>}
      {projectItems.map((item, index: number) => {
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
