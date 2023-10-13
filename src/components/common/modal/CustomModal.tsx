import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorMode,
} from "@chakra-ui/react";

type hexadecimalColor = `#${string}`;

interface ICustomModal {
  isOpen: boolean;
  onClose: () => void;
  tittle: string;
  children: React.ReactNode;
  isHeader: boolean;
  size: string | object;
}

export default function CustomModal({
  isOpen,
  onClose,
  children,
  tittle,
  size,
  isHeader,
}: ICustomModal) {
  const { colorMode } = useColorMode();
  const bgItems = colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)";
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bgColor={bgItems} w={"95%"}>
          {isHeader ? tittle : ""}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bgColor={bgItems}>{children}</ModalBody>
        <ModalFooter bgColor={bgItems}></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
