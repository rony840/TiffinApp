import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const frmButton = props =>{
    const {btStyle,title,btTxt,onPress} = props;
    return(
        <TouchableOpacity
            onPress={onPress}>
            <View style={{...styles.btn,...btStyle}}>
            <Text style={{...styles.btnText,...btTxt}}>{title||"Button Name"}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#d39900',
        borderColor: '#075eec',
        marginBottom: 20
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
});

export default frmButton;