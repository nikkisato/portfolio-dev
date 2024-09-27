export interface BaseSectionProp {
  _key: string;
  _id: string;
}

export interface BaseDataSectionProp {
  _key: string;
  _id: string;
}

export interface ButtonsItemProp extends BaseSectionProp {
  text: string;
  url: string;
  style: string;
  isExternal: boolean;
  _key: string;
  button_link_type: string;
}

export interface DescriptionContentItemProp {
  _key: string;
  style: string;
  listItem?: string;
  children: Array<{
    text: string;
    marks?: Array<string>;
  }>;
}

export interface ProjectItemsProp {
  projectItems: Array<{
    eyebrow: string;
    heading: string;
    project_type: string;
    projectImage: {
      asset: {
        _ref: string;
      };
      alt: string;
    };
    description: Array<{
      _key: string;
      style: string;
      listItem?: string;
      children: Array<{
        text: string;
        marks?: Array<string>;
      }>;
    }>;
  }>;
}

export interface ImageComponentProp {
  image: {
    asset: {
      _ref: string;
      _id?: string;
      url?: string;
      width?: number;
      height?: number;
    };
  };
  widthOverride?: number;
  heightOverride?: number;
}

export interface ProjectImageProp {
  projectImage: {
    asset: {
      _ref: string;
    };
  };
}

export interface ImageProp {
  image: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
}

export interface FeatureItemProp {
  featureItems: Array<{
    heading: string;
    icon?: string;
    description: DescriptionContentItemProp[];
    featureImage: ImageProp[];
    buttons: ButtonsItemProp[];
    image: ImageProp[];
    _key: string;
  }>;
}

export interface HeroSection extends BaseSectionProp {
  _type: 'hero';
  eyebrow: string;
  heading: string;
  content: string;
  backgroundImage: string;
  ShowTypewriter: boolean;
  buttons: ButtonsItemProp[];
}

export interface ProjectSection extends BaseSectionProp {
  _type: 'projects';
  _ref: string;
  title: string;
  eyebrow: string;
  description?: DescriptionContentItemProp[];
  projectItems: ProjectItemsProp[];
  buttons?: ButtonsItemProp[];
  projectImage: ProjectImageProp[];
}

export interface CallToActionSection extends BaseSectionProp {
  _type: 'callToAction';
  heading: string;
  content?: DescriptionContentItemProp[];
  eyebrow: string;
  buttons: ButtonsItemProp[];
}

export interface textWithIllustrationSection extends BaseSectionProp {
  _type: 'textWithIllustration';
  eyebrow: string;
  heading: string;
  content: string;
  image: ImageProp[];
  buttons: ButtonsItemProp[];
  image_alignment: 'left' | 'right';
  text_alignment: 'center' | 'left' | 'right';
}

export interface FeatureSection extends BaseSectionProp {
  _type: 'feature';
  feature_type: string;
  _key: string;
  eyebrow: string;
  title: string;
  image: ImageProp[];
  content: DescriptionContentItemProp[];
  featureItems: FeatureItemProp[];
}

export type Section =
  | HeroSection
  | ProjectSection
  | CallToActionSection
  | textWithIllustrationSection
  | FeatureSection;
