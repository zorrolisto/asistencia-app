import { Pressable, TextInput, Text, StyleSheet, View } from "react-native";
import { courses } from "../constants/dataMock";
import {
  grayColor,
  primaryColor,
  redColor,
  textColor,
} from "../constants/style";

export default function CursoAsistenciasHoy() {
  const curso = courses[0];
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.greetingView}>
          <Text style={styles.buenDiaText}>{curso.name}</Text>
          <Text style={styles.fechaText}>
            Día: {new Date().toLocaleDateString()} - Tomar Asistencia
          </Text>
        </View>
      </View>
      <View style={styles.alumnosView}>
        {curso.alumnos.map((a, i) => (
          <View key={i} style={styles.alumnoRowView}>
            <Text style={styles.nameAlumnoText}>{a}</Text>
            <View style={styles.buttonsView}>
              <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.textButton}>A</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.textButton}>T</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.textButton}>F</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.buttonsView}>
        <Pressable
          style={[styles.button, styles.bottomButtons]}
          onPress={onPress}
        >
          <Text style={styles.textButton}>Cancelar</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.bottomButtons, styles.saveButton]}
          onPress={onPress}
        >
          <Text style={[styles.textButton, styles.saveText]}>Guardar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameAlumnoText: {
    fontSize: 20,
    marginTop: 15,
  },
  alumnoRowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  alumnosView: {},
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
  buttonsView: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    alignSelf: "flex-start",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginHorizontal: 2,
    backgroundColor: "white",
    borderColor: primaryColor,
    borderWidth: 1.5,
  },
  textButton: {
    fontWeight: "bold",
    color: primaryColor,
    fontSize: 20,
    lineHeight: 20,
  },
  bottomButtons: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 5,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: primaryColor,
  },
  saveText: {
    color: "white",
  },
});
