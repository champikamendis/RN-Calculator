import { View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import HeaderPanel from '../components/HeaderPanel';
import TextBox from '../components/TextBox';
import CalButton from '../components/CalButton';
import { FlatList } from 'react-native';


const CalculatorHome = () => {
    const [ number, setNumber ] = useState([
        {name:'1', key:'1'},
        {name:'2', key:'2'},
        {name:'3', key:'3'},
        {name:'4', key:'4'},
        {name:'5', key:'5'},
        {name:'6', key:'6'},
        {name:'7', key:'7'},
        {name:'8', key:'8'},
        {name:'9', key:'9'},
        {name:'.', key:'10'},
        {name:'0', key:'11'},
        {name:'=', key:'12'},
    ])
  return (
        <View>
            <HeaderPanel headerTitle="Hatch Calculator" />
            <TextBox />
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    <View style={styles.rowNumber}>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="7"/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="8"/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="9"/>
                        </View>
                        <View style={styles.eachOperator}> 
                            <CalButton buttonTitle="/"/>
                        </View>
                    </View>  

                    <View style={styles.rowNumber}>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="4"/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="5"/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="6"/>
                        </View>
                        <View style={styles.eachOperator}> 
                            <CalButton buttonTitle="*"/>
                        </View>
                    </View>                 

                    <View style={styles.rowNumber}>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="1"/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="2"/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="3"/>
                        </View>
                        <View style={styles.eachOperator}> 
                            <CalButton buttonTitle="-"/>
                        </View>
                    </View>

                    <View style={styles.rowNumber}>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="."/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="0"/>
                        </View>
                        <View style={styles.eachNumber}> 
                            <CalButton buttonTitle="="/>
                        </View>
                        <View style={styles.eachOperator}> 
                            <CalButton buttonTitle="+"/>
                        </View>

                    </View>






                        {/* { number.map((item) => {
                            return (
                                <View key={item.key} style={styles.eachNumber}> 
                                    <CalButton buttonTitle={item.name}/>
                                </View>
                            );
                        })} */}
                        
                    {/* <FlatList
                        numColumns={3}
                        data={number}
                        renderItem={({item}) => (
                            <View key={item.key} style={styles.eachNumber}>
                                <Text>{item.name}</Text>
                            </View>
                            
                        )} /> */}
                                                                 
                </View>
            </View>
        </View>    
  )
}

export default CalculatorHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:10
        
    },
    
    rowNumber: {
        flexDirection:'row',
        marginTop: 80, 
    },

    calculation: {
        flex: 112,
        backgroundColor: 'green',
        margin:5

    },

    buttons: {
        flex: 7,
        flexDirection: 'row',
        margin:10,
      
    },

    numbers: {
        flex: 8,
        backgroundColor: 'yellow',
        margin:10,   
    },

    eachNumber: {
        backgroundColor:'pink',
        padding: 15,
        margin : 10
    },

    eachOperator: {
        backgroundColor:'black',
        padding:15,
        margin: 10
        
    },

})