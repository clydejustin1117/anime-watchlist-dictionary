import logo from '../assets/logo.png'; 

const Header = () => {
  return (
<header className="py-6 px-20 bg-gradient-to-ri from-blue-100 via-white to-blue-100 shadow-md">
  <article className="flex justify-center items-center">
    <div className="flex items-center space-x-4">
      <img src={logo} alt="Anime Watchlist Logo" className="w-14 h-14 object-contain drop-shadow-md"/>
      <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">
        Anime Watchlist Dictionary
      </h1>
    </div>
  </article>
</header>


  );
};

export default Header;
