import ButtonLink from '@/components/ButtonLink';
import BlockContent from '@/components/BlockContent';
import ImageComponent from '@/components/ImageComponent';
import getIconComponent from '@/components/getIconComponent';
import { ButtonsItemProp, DescriptionContentItemProp, ImageProp } from '@/sanity/lib/types';
interface FeatureProps {
  data: {
    feature_type: string;
    _key: string;
    eyebrow: string;
    title: string;
    image: {
      asset: {
        _ref: string;
      };
      alt: string;
    };
    content: DescriptionContentItemProp[];
    featureItems: Array<{
      heading: string;
      icon?: string;
      description: DescriptionContentItemProp[];
      featureImage: {
        asset: {
          _ref: string;
        };
        alt: string;
      };
      buttons: ButtonsItemProp[];
      image: ImageProp[];
      _key: string;
    }>;
  };
}
export default function Feature({ data }: FeatureProps) {
  const { eyebrow, content, title, feature_type, featureItems, image } = data;

  // Simple - getIconComponent("small")
  const renderFeatureItems = (iconSize: 'small' | 'large') =>
    featureItems.map((item) => {
      return (
        <div
          key={item._key}
          className="flex flex-col space-y-3"
        >
          <div className={`flex ${iconSize === 'large' ? 'flex-col' : 'flex-row'}`}>
            {item.icon && iconSize === 'small' && getIconComponent(item.icon, iconSize)}

            {item.heading && (
              <h3
                className={`font-bold ${item.icon && iconSize === 'small' && item.heading ? 'ml-2' : ''} ${item.icon && iconSize === 'large' ? 'pt-2' : ''} `}
              >
                {item.heading}
              </h3>
            )}
          </div>
          {item.description && <BlockContent data={item.description} />}
          {item.buttons && (
            <ButtonLink
              buttons={item.buttons}
              spacing="vertical"
              direction="column"
              removePaddingLeft={true}
            />
          )}
        </div>
      );
    });
  // TODO add the ability to have heading and content be on the same line and flow for inline elements
  const renderOffsetFeatureItems = (
    iconSize: 'small' | 'large',
    iconPosition: 'offset' | 'inline' | 'above',
    contentPosition: 'inline' | 'block'
  ) =>
    featureItems.map((item) => {
      return (
        <div
          key={item._key}
          className="flex flex-col space-y-3"
        >
          <div className={`flex ${iconSize === 'large' ? 'flex-col space-y-5' : 'flex-row'}`}>
            {/* Large Icon Above Block Heading and Content   */}
            {item.icon &&
              iconSize == 'large' &&
              iconPosition == 'above' &&
              item.heading &&
              item.description &&
              contentPosition === 'block' && (
                <>
                  {getIconComponent(item.icon, iconSize)}
                  <div className="flex flex-col space-y-3">
                    <h3 className={`font-bold `}>{item.heading}</h3>

                    <BlockContent data={item.description} />

                    {item.buttons && (
                      <ButtonLink
                        buttons={item.buttons}
                        spacing="vertical"
                        direction="column"
                        removePaddingLeft={true}
                      />
                    )}
                  </div>
                </>
              )}

            {/* centered 2x2  - getIconComponent("large", "offset", "block" ) */}
            {/* Large Icon Offset Block Heading and Content   */}
            {item.icon &&
              iconSize == 'large' &&
              iconPosition == 'offset' &&
              item.heading &&
              item.description &&
              contentPosition === 'block' && (
                <>
                  <div className="flex flex-row space-y-2">
                    {getIconComponent(item.icon, iconSize)}
                    <h3 className={`font-bold ${iconPosition === 'offset' ? 'ml-2' : ''} `}>
                      {item.heading}
                    </h3>
                  </div>
                  <BlockContent
                    className="ml-11"
                    data={item.description}
                  />
                  {item.buttons && (
                    <ButtonLink
                      className="ml-11"
                      buttons={item.buttons}
                      spacing="vertical"
                      direction="column"
                      removePaddingLeft={true}
                    />
                  )}
                </>
              )}
            {/* Simple two columns with Small Icons - getIconComponent("small", "offset", "block" ) */}
            {/* Small Icon Offset Block Heading and Content   */}
            {item.icon &&
              iconSize == 'small' &&
              iconPosition == 'offset' &&
              item.heading &&
              item.description &&
              contentPosition === 'block' && (
                <>
                  {getIconComponent(item.icon, iconSize)}
                  <div className="flex flex-col space-y-2">
                    <h3 className={`font-bold ${iconPosition === 'offset' ? 'ml-2' : ''} `}>
                      {item.heading}
                    </h3>

                    <BlockContent
                      className="ml-2"
                      data={item.description}
                    />

                    {item.buttons && (
                      <ButtonLink
                        className="ml-2"
                        buttons={item.buttons}
                        spacing="vertical"
                        direction="column"
                        removePaddingLeft={true}
                      />
                    )}
                  </div>
                </>
              )}
            {/* // TODO add the ability to have heading and content be on the same line and flow */}
            {/* Small Icon Offset Inline Heading and Content   */}
            {item.icon &&
              iconSize == 'small' &&
              iconPosition === 'offset' &&
              item.heading &&
              item.description &&
              contentPosition === 'inline' && (
                <>
                  please choose another option
                  {/* {getIconComponent(item.icon, iconSize)}
                  <div className="text-wrap">
                    <h3 className="whitespace-nowrap">{item.heading}</h3>

                    <div className="flex-1">
                      <BlockContent
                        className="inline"
                        data={item.description}
                      />
                    </div>
                  </div>
                  {item.buttons && (
                    <ButtonLink
                      className="ml-2"
                      buttons={item.buttons}
                      spacing="vertical"
                      direction="column"
                      removePaddingLeft={true}
                    />
                  )} */}
                </>
              )}
          </div>
        </div>
      );
    });

  const getRandomRotateClass = () => {
    const rotateClasses = [
      'rotate-0',
      'rotate-1',
      'rotate-2',
      'rotate-3',
      '-rotate-1',
      '-rotate-2',
      '-rotate-3',
    ];
    return rotateClasses[Math.floor(Math.random() * rotateClasses.length)];
  };

  const renderFeatureCardItems = (iconSize: 'small' | 'large') =>
    featureItems.map((item) => {
      const randomRotateClass = getRandomRotateClass();

      return (
        <div
          key={item._key}
          className={`flex flex-col border-2 border-black ${randomRotateClass}`}
        >
          <div className="border-8 mt-4 border-white flex justify-center items-center">
            {item.featureImage && (
              <ImageComponent
                image={item.featureImage}
                widthOverride={300}
                heightOverride={300}
              />
            )}
          </div>
          <div className="p-8 bg-white text-black space-y-2">
            <div
              className={`flex flex-row justify-center items-center  ${iconSize === 'large' ? 'flex-col' : 'flex-row'}`}
            >
              {item.icon && iconSize === 'small' && getIconComponent(item.icon, iconSize)}

              {item.heading && (
                <h3
                  className={`font-bold ${item.icon && iconSize === 'small' && item.heading ? 'ml-2' : ''} ${item.icon && iconSize === 'large' ? 'pt-2' : ''} `}
                >
                  {item.heading}
                </h3>
              )}
            </div>
            <div className="flex flex-col justify-center items-center">
              {item.description && <BlockContent data={item.description} />}
              {item.buttons && (
                <ButtonLink
                  buttons={item.buttons}
                  spacing="vertical"
                  direction="column"
                  removePaddingLeft={true}
                />
              )}
            </div>
          </div>
        </div>
      );
    });

  const renderFeatureContent = () => {
    switch (feature_type) {
      case 'simple':
        return (
          <div className="flex flex-col py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col space-y-4 md:space-y-5 py-16 max-w-3xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {renderFeatureItems('small')}
            </div>
          </div>
        );
      case 'simple_two_columns_with_small_icons':
        return (
          <div className="flex flex-col py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col space-y-2 md:space-y-5 py-16 max-w-3xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-2 gap-16">
              {renderOffsetFeatureItems('small', 'offset', 'block')}
            </div>
          </div>
        );
      case 'simple_three_columns_with_small_icons':
        return (
          <div className="flex flex-col justify-center items-center py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col justify-center items-center space-y-2 md:space-y-5 py-16 max-w-xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-3 gap-16">{renderFeatureItems('small')}</div>
          </div>
        );
      case 'simple_three_columns_with_large_icons':
        return (
          <div className="flex flex-col py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col space-y-2 md:space-y-5 py-16 max-w-3xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-2 gap-16">
              {renderOffsetFeatureItems('large', 'above', 'block')}
            </div>
          </div>
        );
      case 'with_product_screenshot_on_left':
        return (
          <div className="grid lg:grid-cols-2 gap-16 py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col lg:order-2 space-y-4 md:space-y-5 max-w-xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
              <div className="grid grid-cols-1 gap-16">{renderFeatureItems('small')}</div>
            </div>
            {image && (
              <div className="lg:order-1">
                <ImageComponent image={image} />
              </div>
            )}
          </div>
        );
      case 'with_product_screenshot_on_right':
        return (
          <div className="grid lg:grid-cols-2 gap-16 py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col space-y-2 md:space-y-5 max-w-xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
              <div className="grid grid-cols-1 gap-16">{renderFeatureItems('small')}</div>
            </div>
            {image && (
              <div>
                <ImageComponent image={image} />
              </div>
            )}
          </div>
        );
      case 'offset_2x2_grid':
        return (
          <div className="grid lg:grid-flow-col py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col space-y-5 max-w-md">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {renderOffsetFeatureItems('large', 'above', 'block')}
            </div>
          </div>
        );
      case 'offset_with_feature_list':
        return (
          <div className="grid lg:grid-flow-col gap-8 py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col space-y-5 max-w-md pb-5">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {renderOffsetFeatureItems('small', 'offset', 'block')}
            </div>
          </div>
        );
      case 'with_large_screenshot':
        return (
          <div className="flex flex-col justify-center items-center gap-16 py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col space-y-2 lg:text-center md:space-y-5 max-w-4xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>

            <div>
              {image && (
                <ImageComponent
                  image={image}
                  widthOverride={1600}
                />
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderOffsetFeatureItems('small', 'offset', 'block')}
            </div>
          </div>
        );
      case 'centered_2x2_grid':
        return (
          <div className="flex flex-col lg:justify-center lg:items-center py-20 md:px-32 lg:px-0">
            {/* Outside Feature List Items */}
            <div className="flex flex-col lg:justify-center lg:text-center lg:items-center space-y-5 max-w-xl py-8">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
              {renderOffsetFeatureItems('large', 'offset', 'block')}
            </div>
          </div>
        );
      case 'simple_three_columns_cards':
        return (
          <div className="flex flex-col justify-center items-center py-20">
            {/* Outside Feature List Items */}
            <div className="flex flex-col justify-center items-center space-y-2 md:space-y-5 py-16 max-w-xl">
              {eyebrow && <span>{eyebrow}</span>}
              {title && <h2 className="font-bold text-4xl">{title}</h2>}
              {content && <BlockContent data={content} />}
            </div>
            <div className="grid grid-cols-3 gap-16">{renderFeatureCardItems('small')}</div>
          </div>
        );
      default:
        return <div>Default footer content</div>;
    }
  };

  return (
    <section className="p-4">
      <div className="container mx-auto">{renderFeatureContent()}</div>
    </section>
  );
}
