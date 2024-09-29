import { type SchemaTypeDefinition } from 'sanity';
import { callToActionType } from './callToActionType';
import { formType } from './formType';
import { heroType } from './heroType';
import { imageGalleryType } from './imageGalleryType';
import { pageType } from './pageType';
import { textWithIllustrationType } from './textWithIllustrationType';
import { videoType } from './videoType';
import { headerType } from './headerType';
import { buttonLink } from './buttonLink';
import { footerType } from './footerType';
import { projectSection } from './projectSection';

import { blockContent } from './blockContent';
import { featureSection } from './featureSection';
import { newsletterType } from './newsletter';
import { missionStatementType } from './missionStatement';
import { siteInfoType } from './siteInfo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    heroType,
    callToActionType,
    textWithIllustrationType,
    imageGalleryType,
    formType,
    videoType,
    buttonLink,
    headerType,
    footerType,
    projectSection,
    blockContent,
    featureSection,
    newsletterType,
    missionStatementType,
    siteInfoType,
  ],
};
