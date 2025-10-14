import {View, Text, FlatList, Button, Alert, ScrollView} from "react-native"
import axios from 'axios'
import {useState, useEffect} from 'react'
import {s} from '../styles.js'

export default function UserListPage({navigation}){
    const[users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/signapp/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
);
    const handleEdit = (user) => {
        navigation.navigate("EditUser", {user})
    }

    const handleDelete = (id) => {
        // Alert.alert(
        //     "Confirm Delete",
        //     "Are you sure you want to delete?"
        //     (
        //         {text: "Cancel", style:"cancel"},
        //         {
        //             text: "Delete",
        //             style: "Delete",
        //             onPress:() => {
        //                 axios.delete(`http://127.0.0.1:8000/signapp/api/users/${id}/`)
        //                 .then(() => {
        //                     Alert.alert(
        //                         "Success", "User Deleted Successfully"
        //                     );
                            
        //                 })
        //                 .catch((err) => {
        //                     console.error(err);
        //                     Alert.alert("Error", "Failed To Delete User")
        //                 });
        //             },
        //         }
        //     )
        // );

        axios.delete(`http://127.0.0.1:8000/signapp/api/users/${id}/`)

    };

    return(
        <View style={s.userContainer}>
            <Text style={s.title}>Registered User</Text>
            <FlatList data={users} keyExtractor={(item) => item.id.toString()} 
            renderItem={({item}) => (

                <View style={s.Card} >
                    <Text style={s.BoldText}>{item.first_name} {item.last_name}</Text>
                    <Text style={s.SmallText}>Email: {item.email}</Text>
                    <Text style={s.SmallText}>Gender: {item.gender}</Text>
                    <Button style={s.DELETE} color="#1ddd1dff" title="EDIT" onPress={() => handleEdit(item)}></Button>
                    <Button style={s.DELETE} color="#e61a1aff" title="DELETE" onPress={() => handleDelete(item.id)}></Button>
                </View>


            )} />
        </View>
    )
}