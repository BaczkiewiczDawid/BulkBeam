import {StyleSheet, View, Text} from "react-native";

export const LastTraining = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>Last training</Text>
          <Text>14.07.2024</Text>
        </View>
        <View>
          <Text>Easy</Text>
        </View>
        <View>
          <Text>Push A</Text>
          <View>
            <View>
              {/*icon*/}
              <Text>1h 42m</Text>
            </View>
            <View>
              {/*icon*/}
              <Text>3 546kg</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 120,
    backgroundColor: "#3050FE",
    marginTop: 8,
    borderRadius: 10,
    padding: 14,
  },
  title: {
    color: "#fafafa",
    fontSize: 24,
    fontWeight: "500",
  }
})