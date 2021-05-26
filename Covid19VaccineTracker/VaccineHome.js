import React from 'react'
import { Text, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';

export default function VaccineHome() {
    const insets = useSafeArea();
    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Text>vaccine home</Text>
        </View>
    )
}
