import {View, Text, FlatList, Button} from "react-native"
import axios from 'axios'
import {useState, useEffect} from 'react'
import {s} from '../styles.js'

export default function UserListPage(){
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

    return(
        <View style={s.userContainer}>
            <Text style={s.title}>Edit User</Text>
            
        </View>
    )
}