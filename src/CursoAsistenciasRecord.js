import { Pressable, Text, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import { courses } from "../constants/dataMock";
import {
  grayColor,
  greenColor,
  orangeColor,
  primaryColor,
  redColor,
  textColor,
} from "../constants/style";

export default function CursoAsistenciasRecord() {
  const navigate = useNavigate();
  const curso = courses[0];
  const asistenciasByDay = [
    {
      day: "23/10",
      asistencias: [
        {
          name: "Julio Zapata",
          attendanceClass: "A",
        },
        {
          name: "Fernando Rodriguez",
          attendanceClass: "T",
        },
        {
          name: "Camilo Benites",
          attendanceClass: "F",
        },
        {
          name: "José Sanchez",
          attendanceClass: "A",
        },
      ],
    },
  ];
  const usersByAttendance = asistenciasByDay[0].asistencias;
  const onPress = () => {};
  const getButtonStyleByAttendanceClass = (
    attendanceClass,
    actualAttendance
  ) => {
    if (attendanceClass !== actualAttendance) return;
    if (attendanceClass === "A") return styles.buttonA;
    if (attendanceClass === "T") return styles.buttonT;
    if (attendanceClass === "F") return styles.buttonF;
  };
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
      <View style={styles.buttonsView}>
        <Pressable style={[styles.button, styles.saveButton]} onPress={onPress}>
          <Text style={[styles.textButton, styles.saveText]}>23/10</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={onPress}>
          <Text style={[styles.textButton]}>24/10</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={onPress}>
          <Text style={[styles.textButton]}>25/10</Text>
        </Pressable>
      </View>
      <View style={styles.alumnosView}>
        {usersByAttendance.map((a, i) => (
          <View key={i} style={styles.alumnoRowView}>
            <Text style={styles.nameAlumnoText}>{a.name}</Text>
            <View style={styles.buttonsView}>
              <Pressable
                style={[
                  styles.button,
                  getButtonStyleByAttendanceClass(a.attendanceClass, "A"),
                ]}
                onPress={onPress}
              >
                <Text
                  style={[
                    styles.textButton,
                    {
                      color: a.attendanceClass === "A" ? "white" : primaryColor,
                    },
                  ]}
                >
                  A
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  getButtonStyleByAttendanceClass(a.attendanceClass, "T"),
                ]}
                onPress={onPress}
              >
                <Text
                  style={[
                    styles.textButton,
                    {
                      color: a.attendanceClass === "T" ? "white" : primaryColor,
                    },
                  ]}
                >
                  T
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  getButtonStyleByAttendanceClass(a.attendanceClass, "F"),
                ]}
                onPress={onPress}
              >
                <Text
                  style={[
                    styles.textButton,
                    {
                      color: a.attendanceClass === "F" ? "white" : primaryColor,
                    },
                  ]}
                >
                  F
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.buttonsView}>
        <Pressable
          style={[styles.button, styles.bottomButtons]}
          onPress={() => navigate("/home")}
        >
          <Text style={styles.textButton}>Regresar</Text>
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
  buttonA: {
    backgroundColor: greenColor,
    borderColor: greenColor,
  },
  buttonT: {
    backgroundColor: orangeColor,
    borderColor: orangeColor,
  },
  buttonF: {
    backgroundColor: redColor,
    borderColor: redColor,
  },
});
