export default function PageBuilder({ pageBuilder }) {
  console.log(pageBuilder);
  return (
    <div>
      {pageBuilder.map((block) => {
        switch (block._type) {
          case 'hero':
            return <div>Hero</div>;
          case 'textWithIllustration':
            return <TextWithIllustration key={block._key} {...block} />;
          case 'imageGallery':
            return <ImageGallery key={block._key} {...block} />;
          case 'form':
            return <Form key={block._key} {...block} />;
            case 'video':
            return <Video key={block._key} {...block} />;
            case 'callToAction':
            return <CallToAction key={block._key} {...block} />;
            default:
            return null;
        }
        })}
    </div>
    );
}