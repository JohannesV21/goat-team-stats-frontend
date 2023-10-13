import { IconType } from "react-icons";
import { HiPencilAlt } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { DeleteIcon } from "@chakra-ui/icons";
import { FaTrash } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";

type hexadecimalColor = `#${string}`;

// Update team Modal
const { onOpen: onOpenUpdateTeam } = useDisclosure();

// Delete team Modal
const { onOpen: onOpenDeleteTeam } = useDisclosure();

// View details
const { onOpen: onOpenDetailsTeam } = useDisclosure();

export interface Iicons {
  id: number;
  icon: IconType;
  color: hexadecimalColor;
  onclick: () => void;
}

export const buttonsViewModals: Array<Iicons> = [
  { id: 0, icon: AiFillEye, onclick: onOpenDetailsTeam, color: "#2DCC70" },
  { id: 1, icon: FaPeopleGroup, onclick: onOpenDetailsTeam, color: "#orange" },
  { id: 2, icon: HiPencilAlt, onclick: onOpenUpdateTeam, color: "#4299E1" },
  { id: 3, icon: FaTrash, onclick: onOpenDeleteTeam, color: "#red" },
];
