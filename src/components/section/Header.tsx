import { sanityFetch } from '@/sanity/lib/client';
import { HEADER_QUERY } from '@/sanity/lib/queries';
import DarkModeToggle from '@/components/DarkModeToggle';
import ButtonLink from '@/components/ButtonLink';

export default async function Header() {
  const data = await sanityFetch({ query: HEADER_QUERY });

  const { heading, buttons } = data;

  if (!data) return null;

  return (
    <div className="flex justify-between h-16 items-center border-b">
      {/* Navigation */}
      <div className="mx-5 md:mx-10">
        <nav>
          <ButtonLink
            buttons={buttons}
            mobileDirection="row"
            mobileSpacing="horizontal"
            desktopDirection="row"
            desktopSpacing="horizontal"
          />
        </nav>
      </div>

      <div>
        <h1 className="sr-only">{heading}</h1>
        {/* {image && (
          <ImageComponent
            image={image}
            widthOverride={100}
            heightOverride={100}
          />
        )} */}
      </div>

      {/* Dark Mode Toggle */}
      <div className="mx-5 md:mx-10">
        <DarkModeToggle />
      </div>
    </div>
  );
}
