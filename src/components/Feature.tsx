import StarIcon from '@mui/icons-material/Star';
import SyncIcon from '@mui/icons-material/Sync';
import SortIcon from '@mui/icons-material/Sort';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PersonIcon from '@mui/icons-material/Person';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const renderFooterContent = () => {
  switch (footer_type) {
    case 'simple_centered':
      return (
        <div>
          <h3>{columnTitle}</h3>
          <ButtonLink buttons={buttons} />
        </div>
      );
    case 'simple_two_columns_with_small_icons':
      return <div>Two columns with small icons</div>;
    case 'simple_three_columns_with_small_icons':
      return <div>Three columns with small icons</div>;
    case 'simple_three_columns_with_large_icons':
      return <div>Three columns with large icons</div>;
    case 'with_product_screenshot_on_left':
      return <div>Product screenshot on left</div>;
    case 'with_product_screenshot_on_right':
      return <div>Product screenshot on right</div>;
    case 'offset_2x2_grid':
      return <div>Offset 2x2 grid</div>;
    case 'offset_with_feature_list':
      return <div>Offset with feature list</div>;
    case 'with_large_screenshot':
      return <div>With large screenshot</div>;
    case 'centered_2x2_grid':
      return <div>Centered 2x2 grid</div>;
    default:
      return <div>Default footer content</div>;
  }
};

// https://tailwindui.com/components/marketing/sections/feature-sections

// interface FeatureProps {
//   heading: string;
//   content: string;
//   featureItems: Array<{
//     eyebrow: string;
//     icon: string;
//     heading: string;
//     description: string;
//     featureImage: { asset: { _ref: string }; alt: string };
//   }
// }

export default function Feature({ data }) {
  // const renderFeatureContent = () => {
  //   switch (footer_type) {
  //     case 'simple_centered':
  //       return (
  //         <div>
  //           <h3>{columnTitle}</h3>
  //           <ButtonLink buttons={buttons} />
  //         </div>
  //       );
  //     case 'simple_two_columns_with_small_icons':
  //       return <div>Two columns with small icons</div>;
  //     case 'simple_three_columns_with_small_icons':
  //       return <div>Three columns with small icons</div>;
  //     case 'simple_three_columns_with_large_icons':
  //       return <div>Three columns with large icons</div>;
  //     case 'with_product_screenshot_on_left':
  //       return <div>Product screenshot on left</div>;
  //     case 'with_product_screenshot_on_right':
  //       return <div>Product screenshot on right</div>;
  //     case 'offset_2x2_grid':
  //       return <div>Offset 2x2 grid</div>;
  //     case 'offset_with_feature_list':
  //       return <div>Offset with feature list</div>;
  //     case 'with_large_screenshot':
  //       return <div>With large screenshot</div>;
  //     case 'centered_2x2_grid':
  //       return <div>Centered 2x2 grid</div>;
  //     default:
  //       return <div>Default footer content</div>;
  //   }
  // };

  const { heading, content, buttons } = data;
  return <div></div>;
}
