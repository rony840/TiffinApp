import {Text, StyleSheet} from 'react-native';

const formLabel = props =>{
    const {title,style} = props;
    return(
        <Text style={{...styles.frmLabel,...style}}>{title||"Enter a Label"}</Text>
    );
};

const styles = StyleSheet.create({
    frmLabel:{
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
});

export default formLabel;