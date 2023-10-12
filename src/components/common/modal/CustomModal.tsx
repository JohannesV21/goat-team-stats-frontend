import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
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
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isHeader ? tittle : ""}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
