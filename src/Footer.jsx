

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 text-center py-4 text-xs text-gray-500 bg-gray-50 border-t border-gray-200">
      <p>© {currentYear} All rights reserved .</p>
      <p>Developed by  <span className="font-medium text-gray-700">Amir Davarzani</span></p>
      <p>
        Support Email:
        <a
          href="mailto:amir.davarzannii@gmail.com"
          className="text-blue-500 hover:underline"
        >
          amir.davarzannii@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
