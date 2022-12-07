import { Pressable, TextInput, Text, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import Button from "../components/Button";
import { courses } from "../constants/dataMock";
import {
  grayColor,
  primaryColor,
  redColor,
  textColor,
} from "../constants/style";

export default function CursoEdit() {
  const navigate = useNavigate();
  const curso = courses[0];
  const alumnos = [
    "Julio Zapata",
    "Fernando Rodriguez",
    "Camilo Benites",
    "José Sánchez",
  ];
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.greetingView}>
          <Text style={styles.buenDiaText}>Alumnos</Text>
        </View>
      </View>
      <View style={styles.formView}>
        <View style={styles.bodyView}>
          {alumnos.map((a, i) => (
            <View key={i} style={styles.inputView}>
              <TextInput style={styles.input} value={a} />
              <Button onPress={() => {}} iconOnly icon="pencil" />
              <Button onPress={() => {}} iconOnly icon="trash" />
            </View>
          ))}
        </View>
        <View style={styles.buttonsView}>
          <Pressable style={styles.button} onPress={() => navigate("/home")}>
            <Text style={styles.textButton}>Go Home</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>Añadir Alumno</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyView: {},
  inputView: {
    flexDirection: "row",
  },

  container: {
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  greetingView: {},
  button: {},
  buenDiaText: {
    fontSize: 45,
    fontWeight: "bold",
    lineHeight: 45,
    color: textColor,
  },
  fechaText: {
    fontSize: 20,
    lineHeight: 20,
    color: grayColor,
  },
  input: {
    width: "75%",
    height: 40,
    textAlign: "center",
    fontSize: 20,
    borderColor: "white",
    color: grayColor,
    borderWidth: 1.5,
    borderBottomColor: primaryColor,
  },
  buttonsView: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    alignSelf: "flex-start",
    borderRadius: 25,
    backgroundColor: primaryColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 5,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "white",
    borderColor: primaryColor,
    borderWidth: 1.5,
  },
  deleteButton: {
    backgroundColor: "white",
    borderColor: redColor,
    borderWidth: 1.5,
  },
  textButton: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    lineHeight: 20,
  },
  cancelText: {
    color: primaryColor,
  },
  deleteText: {
    color: redColor,
  },
});
