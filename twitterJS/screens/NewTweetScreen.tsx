import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import { AntDesign } from "@expo/vector-icons";
import Colors from '../constants/Colors';

import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePicture from '../components/ProfilePicture';

export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const onPostTweet = () => {

    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name="close" size={30} color={Colors.light.tint} />
                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer}>
                <ProfilePicture image={'https://instagram.fbtz1-3.fna.fbcdn.net/v/t51.2885-19/s150x150/39871828_397519727447244_6140278751818153984_n.jpg?_nc_ht=instagram.fbtz1-3.fna.fbcdn.net&_nc_ohc=rzbyrV88mL0AX_dsrXa&tp=1&oh=4225c944e1d2b1ad801f892359f65f72&oe=600A504F'}></ProfilePicture>
                <View style={styles.inputsContainer}>
                    <TextInput
                        value={tweet}
                        onChangeText={(value) => setTweet(value)}
                        multiline={true}
                        numberOfLines={3}
                        style={styles.tweetInput}
                        placeholder={"What's happening?"}
                    ></TextInput>
                    <TextInput
                        value={imageUrl}
                        onChangeText={(value) => setImageUrl(value)}
                        style={styles.imageInput}
                        placeholder={"Image url (optional)"}></TextInput>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }, newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    }, inputsContainer: {
        marginLeft: 10,
    }, tweetInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 20,
    }, imageInput: {

    }

});
