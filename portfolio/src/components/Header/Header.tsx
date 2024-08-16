import { header } from '../../portfolio';
import Navbar from '../Navbar/NavBar';
import './Header.css';

interface HeaderProps {
  homepage: string | null;
  title: string;
}

const Header = () => {
  const { homepage, title }: HeaderProps = header;

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