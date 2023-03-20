import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import Userinput from "../components/auth/Userinput";
import SubmitButton from "../components/auth/SubmitButton";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text title center>
        Sign Up
      </Text>

      <Userinput
        name={"USERNAME"}
        value={name}
        setValue={setName}
        autoCapitalize="words"
        autoCorrect={false}
      />

      <Userinput 
      name={"EMAIL"} 
      value={email} 
      setValue={setEmail} 
      autoCompleteType="email"
      keyboardType="email-address"

       />

      <Userinput 
      name={"PASSWORD"} 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
      autoCompleteType="password"
      />

     <SubmitButton /> 

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};

export default Signup;
