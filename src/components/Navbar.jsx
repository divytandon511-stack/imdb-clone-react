const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar__logo">IMDb Clone 🎬</h2>

      <input type="text" placeholder="Search movies..." className="navbar__search" />
    </div>
  );
};

export default Navbar;