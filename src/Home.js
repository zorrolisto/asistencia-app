import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import { courses } from "../constants/dataMock";
import { grayColor, primaryColor, textColor } from "../constants/style";

export default function Home() {
  const goToAlumnos = () => {
    console.log("go to alumnos");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.greetingView}>
          <Text style={styles.buenDiaText}>Buen día</Text>
          <Text style={styles.fechaText}>Lunes, 23 de Agosto</Text>
        </View>
        <View style={styles.button}>
          <Button onPress={goToAlumnos} title="Alumnos" />
        </View>
      </View>
      <View style={styles.cursosView}>
        {courses.map((t, i) => (
          <View key={i} style={styles.cursoView}>
            <View style={styles.textsForCourseView}>
              <Text style={styles.courseNameText}>{t.name}</Text>
              <View style={styles.courseScheduleView}>
                <Text style={styles.dayText}>{t.day.substring(0, 1)}</Text>
                <Text style={styles.scheduleText}>{t.schedule}</Text>
              </View>
            </View>
            <View style={styles.buttonsView}>
              <Button onPress={() => {}} iconOnly icon="pencil" />
              <Button onPress={() => {}} iconOnly icon="list" />
              <Button onPress={() => {}} iconOnly icon="arrow-right" />
            </View>
          </View>
        ))}
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
  cursosView: {},
  cursoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 15,
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: primaryColor,
  },
  buttonsView: {
    flexDirection: "row",
  },
  textsForCourseView: {},
  scheduleText: {
    color: grayColor,
  },
  dayText: {
    marginRight: 5,
    color: grayColor,
  },
  courseNameText: {
    fontSize: 20,
  },
  courseScheduleView: {
    flexDirection: "row",
  },
});
