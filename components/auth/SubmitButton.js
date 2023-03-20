import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";



const SubmitButton = () => {

    return (
        <TouchableOpacity
        style={{
            backgroundColor:"orange",
            height:50,
            marginBottom:20,
            justifyContent:"center",
            marginHorizontal:15,
            borderRadius:24
        }}
      >
        <Text bold medium center>Submit</Text>
      </TouchableOpacity>
    )
}


export default SubmitButton;