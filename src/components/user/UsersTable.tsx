import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
  Button,
  Flex,
  Icon,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Skeleton,
} from "@chakra-ui/react";
import { IUserResponse } from "@/models/response/IUserResponse";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { LiaUserPlusSolid } from "react-icons/lia";
import CustomModal from "@/components/common/modal/CustomModal";
import { deleteUserHelper } from "@/helper/forms/user/deleteUserHelper";
import CreateAndUpdateUser from "../forms/user/CreateAndUpdateUser.component";
import { useGetUsersByTeam } from "@/hooks/user/useGetUsersByTeam";
import { IUsersTable } from "@/models/components/IUser";

interface ISelectUser {
  id_user: number;
  role: string;
  name: string;
}

export default function UsersTable({ id_team }: IUsersTable) {
  const cancelRef = useRef<any>();
  const [selectedUser, setSelectedUser] = useState<ISelectUser>({
    id_user: 0,
    role: "",
    name: "",
  });

  // Get users by team
  const { isLoading, usersByTeam } = useGetUsersByTeam(id_team);

  // Data that is rendered in the table
  const [users, setUsers] = useState(usersByTeam);

  // View Delete modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // View Add modal
  const {
    isOpen: isOpenAddUser,
    onOpen: onOpenAddUser,
    onClose: onCloseAddUser,
  } = useDisclosure();

  // View Update modal
  const {
    isOpen: isOpenUpdateUser,
    onOpen: onOpenUpdateUser,
    onClose: onCloseUpdateUser,
  } = useDisclosure();

  // Update user list
  useEffect(() => {
    setUsers(usersByTeam);
  }, [usersByTeam]);

  // Getting the selected user
  const userUpdate = (): IUserResponse | undefined => {
    return users.find((user) => user.id_user === selectedUser.id_user);
  };

  // table headers
  const headers: Array<string> = [
    "Role",
    "Fecha de nacimiento",
    "Nombre",
    "Teléfono",
    "Cédula",
    "",
  ];

  return (
    <Box
      borderRadius="16px"
      p="20px 30px 40px"
      border="1px solid #D2D3D3"
      m="40px auto"
      maxW="100%"
    >
      {/* Heading of the table */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        m="15px 0 40px"
      >
        <Heading as="h3" fontSize="2xl">
          Integrantes del equipo
        </Heading>

        <Button
          _hover={{ transform: "scale(1.1)" }}
          _active={{ transform: "scale(0.99)" }}
          onClick={onOpenAddUser}
        >
          <Icon as={LiaUserPlusSolid} fontSize="20px" />
        </Button>

        {/* Modal to add users  */}
        <CustomModal
          isHeader={true}
          isOpen={isOpenAddUser}
          onClose={onCloseAddUser}
          tittle="Registro"
          size={{ base: "sm", md: "lg" }}
        >
          <CreateAndUpdateUser id_team={id_team} />
        </CustomModal>
      </Flex>

      {/* Table */}
      <TableContainer w="100%" overflow="auto">
        <Table variant="simple" size="sm">
          {/* Headers */}
          <Thead>
            <Tr>
              {headers.map((title, idx) => {
                return (
                  <Th key={idx} borderBottom="solid 1px #C2C6CC">
                    {title}
                  </Th>
                );
              })}
            </Tr>
          </Thead>

          <Tbody>
            {users.map(
              ({
                id_user,
                first_name,
                last_name,
                phone,
                role,
                birthdate,
                cedula,
              }) => {
                return (
                  <React.Fragment key={id_user}>
                    <Tr>
                      {/* Role */}
                      <Td borderBottom="solid 1px #C2C6CC">{role.name}</Td>

                      {/* Birthdate */}
                      <Td borderBottom="solid 1px #C2C6CC">{birthdate}</Td>

                      {/* User name */}
                      <Td borderBottom="solid 1px #C2C6CC">
                        {first_name} {last_name}
                      </Td>

                      {/* Phone */}
                      <Td borderBottom="solid 1px #C2C6CC">{phone}</Td>

                      {/* cedula */}
                      <Td borderBottom="solid 1px #C2C6CC">{cedula}</Td>

                      {/* Buttons to update and delete */}
                      <Td w="20px" borderBottom="solid 1px #C2C6CC">
                        <Flex gap="10px">
                          {/* Edit button */}
                          <Button
                            _hover={{ transform: "scale(1.1)" }}
                            _active={{ transform: "scale(0.99)" }}
                            onClick={() => {
                              onOpenUpdateUser();
                              setSelectedUser({
                                id_user,
                                role: role.name,
                                name: `${first_name} ${last_name}`,
                              });
                            }}
                          >
                            <EditIcon color="blue.400" fontSize="16px" />
                          </Button>

                          {/* Delete button */}
                          <Button
                            onClick={() => {
                              onOpen();
                              setSelectedUser({
                                id_user,
                                role: role.name,
                                name: `${first_name} ${last_name}`,
                              });
                            }}
                            _hover={{ transform: "scale(1.1)" }}
                            _active={{ transform: "scale(0.99)" }}
                          >
                            <DeleteIcon color="red" fontSize="16px" />
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  </React.Fragment>
                );
              }
            )}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Update user modal */}
      <CustomModal
        isOpen={isOpenUpdateUser}
        onClose={onCloseUpdateUser}
        tittle={`Modificar ${selectedUser.role}`}
        isHeader={true}
        size={{ base: "sm", md: "lg" }}
      >
        <CreateAndUpdateUser
          id_team={id_team}
          id_user={selectedUser.id_user}
          userToUpdate={userUpdate()}
        />
      </CustomModal>

      {/*  Delete to user Dialog*/}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay bgColor="#00000015">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {selectedUser.role}
            </AlertDialogHeader>

            <AlertDialogBody>
              {`¿Está seguro que quiere eliminar a ${selectedUser.name}?`}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancelar</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                  deleteUserHelper(selectedUser.id_user);
                  setUsers(
                    users.filter(
                      (user) => user.id_user !== selectedUser.id_user
                    )
                  );
                }}
                ml={3}
              >
                Borrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
