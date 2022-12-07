import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { NativeRouter, Routes, Route, Link } from "react-router-native";
import Login from "./src/Login.js";
import Home from "./src/Home.js";
import CursoAsistenciasHoy from "./src/CursoAsistenciasHoy";
import CursoAsistenciasRecord from "./src/CursoAsistenciasRecord";
import CursoEdit from "./src/CursoEdit";
import AlumnosAñadir from "./src/AlumnosAñadir";

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView>
        <View style={styles.container}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/curso/edit" element={<CursoEdit />} />
            <Route
              exact
              path="/curso/asistencias"
              element={<CursoAsistenciasHoy />}
            />
            <Route
              exact
              path="/curso/asistencias/record"
              element={<CursoAsistenciasRecord />}
            />
            <Route exact path="/alumnos/add" element={<AlumnosAñadir />} />
          </Routes>
          {/*<Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <View style={styles.nav}>
            <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>About</Text>
            </Link>
            <Link
              to="/curso/edit"
              underlayColor="#f0f4f7"
              style={styles.navItem}
            >
              <Text>Topics</Text>
            </Link>
          </View>*/}
        </View>
      </SafeAreaView>
    </NativeRouter>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});
