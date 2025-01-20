import { TextInput, StyleSheet } from "react-native"

const TxtInput = props =>{
    const {style,placeholder,keybrdtype,secure, onChange} = props;
    return(
        <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={onChange}
              keyboardType={keybrdtype||"email-address"}
              placeholder={placeholder||"Enter your placeholder"}
              placeholderTextColor="#6b7280"
              secureTextEntry={false}
              style={{...styles.txtInput,...style}}
               />
    );

};

const styles = StyleSheet.create({
    txtInput:{
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
        marginBottom: 20
    },
});

export default TxtInput;