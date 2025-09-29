import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { registerUser, loginUser, logoutUser, getUserData } from "./auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleRegister = async () => {
    try {
      const newUser = await registerUser(email, password);
      setUser(newUser);
      const data = await getUserData(newUser.uid);
      setUserData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const loggedInUser = await loginUser(email, password);
      setUser(loggedInUser);
      const data = await getUserData(loggedInUser.uid);
      setUserData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    setUserData(null);
  };

  return (
    <View style={styles.container}>
      {!user ? (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Register" onPress={handleRegister} />
          <Button title="Login" onPress={handleLogin} />
        </>
      ) : (
        <>
          <Text>Welcome, {user.email}</Text>
          {userData && <Text>Created At: {userData.createdAt}</Text>}
          <Button title="Logout" onPress={handleLogout} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, marginVertical: 5, padding: 10, borderRadius: 5 },
});

