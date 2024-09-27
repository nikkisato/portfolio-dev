import classNames from 'classnames';
import getIconComponent from '@/components/getIconComponent';
import { ButtonsItemProp } from '@/sanity/lib/types';

interface ButtonLinkProps {
  buttons: ButtonsItemProp[];
  spacing: 'horizontal' | 'vertical';
  direction: 'row' | 'column';
  removePaddingLeft?: boolean;
  paddingButton?: boolean;
  className?: string;
}

export default function ButtonLink({
  buttons,
  direction,
  spacing,
  removePaddingLeft = false,
  paddingButton = true,
  className,
}: ButtonLinkProps) {
  const renderButtonLinkContent = (button: {
    text: string;
    icon?: string;
    button_link_type: string;
  }) => {
    switch (button.button_link_type) {
      case 'icon_only':
        return (
          <>
            {getIconComponent(button.icon)}
            {button.icon && <span className="sr-only">{button.text}</span>}
          </>
        );
      case 'text_only_no_icons':
        return <>{button.text && <span>{button.text}</span>}</>;
      case 'icon_and_text':
        return (
          <>
            {getIconComponent(button.icon)}
            {button.text && <span className="ml-2">{button.text}</span>}
          </>
        );
      default:
        return <div>Please Pick a Button/Link Type</div>;
    }
  };

  return (
    <ul
      className={classNames(
        className,
        'flex',
        { 'flex-row': direction === 'row' },
        { 'flex-col': direction === 'column' },
        { 'space-x-10': spacing === 'horizontal' },
        { 'space-y-10': spacing === 'vertical' }
      )}
    >
      {buttons &&
        buttons.map((button) => {
          return (
            <li key={button._key}>
              <a
                href={button.url}
                className={`flex items-center justify-center ${button.style} ${removePaddingLeft ? 'pl-0' : ''} ${paddingButton ? 'p-2' : '0'} border-b-2 border-transparent hover:border-black dark:hover:border-white`}
                target={button.isExternal ? '_blank' : '_self'}
                rel={button.isExternal ? 'noopener noreferrer' : undefined}
              >
                {renderButtonLinkContent(button)}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
