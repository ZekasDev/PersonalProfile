import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import {
  House,
  Briefcase,
  ListDashes,
  User,
  ChatsCircle,
} from "@phosphor-icons/react";
import { Logo } from "../Logo";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <div className={styles.links}>
        <Link to="/">
          <House weight="fill" size={25}/>
          Home
        </Link>
        <Link to="/">
          <User weight="fill" size={25}/>
          Sobre
        </Link>
        <Link to="/">
          <ListDashes weight="fill" size={25}/>
          Serviços
        </Link>
        <Link to="/">
          <Briefcase  weight="fill" size={25}/>
          Portifolio
        </Link>
        <Link to="/">
          <ChatsCircle weight="fill" size={25}/>
          Contact
        </Link>
      </div>
    </div>
  );
}
