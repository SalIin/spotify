import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlayCircleOutline,
  MdRssFeed,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { v4 as uuid } from "uuid";

import Button from "../Button";

import styles from "./Sidebar.module.scss";

const sidebarFirstSection = [
  { id: uuid(), label: "Home", icon: <MdHome /> },
  { id: uuid(), label: "Search", icon: <MdSearch /> },
  { id: uuid(), label: "Your Library", icon: <MdLibraryMusic /> },
];

const sidebarSecondSection = [
  { id: uuid(), label: "Create Playlist", icon: <MdPlayCircleOutline /> },
  { id: uuid(), label: "Liked Songs", icon: <IoMdHeartEmpty /> },
  { id: uuid(), label: "Your Episodes", icon: <MdRssFeed /> },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.Sidebar}>
      <ul className={styles["Sidebar-Section"]}>
        {sidebarFirstSection.map(({ id, label, icon }) => (
          <li className={styles["Sidebar-Item"]} key={id}>
            <Button
              label={label}
              as="link"
              variant="text"
              icon={icon}
              className={styles["Sidebar-Button"]}
            />
          </li>
        ))}
      </ul>
      <ul className={styles["Sidebar-Section"]}>
        {sidebarSecondSection.map(({ id, label, icon }) => (
          <li className={styles["Sidebar-Item"]} key={id}>
            <Button
              label={label}
              as="link"
              variant="text"
              icon={icon}
              className={styles["Sidebar-Button"]}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};
