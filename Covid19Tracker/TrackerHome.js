import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useIsFocused } from '@react-navigation/core';
import { useSafeArea } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import { Grid, Col, Row } from 'react-native-easy-grid';


export default function TrackerHome() {
    const insets = useSafeArea();

    const [statesname, setstatesname]=useState([
        {
            stateID: "AN",
            stateName: "Andaman and Nicobar Islands"
        },
        {
            stateID: "AP",
            stateName: "Andhra Pradesh"
        },
        {
            stateID: "AR",
            stateName: "Arunachal Pradesh"
        },
        {
            stateID: "AS",
            stateName: "Assam "
        },
        {
            stateID: "BR",
            stateName: "Bihar"
        },
        {
            stateID: "CH",
            stateName: "Chandigarh"
        },
        {
            stateID: "CT",
            stateName: "Chattisgarh"
        },
        {
            stateID: "DL",
            stateName: "Delhi"
        },
        {
            stateID: "DN",
            stateName: "Dadra and Nagar Haveli"
        },
        {
            stateID: "GA",
            stateName: "Goa"
        },
        {
            stateID: "GJ",
            stateName: "Gujarat"
        },
        {
            stateID: "HP",
            stateName: "Himachal Pradesh "
        },
        {
            stateID: "HR",
            stateName: "Haryana"
        },
        {
            stateID: "JH",
            stateName: "Jharkhand"
        },
        {
            stateID: "JK",
            stateName: "Jammu and Kashmir"
        },
        {
            stateID: "KA",
            stateName: "Karnataka"
        },
        {
            stateID: "KL",
            stateName: "Kerala"
        },
        {
            stateID: "LA",
            stateName: "Ladakh"
        },
        {
            stateID: "LD",
            stateName: "Lakshadweep Islands"
        },
        {
            stateID: "MH",
            stateName: "Maharashtra"
        },
        {
            stateID: "ML",
            stateName: "Maharashtra"
        },
        {
            stateID: "MN",
            stateName: "Manipur"
        },
        {
            stateID: "MP",
            stateName: "Madhya Pradesh"
        },
        {
            stateID: "MZ",
            stateName: "Mizoram"
        },
        {
            stateID: "NL",
            stateName: "Nagaland"
        },
        {
            stateID: "OR",
            stateName: "Odisha"
        },
        {
            stateID: "PB",
            stateName: "Punjab"
        },
        {
            stateID: "PY",
            stateName: "Pondicherry"
        },
        {
            stateID: "RJ",
            stateName: "Rajasthan"
        },
        {
            stateID: "SK",
            stateName: "Sikkim"
        },
        {
            stateID: "TG",
            stateName: "Telangana"
        },
        {
            stateID: "TN",
            stateName: "Tamil Nadu "
        },
        {
            stateID: "TR",
            stateName: "Tripura"
        },
        {
            stateID: "UP",
            stateName: "Uttar Pradesh "
        },
        {
            stateID: "UT",
            stateName: "Uttarakhand"
        },
        {
            stateID: "WB",
            stateName: "West Bengal"
        },
    ])
    const isfocused= useIsFocused()
    const [data,setdata]= useState([])
    const [refineddata,setrefineddata]= useState([])
    const [totalcase,settotalcase]= useState([])
    useEffect(()=>{
      axios.get("https://api.covid19india.org/v4/min/data.min.json").then(res=>{
        const sdata=Object.entries(res.data).sort(function(a, b){return  b?.[1]?.total?.confirmed - a?.[1]?.total?.confirmed })
        setdata(sdata)
      })
    },[isfocused])
    useEffect(()=>{
        const newdata=data.filter(item=>item?.[0]!="TT")
        setrefineddata(newdata)
        const total=data.find(item=>item?.[0]=="TT")
        settotalcase(total)
    },[data])
    //console.log(data.AN.delta7.confirmed)
    // console.log(data[0]?.[0])
    // console.log(data)
    // console.log(refineddata)
     console.log(totalcase)
    // console.log(statesname)
    const fetchname=(statename)=>{
        const stName=statesname.find(item=>item?.stateID==statename)
        return stName.stateName
    }
    const activecase=(c,r,d,o)=>{
        if(o){
            return c-r-d-o
        }
        else{
            return c-r-d
        }
    }
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: '#161625', width: "100%",height:'100%'}}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <View style={style.titlecontainer}>  
                        <Text style={style.primarytitle}>COVID19</Text>
                        <Text style={style.secondarytitle}>INDIA</Text>
                    </View>
                </View>
                <View style={style.indigatorcard}>
                    <View style={style.confirmcard}>
                        <Text style={style.confirmtextstyle}>Confirmed</Text>
                        <Text style={{color: '#ae0c33' , fontSize:10, fontWeight:"bold"}}>+{totalcase?.[1]?.delta?.confirmed || 0}</Text>
                        <Text style={{color: '#ff073a' , fontSize:15 , fontWeight:"bold"}}>{totalcase?.[1]?.total?.confirmed || 0}</Text>
                    </View>
                    <View style={style.activecard}>
                        <Text style={style.activetextstyle}>Active</Text>
                        <Text style={{color: '#007bff94' , fontSize:10 , fontWeight:"bold"}}>{totalcase?.[1]?.delta?.confirmed-totalcase?.[1]?.delta?.recovered-totalcase?.[1]?.delta?.deceased-totalcase?.[1]?.delta?.other || 0}</Text>
                        <Text style={{color: '#007bff' , fontSize:15 , fontWeight:"bold"}}>{totalcase?.[1]?.total?.confirmed-totalcase?.[1]?.total?.recovered - totalcase?.[1]?.total?.deceased - totalcase?.[1]?.total?.other || 0}</Text>
                    </View>
                    <View style={style.recovercard}>
                        <Text style={style.recovertextstyle}>Recovered</Text>
                        <Text style={{color: '#237a3c' , fontSize:10, fontWeight:"bold"}}>+{totalcase?.[1]?.delta?.recovered || 0}</Text>
                        <Text style={{color: '#28a745' , fontSize:15 , fontWeight:"bold"}}>{totalcase?.[1]?.total?.recovered || 0}</Text>
                    </View>
                    <View style={style.decesedcard}>
                        <Text style={style.decesedtextstyle}>Decesed</Text>
                        <Text style={{color: '#4d525d' , fontSize:10, fontWeight:"bold"}}>+{totalcase?.[1]?.delta?.deceased || 0}</Text>
                        <Text style={{color: '#6b747c' , fontSize:15 , fontWeight:"bold"}}>{totalcase?.[1]?.total?.deceased || 0}</Text>
                    </View>
                </View>
                <View  style={style.vaccinecontainer}>
                    <View style={style.vaccinesubcontainer}>
                        <Ionicons name="shield-checkmark-sharp" size={18} color="#db5581" />
                        <Text style={style.vaccinetextstyle}>{totalcase?.[1]?.total?.vaccinated1 + totalcase?.[1]?.total?.vaccinated2 || 0} vaccine doses administered</Text>
                    </View>
                </View>

                <ScrollView horizontal={true} style={{width:Dimensions.get('window').width,marginTop:10}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={style.eachheaddingrow} >
                           <View style={style.headdingstatecell}>
                               <Text  style={style.headdingstatecelltext}>State</Text>
                           </View>
                           <View style={style.nrmlcell}>
                               <Text style={style.nrmlcelltext}>Confirm</Text>
                           </View>
                           <View style={style.nrmlcell}>
                               <Text style={style.nrmlcelltext}>Active</Text>
                           </View>
                           <View style={style.nrmlcell}>
                               <Text style={style.nrmlcelltext}>Recovered</Text>
                           </View>
                           <View style={style.nrmlcell}>
                               <Text style={style.nrmlcelltext}>Deceased</Text>
                           </View>
                        </View>

                        {refineddata.map((item,index)=>
                            <View style={style.eachheaddingrow} >
                            <View style={style.statecell}>
                                <Text  style={style.statecelltext}>{fetchname(item?.[0])}</Text>
                                <View style={{alignItems:'flex-end'}}>
                                    <Text style={{color:'#db5581'}} onStartShouldSetResponder={()=>alert(fetchname(item?.[0]))}>details here</Text>
                                </View>
                            </View>
                            <View style={style.cell}>
                                <Text style={style.celltext}>{item?.[1]?.total?.confirmed || 0}</Text>
                            </View>
                            <View style={style.cell}>
                                <Text style={style.celltext}>{activecase(item?.[1]?.total?.confirmed,item?.[1]?.total?.recovered,item?.[1]?.total?.deceased,item?.[1]?.total?.other) || 0}</Text>
                            </View>
                            <View style={style.cell}>
                                <Text style={style.celltext}>{item?.[1]?.total?.recovered || 0}</Text>
                            </View>
                            <View style={style.cell}>
                                <Text style={style.celltext}>{item?.[1]?.total?.deceased || 0}</Text>
                            </View>
                            </View>
                        )}
                        
                    </View>

                </ScrollView>
            </ScrollView>   
        </View>
        
    )
}
//item?.[1]?.total?.confirmed - item?.[1]?.total?.recovered - item?.[1]?.total?.deceased -item?.[1]?.total?.other
const style=StyleSheet.create({
    headdingstatecell:{
        alignItems:'center',
        width: 150,
        height:50,
        backgroundColor:'#1e1e30',
        margin: 2,
        borderRadius: 3,
        justifyContent: 'center'
    },
    headdingstatecelltext:{
        fontSize:18,
        color: '#d2e336'
    },
    nrmlcell:{
        alignItems:'center',
        width: 120,
        height:50,
        backgroundColor:'#1e1e30',
        margin: 2,
        borderRadius: 3,
        justifyContent: 'center'
    },
    nrmlcelltext:{
        fontSize:18,
        color: '#d2e336'
    },
    statecell:{
        alignItems:'center',
        width: 150,
        height:80,
        backgroundColor:'#1e1e30',
        margin: 2,
        borderRadius: 3,
        justifyContent: 'center',
        padding: 6
    },
    statecelltext:{
        fontSize:15,
        color: '#bdbdbd',
        fontWeight:'bold'
    },
    cell:{
        alignItems:'center',
        width: 120,
        height:80,
        backgroundColor:'#262735',
        margin: 2,
        borderRadius: 3,
        justifyContent: 'center'
    },
    celltext:{
        fontSize:15,
        color: '#bdbdbd'
    },
    eachheaddingrow:{
        flexDirection:'row',
    },
    vaccinecontainer:{
        alignItems: 'center',
        marginTop:6
    },
    vaccinesubcontainer:{
        backgroundColor:"#2e1e30",
        alignItems:'center',
        paddingStart: 6,
        paddingEnd:6,
        paddingTop: 4,
        paddingBottom:4,
        flexDirection:'row',
        borderRadius:3
    },
    
    vaccinetextstyle:{
        color:'#db5581',
        textAlign: 'center',
        marginStart:4,
        fontSize:12
    },
    titlecontainer:{
        flexDirection:'row',
        margin: 5
    },
    primarytitle:{
         color:'#bdbdbd',
         textAlign:'center',
         fontSize: 30,
         fontWeight:'bold'
    },
    secondarytitle:{
         color: '#4c75f2',
         textAlign:'center',
         fontSize: 30,
         fontWeight:'bold'
    },
    indigatorcard:{
         flexDirection:'row',
         width: '96%',
         padding : 2,
         height: 80
        //  paddingTop: '5px',
        //  paddingBottom:'5px',
        //  paddingEnd:'5px',
        //  paddingStart:'5px'
    },
    confirmcard:{
        backgroundColor: "#331427",
        width: '25%',
        alignItems: 'center',
        borderRadius:5,
        marginStart:2,
         marginEnd:2,
        padding: 3,
        justifyContent:'center',
        // paddingTop: '4px',
        // paddingBottom:'4px',
        // paddingEnd:'4px',
        // paddingStart:'4px',
        // marginTop:'2px',
        // marginBottom:'2px',
        // marginStart:'2px',
        // marginEnd:'2px'
    },
    confirmtextstyle:{
         color:'#ff073a',
         fontSize:16,
         fontWeight: "bold",
    },
    activecard:{
         backgroundColor: '#12284c',
         width: '25%',
         alignItems: 'center',
         borderRadius: 5,
         marginStart:2,
         marginEnd:2,
        padding: 3,
        justifyContent:'center'
        //  paddingTop: '4px',
        // paddingBottom:'4px',
        // paddingEnd:'4px',
        // paddingStart:'4px',
        // marginTop:'2px',
        // marginBottom:'2px',
        // marginStart:'2px',
        // marginEnd:'2px'
    },
    activetextstyle:{
         color:'#007bff',
         fontSize:16,
         fontWeight: "bold"
    },
    recovercard:{
         backgroundColor: '#1a382d',
         width: '25%',
         alignItems: 'center',
         borderRadius: 5,
         marginStart:2,
         marginEnd:2,
        padding: 3,
        justifyContent:'center'
        //  paddingTop: '4px',
        //  paddingBottom:'4px',
        //  paddingEnd:'4px',
        //  paddingStart:'4px',
        //  marginTop:'2px',
        //  marginBottom:'2px',
        //  marginStart:'2px',
        //  marginEnd:'2px'
    },
    recovertextstyle:{
         color:'#28a745',
         fontSize:16,
         fontWeight: "bold"
    },
    decesedcard:{
         backgroundColor: '#262735',
         width: '25%',
         alignItems: 'center',
         borderRadius: 5,
         marginStart:2,
         marginEnd:1,
        padding: 3,
        justifyContent:'center'
        //  paddingTop: '4px',
        // paddingBottom:'4px',
        // paddingEnd:'4px',
        // paddingStart:'4px',
        // marginTop:'2px',
        // marginBottom:'2px',
        // marginStart:'2px',
        // marginEnd:'2px'
    },
    decesedtextstyle:{
         color:'#6b747c',
         fontSize:16,
         fontWeight: "bold"
    },
}) 
