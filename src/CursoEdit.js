import { Pressable, TextInput, Text, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
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
  const onPress = () => {
    navigate("/");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.greetingView}>
          <Text style={styles.buenDiaText}>{curso.name}</Text>
          <Text style={styles.fechaText}>Editar</Text>
        </View>
      </View>
      <View style={styles.formView}>
        <TextInput style={styles.input} value={curso.name} />
        <TextInput style={styles.input} value={curso.day} />
        <TextInput style={styles.input} value={curso.anio} />
        <TextInput style={styles.input} value={curso.grado} />
        <TextInput style={styles.input} value={curso.schedule} />
        <TextInput style={styles.input} value={curso.alumnos.join(", ")} />
        <View style={styles.buttonsView}>
          <Pressable
            style={[styles.button, styles.cancelButton]}
            onPress={onPress}
          >
            <Text style={[styles.textButton, styles.cancelText]}>Cancelar</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.deleteButton]}
            onPress={onPress}
          >
            <Text style={[styles.textButton, styles.deleteText]}>Eliminar</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>Guardar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
