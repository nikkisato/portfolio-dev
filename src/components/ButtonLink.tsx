import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

interface ButtonLinkProps {
  buttons: Array<{
    text: string;
    url: string;
    style: string;
    isExternal: boolean;
    _key: string;
    icon?: string;
  }>;
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
    default:
      return null;
  }
};

export default function ButtonLink({ buttons }: ButtonLinkProps) {
  return (
    <ul className="flex space-x-10">
      {buttons &&
        buttons.map((button) => (
          <li key={button._key}>
            {button.icon && getIconComponent(button.icon)}
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
  );
}
