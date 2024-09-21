export interface HeroType {
  heading: string;
  _type: string;
  tagline: string;
  _key: string;
}

export interface textWithIllustration {
  _key: string;
  excerpt: string;
  heading: string;
  _type: string;
  tagline: string;
}

export interface callToActionType {
  _key: string;
  title: string;
  link: string;
}

export interface formType {
  _key: string;
  label: string;
  heading: string;
  form: string;
}

export interface imageGalleryType {
  _key: string;
  images: {
    asset: {
      _ref: string;
    };
  }[];
}

export interface videoType {
  _key: string;
  videoLabel: string;
  url: string;
}

export interface PageBuilderType {
  _id: string;
  _type: string;
  title: string;
  slug: string;
  pageBuilder: (
    | HeroType
    | textWithIllustration
    | callToActionType
    | formType
    | imageGalleryType
    | videoType
  )[];
}
