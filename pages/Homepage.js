import {View, Text, Button} from "react-native"
import {s} from "../styles"

export default function Homepage({navigation}){
    return (
        <View style={s.container}>
            <Text style={s.text}>HOME PAGE</Text>
            <View>
                <Button title="Register" onPress={() => navigation.navigate('Register')}>
                </Button>
            </View>
        </View>
    )
}