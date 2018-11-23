import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Song } from "./components/Song";
import firebase from "firebase";

type Props = {};
export default class App extends Component<Props> {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyDTtwwDTeB_xyJd-icmoU0j2Ni7O9CNRQI",
            authDomain: "guitartracker-3863d.firebaseapp.com",
            databaseURL: "https://guitartracker-3863d.firebaseio.com",
            projectId: "guitartracker-3863d",
            storageBucket: "guitartracker-3863d.appspot.com",
            messagingSenderId: "817606034857"
        };
        firebase.initializeApp(config);

        //Create references
        const dbRefObject = firebase
            .database()
            .ref()
            .child("songs"); //Määrittää mikä db osa haetaan

        //Sync object changes
        dbRefObject.on("value", snap => console.log(snap.val()));

        console.log(firebase);
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: "#1a1a1a" //Hiilenharmaa tausta
                }}>
                <View
                    style={{ backgroundColor: "white", flexDirection: "row" }}>
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 20,
                            backgroundColor: "white",
                            flex: 4
                        }}>
                        🎸tracker 2018 v.0.3
                    </Text>
                    <Text
                        style={{
                            backgroundColor: "white",
                            flex: 1,
                            textAlign: "right",
                            marginTop: 5,
                            marginRight: 5
                        }}
                        onPress={() => alert("TODO :)")}>
                        Profile
                    </Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={[
                            { name: "Melissa", hardness: 5, mastered: false },
                            {
                                name: "Darude sandstorm",
                                hardness: 5,
                                mastered: true
                            },
                            {
                                name: "Killing time",
                                hardness: 3,
                                mastered: false
                            },
                            {
                                name: "In the name of GOD",
                                hardness: 5,
                                mastered: false
                            },
                            {
                                name: "Freedom to Mars",
                                hardness: 2,
                                mastered: true
                            },
                            {
                                name: "For the lord",
                                hardness: 5,
                                mastered: false
                            },
                            {
                                name: "Asians in japan",
                                hardness: 5,
                                mastered: false
                            },
                            { name: "Kill bill", hardness: 5, mastered: true },
                            {
                                name: "Bae bae bam",
                                hardness: 5,
                                mastered: false
                            }
                        ]}
                        renderItem={({ item }) => <Song song={item} />}
                    />
                </View>
            </View>
        );
    }
}
