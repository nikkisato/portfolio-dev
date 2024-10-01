import StarIcon from '@mui/icons-material/Star';
import SyncIcon from '@mui/icons-material/Sync';
import SortIcon from '@mui/icons-material/Sort';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PersonIcon from '@mui/icons-material/Person';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BuildIcon from '@mui/icons-material/Build';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import CheckIcon from '@mui/icons-material/Check';
import CodeIcon from '@mui/icons-material/Code';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function getIconComponent(
  iconName: string | undefined,
  iconSize?: 'small' | 'large'
) {
  switch (iconName) {
    case 'Facebook':
      return <FacebookIcon fontSize={iconSize} />;
    case 'GitHub':
      return <GitHubIcon fontSize={iconSize} />;
    case 'X':
      return <XIcon fontSize={iconSize} />;
    case 'YouTube':
      return <YouTubeIcon fontSize={iconSize} />;
    case 'Instagram':
      return <InstagramIcon fontSize={iconSize} />;
    case 'Email':
      return <EmailIcon fontSize={iconSize} />;
    case 'Linkedin':
      return <LinkedInIcon fontSize={iconSize} />;
    case 'Star':
      return <StarIcon fontSize={iconSize} />;
    case 'Favorite':
      return <FavoriteIcon fontSize={iconSize} />;
    case 'Build':
      return <BuildIcon fontSize={iconSize} />;
    case 'Home':
      return <HomeIcon fontSize={iconSize} />;
    case 'AccountCircle':
      return <AccountCircleIcon fontSize={iconSize} />;
    case 'Settings':
      return <SettingsIcon fontSize={iconSize} />;
    case 'Sync':
      return <SyncIcon fontSize={iconSize} />;
    case 'Sort':
      return <SortIcon fontSize={iconSize} />;
    case 'Share':
      return <ShareIcon fontSize={iconSize} />;
    case 'PlayCircle':
      return <PlayCircleIcon fontSize={iconSize} />;
    case 'Person':
      return <PersonIcon fontSize={iconSize} />;
    case 'PauseCircle':
      return <PauseCircleIcon fontSize={iconSize} />;
    case 'Internet':
      return <PublicIcon fontSize={iconSize} />;
    case 'Check':
      return <CheckIcon fontSize={iconSize} />;
    case 'CodeIcon':
      return <CodeIcon fontSize={iconSize} />;
    case 'AccessibilityNewIcon':
      return <AccessibilityNewIcon fontSize={iconSize} />;
    case 'CameraIcon':
      return <CameraAltIcon fontSize={iconSize} />;
    default:
      console.log('No matching icon for:', iconName);
      return null;
  }
}
