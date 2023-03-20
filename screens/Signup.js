import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import Userinput from "../components/auth/Userinput";
import SubmitButton from "../components/auth/SubmitButton";
import ShipLogo from "../components/auth/ShipLogo";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if(!name || !email || !password){
      alert("All fields required")
      setLoading(false)
      return;
    }

    console.log("SIGN UP REQUEST => ", name, email, password);
    try {
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password
      });
      setLoading(false);
      console.log("SIGN IN SUCCESS => ", data);
      alert("Sign up successful")
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >

      <ShipLogo />

      <Text title center style={{
        marginBottom:20,
      }}>
        Sign Up
      </Text>

      <Userinput
        name={"Username"}
        value={name}
        setValue={setName}
        autoCapitalize="words"
        autoCorrect={false}
      />

      <Userinput 
      name={"Email"} 
      value={email} 
      setValue={setEmail} 
      autoCompleteType="email"
      keyboardType="email-address"

       />

      <Userinput 
      name={"Password"} 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
      autoCompleteType="password"
      />

     <SubmitButton title="Sign Up" handleSubmit={handleSubmit} loading={loading} /> 

    </View>
  );
};

export default Signup;
