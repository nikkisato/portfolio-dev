export default function Copyright() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div>
      <p>&copy; {currentYear} Nikki Sato, All Rights Reserved.</p>
    </div>
  );
}
