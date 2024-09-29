import ProjectItem from '@/components/ProjectItem';
import {
  ButtonsItemProp,
  ImageProp,
  DescriptionContentItemProp,
  ProjectItemsProp,
} from '@/sanity/lib/types';

interface ProjectDataProp {
  data: {
    title: string;
    section_id?: string;
    eyebrow: string;
    description?: DescriptionContentItemProp[];
    projectItems?: ProjectItemsProp[];
    buttons?: ButtonsItemProp[];
    image?: ImageProp;
  };
}

export default function Project({ data }: ProjectDataProp) {
  const { projectItems, title, section_id } = data;
  return (
    <div
      id={section_id}
      className="flex flex-col justify-center items-center"
    >
      {title && <h2 className="font-bold text-4xl">{title}</h2>}
      {projectItems &&
        projectItems.map((item, index: number) => {
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
