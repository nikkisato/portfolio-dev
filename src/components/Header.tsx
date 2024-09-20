import { sanityFetch } from '@/sanity/lib/client';
import { HEADER_QUERY } from '@/sanity/lib/queries';
// import ImageComponent from './ImageComponent';

export default async function Header({}) {
  const data = await sanityFetch({ query: HEADER_QUERY });

  const { heading, buttons } = data;

  if (!data) return null;

  return (
    <div className="flex justify-between h-16 items-center  bg-slate-500 ">
      {/* Navigation */}
      <div className="mx-10">
        <nav>
          <ul className="flex space-x-10">
            {buttons.map((button) => (
              <li key={button._key}>
                <a
                  href={button.url}
                  className={`${button.style} p-2`}
                  target={button.isExternal ? '_blank' : '_self'}
                  rel={button.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {button.text}
                </a>
              </li>
            ))}
          </ul>
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
      <div className="mx-10">Hello</div>
    </div>
  );
}
