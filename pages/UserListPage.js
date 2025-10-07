import {View, Text, FlatList} from "react-native"
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
            <Text style={s.title}>Registered User</Text>
            <FlatList data={users} keyExtractor={(item) => item.id.toString()} 
            renderItem={({item}) => (

                <View style={s.Card} >
                    <Text style={s.BoldText}>{item.first_name} {item.last_name}</Text>
                    <Text style={s.SmallText}>Email: {item.email}</Text>
                    <Text style={s.SmallText}>Gender: {item.gender}</Text>
                </View>

            )} />
        </View>
    )
}