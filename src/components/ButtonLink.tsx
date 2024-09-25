import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import classNames from 'classnames';
interface ButtonLinkProps {
  buttons: Array<{
    text: string;
    url: string;
    style: string;
    isExternal: boolean;
    _key: string;
    icon?: string;
  }>;
  spacing: 'horizontal' | 'vertical';
  direction: 'row' | 'column';
  removePaddingLeft?: boolean;
  paddingButton?: boolean;
  className?: string;
}

const getIconComponent = (iconName: string | undefined) => {
  switch (iconName) {
    case 'FacebookIcon':
      return <FacebookIcon />;
    case 'GitHubIcon':
      return <GitHubIcon />;
    case 'XIcon':
      return <XIcon />;
    case 'YouTubeIcon':
      return <YouTubeIcon />;
    case 'InstagramIcon':
      return <InstagramIcon />;
    case 'EmailIcon':
      return <EmailIcon />;
    case 'LinkedinIcon':
      return <LinkedInIcon />;
    default:
      return null;
  }
};

export default function ButtonLink({
  buttons,
  direction,
  spacing,
  removePaddingLeft = false,
  paddingButton = true,
  className,
}: ButtonLinkProps) {
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
        buttons.map((button) => (
          <li key={button._key}>
            <a
              href={button.url}
              className={`${button.style} ${removePaddingLeft ? 'pl-0' : ''} ${paddingButton ? 'p-2' : '0'} border-b-2 border-transparent hover:border-black dark:hover:border-white`}
              target={button.isExternal ? '_blank' : '_self'}
              rel={button.isExternal ? 'noopener noreferrer' : undefined}
            >
              {/* if there is a button Icon hide text */}
              {button.icon && getIconComponent(button.icon)}
              {button.icon && <span className="sr-only">{button.text}</span>}
              {/* if no button Icon show text */}
              {!button.icon && button.text && <span>{button.text}</span>}
            </a>
          </li>
        ))}
    </ul>
  );
}
