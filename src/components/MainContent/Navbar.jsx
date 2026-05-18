import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tabs = ['about', 'resume', 'projects', 'certificates', 'contact'];
  const activeLabel = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="menu-toggle-label">{activeLabel}</span>
        <span className="hamburger-lines" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className="navbar-menu">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`navbar-link ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
