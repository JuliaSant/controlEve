import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{flex:1}}>
        <View>
        {props.goHome ? 
                <Button
                    title="Home" 
                    onPress={() => {
                        props.navigation.navigate(props.goHome)
                    }}
                /> 
            : false}

            {props.go ? 
                <Button
                    title="Login" 
                    onPress={() => {
                        props.navigation.navigate(props.go)
                    }}
                /> 
            : false}
        </View>

        <View style={{flex:1}}>
            {props.children}
        </View>
    </View>
)