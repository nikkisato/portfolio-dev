import { sanityFetch } from '@/sanity/lib/client';
import { HEADER_QUERY } from '@/sanity/lib/queries';
import DarkModeToggle from './DarkModeToggle';
import ButtonLink from './ButtonLink';
// import ImageComponent from './ImageComponent';

interface ButtonProp {
  text: string;
  url: string;
  style: string;
  isExternal: boolean;
  _key: string;
}

export default async function Header() {
  const data = await sanityFetch({ query: HEADER_QUERY });

  const { heading, buttons } = data;

  if (!data) return null;

  return (
    <div className="flex justify-between h-16 items-center border-b">
      {/* Navigation */}
      <div className="mx-10">
        <nav>
          <ButtonLink buttons={buttons} />
        </nav>
      </div>
      {/* Logo */}
      <div>
        <h1 className="sr-only">{heading}</h1>
        {/* {logo && (
          <ImageComponent
            image={logo}
            widthOverride={100}
            heightOverride={100}
          />
        )} */}
      </div>

      {/* Dark Mode Toggle */}
      <div className="mx-10">
        <DarkModeToggle />
      </div>
    </div>
  );
}
