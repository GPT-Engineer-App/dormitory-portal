import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { Container, Box, VStack, HStack, Button, Text, Heading, List, ListItem, IconButton } from "@chakra-ui/react";
import { FaSignOutAlt, FaUser, FaHome, FaList, FaCog, FaUsers, FaBed } from "react-icons/fa";

const Login = ({ onLogin }) => {
  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Button onClick={onLogin} colorScheme="teal">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

const Logout = ({ onLogout }) => {
  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading>Logout</Heading>
        <Button onClick={onLogout} colorScheme="red">
          Logout
        </Button>
      </VStack>
    </Container>
  );
};

const StudentList = () => (
  <Container centerContent>
    <Heading>Student List</Heading>
    <List spacing={3}>
      <ListItem>Student 1</ListItem>
      <ListItem>Student 2</ListItem>
      <ListItem>Student 3</ListItem>
    </List>
  </Container>
);

const Accounts = () => (
  <Container centerContent>
    <Heading>Accounts</Heading>
    <Text>Account details go here.</Text>
  </Container>
);

const DormList = () => (
  <Container centerContent>
    <Heading>Dorm List</Heading>
    <List spacing={3}>
      <ListItem>Dorm 1</ListItem>
      <ListItem>Dorm 2</ListItem>
      <ListItem>Dorm 3</ListItem>
    </List>
  </Container>
);

const RoomList = () => (
  <Container centerContent>
    <Heading>Room List</Heading>
    <List spacing={3}>
      <ListItem>Room 101</ListItem>
      <ListItem>Room 102</ListItem>
      <ListItem>Room 103</ListItem>
    </List>
  </Container>
);

const UserList = () => (
  <Container centerContent>
    <Heading>User List</Heading>
    <List spacing={3}>
      <ListItem>User 1</ListItem>
      <ListItem>User 2</ListItem>
      <ListItem>User 3</ListItem>
    </List>
  </Container>
);

const Settings = () => (
  <Container centerContent>
    <Heading>Settings</Heading>
    <Text>Settings go here.</Text>
  </Container>
);

const Navbar = ({ onLogout }) => (
  <HStack spacing={4} padding={4} bg="gray.100" width="100%">
    <Link to="/students">
      <Button leftIcon={<FaUsers />}>Students</Button>
    </Link>
    <Link to="/accounts">
      <Button leftIcon={<FaUser />}>Accounts</Button>
    </Link>
    <Link to="/dorms">
      <Button leftIcon={<FaHome />}>Dorms</Button>
    </Link>
    <Link to="/rooms">
      <Button leftIcon={<FaBed />}>Rooms</Button>
    </Link>
    <Link to="/users">
      <Button leftIcon={<FaList />}>Users</Button>
    </Link>
    <Link to="/settings">
      <Button leftIcon={<FaCog />}>Settings</Button>
    </Link>
    <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={onLogout} />
  </HStack>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Container maxW="container.xl">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/students" /> : <Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="/students" element={isAuthenticated ? <StudentList /> : <Navigate to="/login" />} />
          <Route path="/accounts" element={isAuthenticated ? <Accounts /> : <Navigate to="/login" />} />
          <Route path="/dorms" element={isAuthenticated ? <DormList /> : <Navigate to="/login" />} />
          <Route path="/rooms" element={isAuthenticated ? <RoomList /> : <Navigate to="/login" />} />
          <Route path="/users" element={isAuthenticated ? <UserList /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
