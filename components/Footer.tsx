export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {currentYear} Travis Shields. All rights reserved.</p>
      </div>
    </footer>
  );
}
