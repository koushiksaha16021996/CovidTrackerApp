import React from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';
import { initialValues, onSubmit , validate} from './Inputdata'
import { Formik, useFormik } from 'formik';

export default function DeveloperContact() {
    const insets = useSafeArea();
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        // <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
        //     <View>
        //         <TextInput placeholder="Enter your name" id="name" name="name" value={formik.values.name} onChange={formik.handleChange('name')} />
        //         <TextInput placeholder="Enter your email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange('email')} />
        //         <TextInput placeholder="Enter your message" id="message" name="message" value={formik.values.message} onChange={formik.handleChange('message')} />
        //         <TouchableOpacity onPress={formik.handleSubmit}>
        //             <Text>Submit</Text>
        //         </TouchableOpacity>
        //         <Button onPress={formik.handleSubmit} title="Submit" />
        //     </View>
        // </View>
            <View  style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
                <Formik
                    initialValues={{name:'', email: '' ,message:''}}
                    onSubmit={values => alert(values.name +" "+ values.email +" " + values.message)}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <View>
                            <TextInput placeholder="Enter your name" id="name" name="name" value={values.name} onChangeText={handleChange('name')} />
                            <TextInput placeholder="Enter your email" id="email" name="email" value={values.email} onChangeText={handleChange('email')} />
                            <TextInput placeholder="Enter your message" id="message" name="message" value={values.message} onChangeText={handleChange('message')} />
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>
                    )}
                </Formik>
            </View>
    )
}
