import { StyleSheet, Text, TextInput, View } from "react-native";

const isNull = (el) => el === null || el === undefined || el === "";

function Field({label, type, value, setValue, style}) {
    const valueNull = isNull(value);

    return (
        <View style={[styles.field, style]}>
            {
                label && valueNull && (
                    <Text htmlFor={label + "__label"} style={styles.label}>{label}</Text>
                )
            }
            <TextInput style={styles.input} secureTextEntry={type === "password"} value={value} onChange={(e) => { setValue(e.target.value)}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    field: {

    },
    label: {
        position: 'absolute',
        top: '1rem',
        left: '1.5rem',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    input: {
        padding: '1rem',
        borderRadius: '25px',
        borderColor: 'white',
        borderWidth: 1,
        width: '100%',
        color: "#FFF"
    }
})


export default Field;