import { Text, StyleSheet, Pressable } from "react-native";
import { primaryColor } from "../constants/style";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Button({ icon, onPress, title = "", iconOnly }) {
  return (
    <Pressable style={styles(iconOnly).button} onPress={onPress}>
      <Text style={styles(iconOnly).text}>{title}</Text>
      {iconOnly && <Icon name={icon} size={21} style={styles(iconOnly).icon} />}
    </Pressable>
  );
}

const styles = (iconOnly) =>
  StyleSheet.create({
    button: {
      alignSelf: "flex-start",
      borderRadius: 25,
      backgroundColor: primaryColor,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: iconOnly ? 7.5 : 30,
      paddingVertical: iconOnly ? 5 : 15,
    },
    text: {
      fontWeight: "bold",
      color: "white",
      fontSize: 20,
      lineHeight: 20,
    },
    icon: {
      color: "white",
    },
  });
