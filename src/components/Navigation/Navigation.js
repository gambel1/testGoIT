import { NavUl,NavLi } from "./NavigationStyles";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Navigation  ()  {
  const navList = [
    { name: "Home", path: "/" },
    { name: "Tweets", path: "/tweets" },
  ];
  return (
    <nav >
      <NavUl >
        {navList.map(({ name, path }) => {
          return (
            <NavLi key={name} >
              <Button component={NavLink} to={path} >
                {name}
              </Button>
            </NavLi>
          );
        })}
      </NavUl>
    </nav>
  );
};
