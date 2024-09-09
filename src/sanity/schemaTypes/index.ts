import { type SchemaTypeDefinition } from 'sanity';
import { callToActionType } from './callToActionType';
import { formType } from './formType';
import { heroType } from './heroType';
import { imageGalleryType } from './imageGalleryType';
import { pageType } from './pageType';
import { textWithIllustrationType } from './textWithIllustrationType';
import { videoType } from './videoType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    heroType,
    callToActionType,
    textWithIllustrationType,
    imageGalleryType,
    formType,
    videoType,
  ],
};
