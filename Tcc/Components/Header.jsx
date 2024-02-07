import React from 'react'
import { View, Text , Image, StyleSheet} from 'react-native'

export default function Cima() {
  return (
<View style={styles.container}>
<View>
<Text>Hello,</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>Hello</Text>
</View>

{/*<Image source={require('../assets/29.png')}
style={{widht:40,height:190, borderRadius:100}}
/>*/}

</View>

    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    }
})
