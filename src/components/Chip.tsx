interface ChipProp {
  chip: string;
  key: string;
}

export default function Chip({ chip }: ChipProp) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-lg whitespace-nowrap my-3 bg-black text-white dark:bg-white dark:text-black">
      {chip}
    </span>
  );
}
