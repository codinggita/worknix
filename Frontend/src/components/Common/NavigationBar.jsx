import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navigationBar}>
      {/* Top section icons */}
      <div className={styles.topSection}>
        <NavItem to="/home" icon="material-symbols:home-outline" label="Home" />
        <NavItem to="/community" icon="fluent:people-community-12-regular" label="Community" />
        <NavItem to="/attendance" icon="mdi:human-male-board-poll" label="Attendance" />
        <NavItem to="/workflow" icon="gridicons:stats" label="Workflow" />
        <NavItem to="/actions" icon="hugeicons:workflow-circle-03" label="Actions" />
        <NavItem to="/user-profile" icon="gg:profile" label="Profile" />
      </div>

      {/* Bottom section icons */}
      <div className={styles.bottomSection}>
        <NavItem to="/settings" icon="material-symbols:settings-outline" label="Settings" />
        <NavItem to="/" icon="material-symbols:logout" label="Logout" />
      </div>
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.navItem} ${isActive ? styles.active : ""}`
      }
      aria-label={label}
    >
      <Icon icon={icon} className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </NavLink>
  );
};

export default NavigationBar;














