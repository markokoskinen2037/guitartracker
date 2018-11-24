import React, { Component } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Song } from "./components/Song";
import YouTube from "react-native-youtube";

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            youtubeVideoId: "Bmwdr9ZAK2I"
        }; /* Default = mortal kombat :) */
    }

    changeVideoBeingPlayed = new_youtubeVideoId => {
        this.setState({ youtubeVideoId: new_youtubeVideoId });
        console.log("Changing song to " + new_youtubeVideoId);
    };

    render() {
        return (
            <View
                style={{
                    backgroundColor: "#1a1a1a" //Darkgray base for the whole app
                }}>
                <View
                    style={{
                        height: 30,
                        backgroundColor: "white",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                    <Text
                        style={styles.button}
                        onPress={() => alert("TODO :)")}>
                        Profile
                    </Text>
                    <Text
                        style={styles.button}
                        onPress={() => alert("TODO :)")}>
                        Favourites
                    </Text>
                    <Text
                        style={styles.button}
                        onPress={() => alert("TODO :)")}>
                        Add new song
                    </Text>
                </View>
                <YouTube
                    apiKey="AIzaSyBoBHTWCn2UUdpWHvXTm_wNle9trlgHo7c"
                    videoId={this.state.youtubeVideoId} // The YouTube video ID
                    play={true} // control playback of video with true/false
                    fullscreen={false} // control whether the video should play in fullscreen or inline
                    loop={true} // control whether the video should loop when ended
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: "stretch", height: 250 }}
                />
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={[
                            {
                                name: "Mortal Kombat",
                                videoId: "Bmwdr9ZAK2I",
                                hardness: 3,
                                mastered: false
                            },
                            {
                                name: "Requiem for a Dream",
                                videoId: "njMUxAFRUhk",
                                hardness: 1,
                                mastered: true
                            },
                            {
                                name: "We Will Rock You",
                                videoId: "c5cV7sc75dM",
                                hardness: 2,
                                mastered: false
                            },
                            {
                                name: "OMFG - Hello",
                                videoId: "dax0ygPqt98",
                                hardness: 3,
                                mastered: false
                            },
                            {
                                name:
                                    "Fullmetal Alchemist: Brotherhood OP 1 - Again",
                                videoId: "ACBO4k8WHk8",
                                hardness: 2,
                                mastered: false
                            },
                            {
                                name: "One Punch Man OP",
                                videoId: "XyJ6qzHXVqE",
                                hardness: 2,
                                mastered: true
                            },
                            {
                                name: "Nanatsu no Taizai OP 1",
                                videoId: "2J7a7PQWtgA",
                                hardness: 4,
                                mastered: false
                            },

                            {
                                name: "Mortal Kombat",
                                videoId: "Bmwdr9ZAK2I",
                                hardness: 3,
                                mastered: false
                            },
                            {
                                name: "Requiem for a Dream",
                                videoId: "njMUxAFRUhk",
                                hardness: 1,
                                mastered: true
                            },
                            {
                                name: "We Will Rock You",
                                videoId: "c5cV7sc75dM",
                                hardness: 2,
                                mastered: false
                            },
                            {
                                name: "OMFG - Hello",
                                videoId: "dax0ygPqt98",
                                hardness: 3,
                                mastered: false
                            },
                            {
                                name:
                                    "Fullmetal Alchemist: Brotherhood OP 1 - Again",
                                videoId: "ACBO4k8WHk8",
                                hardness: 2,
                                mastered: false
                            },
                            {
                                name: "One Punch Man OP",
                                videoId: "XyJ6qzHXVqE",
                                hardness: 2,
                                mastered: true
                            },
                            {
                                name: "Nanatsu no Taizai OP 1",
                                videoId: "2J7a7PQWtgA",
                                hardness: 4,
                                mastered: false
                            }
                        ]}
                        renderItem={({ item }) => (
                            <Song
                                playFunction={this.changeVideoBeingPlayed}
                                song={item}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        textAlign: "center"
    }
});
