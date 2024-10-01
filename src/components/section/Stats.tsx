import BlockContent from '@/components/BlockContent';
import { ButtonsItemProp, DescriptionContentItemProp } from '@/sanity/lib/types';
import Chip from '@/components/Chip';

interface StatsProps {
  data: {
    stat_type?: string;
    _key: string;
    eyebrow?: string;
    title?: string;
    content?: DescriptionContentItemProp[];
    section_id?: string;
    statItem?: {
      heading: string;
      chips?: string;
      buttons?: ButtonsItemProp[];
      _key?: string;
    }[];
  };
}

function extractChips(chips?: string): string[] {
  if (!chips) return [];
  return chips
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function StatsSection({ data }: StatsProps) {
  const { eyebrow, content, title, statItem } = data;

  console.log('stats', statItem);
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col justify-center items-center py-10">
        {title && <h2 className="font-bold text-4xl">{title}</h2>}
        {eyebrow && <span>{eyebrow}</span>}
        {content && <BlockContent data={content} />}
      </div>

      {statItem && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10	md:gap-y-0">
          {statItem.map((item) => {
            const chips = extractChips(item.chips);

            console.log('chips', chips);
            return (
              <div key={item._key}>
                <h3 className="text-center font-bold text-2xl">{item.heading}</h3>
                <div className="flex flex-wrap justify-center items-center mx-auto space-x-5 max-w-lg">
                  {chips.map((chip) => (
                    <Chip
                      key={chip}
                      chip={chip}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
