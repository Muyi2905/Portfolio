
import Navbar from '../Navbar/NavBar';
import './Header.css';

interface HeaderProps {
  homepage: string | null | undefined; 
  title: string;
}

const Header: React.FC<HeaderProps> = ({ homepage = null, title }) => {



  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
