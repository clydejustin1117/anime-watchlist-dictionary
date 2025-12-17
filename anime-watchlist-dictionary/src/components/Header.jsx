
import logo from '../assets/logo.png';
import { Sun, Moon } from "lucide-react"; 

const Header = ({ onToggleTheme, theme, onOpenSettings }) => {
  return (
    <header className="py-4 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md transition-colors">
      <article className="flex justify-between items-center">
        
        
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={logo}
            alt="Anime Watchlist Logo"
            className="w-14 h-14 object-contain drop-shadow-md"
          />
         <h1
  className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight"
  style={{ color: "var(--accent-color)" }}
>
  Anime Watchlist Dictionary
</h1>

        </div>

      <button
  onClick={onOpenSettings}
  className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm font-medium hover:opacity-80 transition"
>
  ⚙ Settings
</button>


       
        <button
          onClick={onToggleTheme}
          className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-700 shadow hover:scale-105 transition"
        >
          {theme === "light" ? (
            <Moon size={20} className="text-gray-800" />
          ) : (
            <Sun size={20} className="text-yellow-300" />
          )}
        </button>
      </article>
    </header>
  );
};

export default Header;