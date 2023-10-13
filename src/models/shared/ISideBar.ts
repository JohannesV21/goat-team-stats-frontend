import { clearStorage } from "@/services/login/loginService";
import { IconType } from "react-icons";
import { AiFillHome, AiOutlineGroup } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { GiSoccerKick } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

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
    icon: RiTeamFill,
    text: "Equipo",
    url: "/team",
  },
  {
    id: 3,
    icon: GiSoccerKick,
    text: "Partidos",
    url: "/match",
  },
  {
    id: 4,
    icon: HiOutlineUsers,
    text: "Usuarios",
    url: "/users",
  },
  {
    id: 6,
    icon: BiLogOut,
    text: "Logout",
    url: "/auth",
    onclick: clearStorage,
  },
];
