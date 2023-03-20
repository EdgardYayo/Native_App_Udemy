import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text"

const Userinput = ({
    name, 
    value, 
    setValue, 
    autoCapitalize = "none", 
    keyboardType = "default", 
    secureTextEntry = false,
 }) => {
    return (        
            <View style={{ marginHorizontal: 20 }}>

                <Text semi medium style={{ marginBottom: 10 }}>{name}:</Text>

                <TextInput
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry} 
                style={{ 
                    borderBottomWidth: 0.8,
                    height: 48,
                    borderColor:"#000",
                    borderRadius:2,
                    marginBottom:20,
                    padding:10,
                    }}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    />

            </View>
    )
}

export default Userinput;