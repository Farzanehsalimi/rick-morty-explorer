import { NavLink } from "react-router-dom";

const NavItems = [
  { to: "/", label: "Characters" },
  { to: "/locations", label: "Locations" },
  { to: "/episodes", label: "Episodes" },
];

const isActiveNavStyle = ({ isActive }) => {
  return isActive ? "text-primary font-bold" : "text-black";
};

function NavLinks({ className, onClickLink }) {
  return (
    <ul className={className}>
      {NavItems.map(({ to, label }) => {
        return (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${isActiveNavStyle({ isActive })} md:text-xl`
              }
              onClick={onClickLink}
            >
              {label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
