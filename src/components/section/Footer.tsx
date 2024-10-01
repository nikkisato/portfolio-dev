import { sanityFetch } from '@/sanity/lib/client';
import { FOOTER_QUERY } from '@/sanity/lib/queries';
import ButtonLink from '@/components/ButtonLink';
import Copyright from '@/components/Copyright';
import Newsletter from '@/components/Newsletter';
import MissionStatement from '@/components/MissionStatement';

export default async function Footer() {
  const data = await sanityFetch({ query: FOOTER_QUERY });

  const { heading, footer_type, columns, newsletter, missionStatement } = data;

  const renderFooterContent = () => {
    switch (footer_type) {
      case 'simple_centered':
        // TODO: On mobile is should be 2 columns of 3 links each
        return (
          <div className="flex flex-col items-center py-20 space-y-10">
            {/* Links */}
            <div className="flex flex-wrap justify-center max-w-full">
              {columns[0] && columns[0].buttons && (
                <ButtonLink
                  buttons={columns[0].buttons}
                  mobileDirection="row"
                  mobileSpacing="horizontal"
                  desktopDirection="row"
                  desktopSpacing="horizontal"
                />
              )}
            </div>
            {/* Icons */}
            <div className="">
              {columns[1] && columns[1].buttons && (
                <ButtonLink
                  buttons={columns[1].buttons}
                  mobileDirection="row"
                  mobileSpacing="horizontal"
                  desktopDirection="row"
                  desktopSpacing="horizontal"
                />
              )}
            </div>
            <Copyright />
          </div>
        );
      case 'social_only':
        return (
          <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 py-7">
            {columns[0] && columns[0].buttons && (
              <ButtonLink
                buttons={columns[0].buttons}
                mobileDirection="row"
                mobileSpacing="horizontal"
                desktopDirection="row"
                desktopSpacing="horizontal"
              />
            )}
            <Copyright />
          </div>
        );
      case '4_column_simple':
        return (
          <div className="flex justify-center items-center space-x-20 py-20">
            {/* Column 1 */}
            <div className="flex flex-col">
              {columns[0] && columns[0].columnTitle && (
                <h3 className="font-bold">{columns[0].columnTitle}</h3>
              )}
              {columns[0] && columns[0].buttons && (
                <ButtonLink
                  buttons={columns[0].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 2 */}
            <div>
              {columns[1] && columns[1].columnTitle && (
                <h3 className="font-bold">{columns[1].columnTitle}</h3>
              )}
              {columns[1] && columns[1].buttons && (
                <ButtonLink
                  buttons={columns[1].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 3 */}
            <div>
              {columns[2] && columns[2].columnTitle && (
                <h3 className="font-bold">{columns[2].columnTitle}</h3>
              )}
              {columns[2] && columns[2].buttons && (
                <ButtonLink
                  buttons={columns[2].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 4 */}
            <div>
              {columns[3] && columns[3].columnTitle && (
                <h3 className="font-bold">{columns[3].columnTitle}</h3>
              )}
              {columns[3] && columns[3].buttons && (
                <ButtonLink
                  buttons={columns[3].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>
          </div>
        );
      case '4_column_with_newsletter_right':
        return (
          <div className="grid grid-flow-row-dense grid-cols-2 gap-10 md:grid-cols-6 md:gap-15 py-20">
            {/* Column 1 */}
            <div className="flex flex-col">
              {columns[0] && columns[0].columnTitle && (
                <h3 className="font-bold">{columns[0].columnTitle}</h3>
              )}
              {columns[0] && columns[0].buttons && (
                <ButtonLink
                  buttons={columns[0].buttons}
                  mobileDirection="row"
                  mobileSpacing="horizontal"
                  desktopDirection="row"
                  desktopSpacing="horizontal"
                />
              )}
            </div>

            {/* Column 2 */}
            <div>
              {columns[1] && columns[1].columnTitle && (
                <h3 className="font-bold">{columns[1].columnTitle}</h3>
              )}
              {columns[1] && columns[1].buttons && (
                <ButtonLink
                  buttons={columns[1].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 3 */}
            <div>
              {columns[2] && columns[2].columnTitle && (
                <h3 className="font-bold">{columns[2].columnTitle}</h3>
              )}
              {columns[2] && columns[2].buttons && (
                <ButtonLink
                  buttons={columns[2].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 4 */}
            <div>
              {columns[3] && columns[3].columnTitle && (
                <h3 className="font-bold">{columns[3].columnTitle}</h3>
              )}
              {columns[3] && columns[3].buttons && (
                <ButtonLink
                  buttons={columns[3].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Newsletter */}
            <div className="col-span-2">
              <Newsletter newsletter={newsletter} />
            </div>
          </div>
        );
      case '4_column_with_newsletter_left':
        return (
          <div className="grid grid-flow-row-dense grid-cols-2 gap-10 md:grid-cols-6 md:gap-15 py-20">
            {/* Column 1 */}
            <div className="sm:order-1 md:order-2">
              {columns[0] && columns[0].columnTitle && (
                <h3 className="font-bold">{columns[0].columnTitle}</h3>
              )}
              {columns[0] && columns[0].buttons && (
                <ButtonLink
                  buttons={columns[0].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 2 */}
            <div className="sm:order-2 md:order-3">
              {columns[1] && columns[1].columnTitle && (
                <h3 className="font-bold">{columns[1].columnTitle}</h3>
              )}
              {columns[1] && columns[1].buttons && (
                <ButtonLink
                  buttons={columns[1].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 3 */}
            <div className="sm:order-3 md:order-4">
              {columns[2] && columns[2].columnTitle && (
                <h3 className="font-bold">{columns[2].columnTitle}</h3>
              )}
              {columns[2] && columns[2].buttons && (
                <ButtonLink
                  buttons={columns[2].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 4 */}
            <div className="sm:order-4 md:order-">
              {columns[3] && columns[3].columnTitle && (
                <h3 className="font-bold">{columns[3].columnTitle}</h3>
              )}
              {columns[3] && columns[3].buttons && (
                <ButtonLink
                  buttons={columns[3].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>
            {/* Newsletter */}
            <div className="col-span-2 sm:order-5 md:order-1">
              <Newsletter newsletter={newsletter} />
            </div>
          </div>
        );
      case '4_column_with_left_mission':
        return (
          <div className="grid grid-flow-row-dense grid-cols-2 gap-10 md:grid-cols-6 md:gap-15 py-20">
            {/* Column 1 */}
            <div className="sm:order-1 md:order-2">
              {columns[0] && columns[0].columnTitle && (
                <h3 className="font-bold">{columns[0].columnTitle}</h3>
              )}
              {columns[0] && columns[0].buttons && (
                <ButtonLink
                  buttons={columns[0].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 2 */}
            <div className="sm:order-2 md:order-3">
              {columns[1] && columns[1].columnTitle && (
                <h3 className="font-bold">{columns[1].columnTitle}</h3>
              )}
              {columns[1] && columns[1].buttons && (
                <ButtonLink
                  buttons={columns[1].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 3 */}
            <div className="sm:order-3 md:order-4">
              {columns[2] && columns[2].columnTitle && (
                <h3 className="font-bold">{columns[2].columnTitle}</h3>
              )}
              {columns[2] && columns[2].buttons && (
                <ButtonLink
                  buttons={columns[2].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 4 */}
            <div className="sm:order-4 md:order-">
              {columns[3] && columns[3].columnTitle && (
                <h3 className="font-bold">{columns[3].columnTitle}</h3>
              )}
              {columns[3] && columns[3].buttons && (
                <ButtonLink
                  buttons={columns[3].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>
            {/* Mission Statement */}
            <div className="col-span-2 sm:order-5 md:order-1">
              <MissionStatement missionStatement={missionStatement} />
            </div>
          </div>
        );
      case '4_column_with_right_mission':
        return (
          <div className="grid grid-flow-row-dense grid-cols-2 gap-10 md:grid-cols-6 md:gap-15 py-20">
            {/* Column 1 */}
            <div className="flex flex-col">
              {columns[0] && columns[0].columnTitle && (
                <h3 className="font-bold">{columns[0].columnTitle}</h3>
              )}
              {columns[0] && columns[0].buttons && (
                <ButtonLink
                  buttons={columns[0].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 2 */}
            <div>
              {columns[1] && columns[1].columnTitle && (
                <h3 className="font-bold">{columns[1].columnTitle}</h3>
              )}
              {columns[1] && columns[1].buttons && (
                <ButtonLink
                  buttons={columns[1].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 3 */}
            <div>
              {columns[2] && columns[2].columnTitle && (
                <h3 className="font-bold">{columns[2].columnTitle}</h3>
              )}
              {columns[2] && columns[2].buttons && (
                <ButtonLink
                  buttons={columns[2].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>

            {/* Column 4 */}
            <div>
              {columns[3] && columns[3].columnTitle && (
                <h3 className="font-bold">{columns[3].columnTitle}</h3>
              )}
              {columns[3] && columns[3].buttons && (
                <ButtonLink
                  buttons={columns[3].buttons}
                  mobileDirection="column"
                  mobileSpacing="vertical"
                  desktopDirection="column"
                  desktopSpacing="vertical"
                />
              )}
            </div>
            {/* Mission Statement */}
            <div className="col-span-2">
              <MissionStatement missionStatement={missionStatement} />
            </div>
          </div>
        );
      default:
        return <div>Default footer content</div>;
    }
  };

  return (
    <footer className="p-4 border-t">
      <h2 className="sr-only">{heading}</h2>
      <div className="container mx-auto">{renderFooterContent()}</div>
    </footer>
  );
}
