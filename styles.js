import { StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        margin: "auto",
        width: "400px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        paddingBottom: "10px"
    },
    text: {
        width: "100%",
        textAlign: "center",
        backgroundColor: "#b1ebdcff",
        fontSize: "30px",
        marginBottom: "30px"
    },
    textInput: {
        width: "80%",
        height: "10%",
        backgroundColor: "#f3f0f0ff",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "solid 1px #d1cfcfff",
        boxSizing: "border-box",
        padding: "10px",
    },
    Card: {
        padding: "20px",
        width: "400px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        marginBottom: "15px",
    },
    BoldText: {
        fontSize: "20px",
        fontWeight: "800"
    },
    SmallText: {
        fontSize: "15px",
        fontWeight: "500"
    },
    userContainer: {
        margin: "auto"
    },
    title: {
        fontSize: "25px",
        fontWeight: "700",
        textAlign: "center",
        padding: "20px"
    }
})

