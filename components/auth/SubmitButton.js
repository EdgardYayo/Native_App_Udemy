import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";



const SubmitButton = ({ title, handleSubmit, loading }) => {

    return (
        <TouchableOpacity
        onPress={handleSubmit}
        style={{
            backgroundColor:"#000033",
            height:50,
            marginBottom:20,
            justifyContent:"center",
            marginHorizontal:15,
            borderRadius:24,
            borderWidth:1.8,
            borderColor:"black",
        }}
      >
        <Text bold medium center color="white">
          { loading ? "Please wait..." : title }
        </Text>
      </TouchableOpacity>
    )
}


export default SubmitButton;