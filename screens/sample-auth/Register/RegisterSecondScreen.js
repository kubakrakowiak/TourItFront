import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import AuthInput from "../../../components/ui/AuthInput";
import { Colors } from "../../../constants/styles";
import DatePicker from "react-native-datepicker";

export default function RegisterSecondScreen({ route, navigation }) {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { name, lastname } = route.params;

  function registerHandler() {
    navigation.navigate("RegisterThird", {
      name: name,
      lastname: lastname,
      dateOfBirth: dateOfBirth,
    });
  }

  return (
    <View style={styles.authContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Oh, hey you!</Text>
        <Text style={styles.subTitle}>
          We hope you will have a good time here!
        </Text>
      </View>
      <View style={styles.formContainer}>
        <DatePicker
          style={{ width: 200 }}
          date={dateOfBirth}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDateOfBirth(date);
          }}
        />
        <AuthInput
          value={dateOfBirth}
          label={"Date of Birth"}
          onUpdateValue={setDateOfBirth}
          backgroundColor={Colors.secondary500}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button color={Colors.secondary800} onPress={registerHandler}>
          Next
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    margin: 28,
  },
  formContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
  },
  subTitle: {
    color: Colors.primary200,
    textAlign: "center",
    fontSize: 16,
    width: 200,
  },
});
