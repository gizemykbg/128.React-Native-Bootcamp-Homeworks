import { StyleSheet } from "react-native";
import spacing from "../../styles/spacing";

export default StyleSheet.create({
    container: {
        margin: spacing.micro,
        backgroundColor: '#212121',
        borderRadius: spacing.small,
        maxHeight: 50,
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: '#bdbdbd',
        fontSize: spacing.big,
        padding: spacing.normal
    }
})