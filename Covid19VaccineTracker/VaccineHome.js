import { useIsFocused } from '@react-navigation/core';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';

export default function VaccineHome() {
    const insets = useSafeArea();
    // const isfocused= useIsFocused()
    // const [coviddata,setcoviddata] = useState([])
    // useEffect(()=>{
    //     axios.get("https://api.covid19india.org/v4/min/timeseries.min.json").then(res=>{
    //         setcoviddata(Object.entries(res.data))
    //     })
    // },[isfocused])
    // console.log(coviddata)
    // console.log(coviddata[0]?.[1].dates)
    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Text>vaccine home</Text>
        </View>
    )
}
