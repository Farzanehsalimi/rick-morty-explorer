import { NavLink } from "react-router-dom";

const NavItems = [
  { to: "/", label: "Characters" },
  { to: "/locations", label: "Locations" },
  { to: "/episodes", label: "Episodes" },
];

const isActiveNavStyle = ({ isActive }) => {
  return isActive ? "text-primary-600 font-bold" : "text-secondary-0";
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
                `${isActiveNavStyle({
                  isActive,
                })} md:text-xl hover:text-primary-500 p-2`
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
