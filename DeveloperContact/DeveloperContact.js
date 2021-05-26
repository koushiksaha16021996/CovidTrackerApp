import React from 'react'
import { Text, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';

export default function DeveloperContact() {
    const insets = useSafeArea();
    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Text>developer contact</Text>
        </View>
    )
}
