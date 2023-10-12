import { clearStorage } from "@/services/login/loginService";
import { IconType } from "react-icons";
import { AiOutlineHome, AiFillHome, AiOutlineGroup } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";

export interface Iicons {
  id: number;
  icon: IconType;
  text: string;
  url: string;
  onclick?: () => void;
}

// Icons used in the SideBar and Navbar Mobile component
export const icons: Array<Iicons> = [
  {
    id: 1,
    icon: AiFillHome,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    icon: HiOutlineChartSquareBar,
    text: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 3,
    icon: BsCalendarEvent,
    text: "Eventos",
    url: "/events",
  },
  {
    id: 4,
    icon: HiOutlineUsers,
    text: "Usuarios",
    url: "/users",
  },
  {
    id: 5,
    icon: AiOutlineGroup,
    text: "Tipos de eventos",
    url: "/event-types",
  },
  {
    id: 6,
    icon: BiLogOut,
    text: "Logout",
    url: "/auth",
    onclick: clearStorage,
  },
];
