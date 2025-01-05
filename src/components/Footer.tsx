export const Footer = () => {
  return (
    <footer className="bg-white z-30 w-[1200px] items-center flex justify-center  rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Cute Cards
          </a>
          . Todos os direitos reservados{' '}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="../privacy-policy"
              className="hover:underline me-4 md:me-6"
            >
              Política de Privacidade
            </a>
          </li>
          <li>
            <a href="../terms-of-use/" className="hover:underline me-4 md:me-6">
              Termos de uso
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
