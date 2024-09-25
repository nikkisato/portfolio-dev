import { sanityFetch } from '@/sanity/lib/client';
import { PAGE_BUILDER_QUERY } from '@/sanity/lib/queries';
import Hero from '@/components/section/Hero';
import CallToAction from '@/components/section/CallToAction';
import TextWithIllustration from '@/components/section/TextWithIllustration';
import Project from '@/components/section/Project';
import Feature from '@/components/section/Feature';

interface BaseSectionProp {
  _key: string;
  _id: string;
}

interface HeroSection extends BaseSectionProp {
  _type: 'hero';
  eyebrow: string;
  heading: string;
  content: string;
  backgroundImage: string;
  ShowTypewriter: boolean;
  buttons: Array<{
    text: string;
    url: string;
    style: string;
    isExternal: boolean;
    _key: string;
  }>;
}

interface ProjectSection extends BaseSectionProp {
  _type: 'projects';
  _ref: string;
  heading: string;
  description: Array<string>;
  buttons: Array<string>;
}

interface CallToActionSection extends BaseSectionProp {
  _type: 'callToAction';
  heading: string;
  content: string;
  buttons: Array<{
    text: string;
    url: string;
    style: string;
    isExternal: boolean;
    _key: string;
  }>;
}

interface textWithIllustrationSection extends BaseSectionProp {
  _type: 'textWithIllustration';
  eyebrow: string;
  heading: string;
  content: string;
  image: { asset: { _ref: string }; alt: string };
  buttons: Array<{
    text: string;
    url: string;
    style: string;
    isExternal: boolean;
    _key: string;
  }>;
  image_alignment: 'left' | 'right';
  text_alignment: 'center' | 'left' | 'right';
}

interface FeatureSection extends BaseSectionProp {
  _type: 'feature';
  eyebrow: string;
  heading: string;
  content: string;
  featureItems: Array<{
    eyebrow: string;
    icon: string;
    heading: string;
    description: string;
    featureImage: { asset: { _ref: string }; alt: string };
  }>;
}

type Section =
  | HeroSection
  | ProjectSection
  | CallToActionSection
  | textWithIllustrationSection
  | FeatureSection;
export default async function PageBuilder() {
  const data = await sanityFetch({ query: PAGE_BUILDER_QUERY });

  if (!data) return null;

  return (
    <div className="space-y-10">
      {data &&
        data.pageBuilder.map((section: Section) => {
          const key = section._key || section._id || `section-${Math.random()}`;

          switch (section._type) {
            case 'hero':
              return (
                <Hero
                  key={key}
                  data={section}
                />
              );
              break;
            case 'projects':
              return (
                <Project
                  key={key}
                  data={section}
                />
              );
              break;
            case 'callToAction':
              return (
                <CallToAction
                  key={key}
                  data={section}
                />
              );
              break;
            case 'textWithIllustration':
              return (
                <TextWithIllustration
                  key={key}
                  data={section}
                />
              );
              break;
            case 'feature':
              return (
                <Feature
                  key={key}
                  data={section}
                />
              );
            default:
              return null;
          }
        })}
    </div>
  );
}
