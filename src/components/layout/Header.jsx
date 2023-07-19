import { TbSearch } from 'react-icons/tb';

import Logo from 'components/Logo';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Logo />

      <Link to="/">Home</Link>
      <Link to="/mylibrary">My Library</Link>

      <TbSearch />
    </header>
  );
}
