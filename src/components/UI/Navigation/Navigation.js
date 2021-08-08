import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Insurance Finder</div>
      </Link>
      <nav>
        <Link to='/stats'>Stats</Link>
      </nav>
    </header>
  );
};

export default Navigation;
