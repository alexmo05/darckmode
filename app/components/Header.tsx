import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-4xl font-extrabold">Grado Superior en Informática</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
