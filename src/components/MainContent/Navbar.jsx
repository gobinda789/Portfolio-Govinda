
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ['about', 'resume', 'projects', 'certificates', 'contact'];

  return (
    <nav className="navbar">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`navbar-link ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
