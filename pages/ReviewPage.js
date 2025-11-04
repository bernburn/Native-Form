import {View, Text, Button, Alert} from "react-native";
import { s } from "../styles";
import axios from "axios"

const APIURL = "https://project101-k5nv.onrender.com"

export default function ReviewPage({route, navigation}){


const {formData} = route.params;
    const handleSubmit = async () => {
        try {
            const response = await axios.post(APIURL,"/signapp/api/register/", formData);
            Alert.alert("Success", "User registered successfully");
            navigation.getBack();
        }catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    }
    return (
        <View style={s.container}>
            <Text style={s.text}>Review Information</Text>

            <Text style={s.textInput}>First Name: {formData.first_name}</Text>
            <Text style={s.textInput}>Last Name: {formData.last_name}</Text>
            <Text style={s.textInput}>Email: {formData.email}</Text>
            <Text style={s.textInput}>Password: {formData.password}</Text>
            <Text style={s.textInput}>Gender: {formData.gender}</Text>

            <Button title="Go Back to Edit" onPress={() => navigation.goBack()}/>
            <Button title="Submit" onPress={handleSubmit}/>
        </View>
    )
}