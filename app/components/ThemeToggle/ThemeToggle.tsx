import { useDarkMode } from "../../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg flex items-center gap-2"
      aria-label={`Toggle to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <>
          <Sun className="w-5 h-5" />
          <span>Light Mode</span>
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-5 h-5" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <Monitor className="w-5 h-5" />
          <span>Auto</span>
        </>
      )}
    </button>
  );
}
