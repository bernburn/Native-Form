import {View, Text, Button} from "react-native"
import {s} from "../styles"
import {useState} from "react"
import { TextInput } from "react-native-web"
import { ThemeContext } from "@react-navigation/native";

export default function RegisterPage({navigation}){
const [formData, setFormData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    gender:""
});

const handleChange = (field, value) =>{
    setFormData({...formData, [field]: value})
};

    return (
        <View style={s.container}>
            <Text style={s.text}>REGISTRATION PAGE</Text>
            <TextInput style={s.textInput} placeholder="First Name" value={formData.first_name} onChangeText={(text) => handleChange("first_name", text)}></TextInput>
            <TextInput style={s.textInput} placeholder="Last Name" value={formData.last_name} onChangeText={(text) => handleChange("last_name", text)}></TextInput>
            <TextInput style={s.textInput} placeholder="Email" value={formData.email} onChangeText={(text) => handleChange("email", text)}></TextInput>
            <TextInput style={s.textInput} placeholder="Password" value={formData.password} secureTextEntry onChangeText={(text) => handleChange("password", text)}></TextInput>
            <TextInput style={s.textInput} placeholder="Gender" value={formData.gender} onChangeText={(text) => handleChange("gender", text)}></TextInput>
            <Button title="Submit" onPress={() => navigation.navigate('Review', {formData})}/>
        </View>
    )
}