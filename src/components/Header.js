import {View, Text, StyleSheet} from 'react-native';

const Header = props =>{
    const {title, style,TxtStyle} = props;
    return(
        <View style={{...styles.headerContainer,...style}}>
            <Text style={{...styles.headerText,...TxtStyle}}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    backgroundColor: '#d39900',
  },
  headerText: {
    fontWeight:"bold",
    fontSize:20,

  }

});


export default Header;