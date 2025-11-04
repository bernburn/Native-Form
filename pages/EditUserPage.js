import {View, Text, FlatList, Button, TextInput} from "react-native"
import axios from 'axios'
import {useState, useEffect} from 'react'
import {s} from '../styles.js'

const APIURL = "https://project101-k5nv.onrender.com"


export default function EditUserPage({route, navigation}) {
    const {user} = route.params;

    const [firstname, setFirstName] = useState(user.first_name);
    const [lastname, setLastName] = useState(user.last_name);
    const [user_email, setEmail] = useState(user.email);
    const [user_password, setPassword] = useState(user.password);
    const [user_gender, setGender] = useState(user.gender);


    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_password || !user_gender) {
            window.alert("Error", " Please fill up all required fields.");
            return;
        }

        axios
            .put(APIURL,`/signapp/api/users/${user.id}/`, {
                first_name: firstname,
                last_name: lastname,
                email: user_email,
                gender: user_gender,
                password: user_password,

            })
            .then(() => {
                window.alert("Success", "User updated Successfully!")
                navigation.goBack()
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error", "Failed to update")
            })
    }

    return(
        <View style={s.container}>
            <Text style={s.text}>Edit User</Text>

            <TextInput
            style={s.textInput}
            value={firstname}
            onChangeText={setFirstName}>
            </TextInput>
            <TextInput
            style={s.textInput}
            value={lastname}
            onChangeText={setLastName}>
            </TextInput>
            <TextInput
            style={s.textInput}
            value={user_email}
            onChangeText={setEmail}>
            </TextInput>
            <TextInput
            style={s.textInput}
            value={user_gender}
            onChangeText={setGender}>
            </TextInput>
            <TextInput
            style={s.textInput}
            value={user_password}
            onChangeText={setPassword}>
            </TextInput>

            <View>
                <Button
                title="Update Record"
                onPress={handleUpdate}
                ></Button>
            </View>

        </View>
    )
}