import React from "react";
import { View, Image, Text } from "react-native";

const ShipLogo = () => {

    return (
        <View style={{
            justifyContent:"center",
            alignItems:"center",
        }}>
            <Image source={require("../../assets/sea-7415664_1280.png")} 
            style={{
                width:200,
                height:218,
                marginVertical:15,
                borderRadius:50,
            }}/>
        </View>
    )
}

export default ShipLogo;
