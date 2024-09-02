import {TextInput, StyleSheet} from "react-native";

type Props = {
  title?: string;
}

export const Input = ({title, ...props}: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={title}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 30,
    borderColor: "rgba(65, 65, 65, .8)",
    color: "#414141",
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
  }
})