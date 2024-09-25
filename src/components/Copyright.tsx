interface CopyrightProps {
  className?: string;
}

export default function Copyright({ className }: CopyrightProps) {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className={className}>
      <p>&copy; {currentYear} Nikki Sato, All Rights Reserved.</p>
    </div>
  );
}
