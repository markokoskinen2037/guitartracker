import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet
} from "react-native";

export class Song extends Component {
    testFunction = () => {
        console.log("Play button tapped.");
        alert("Roger that");
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    padding: 7,
                    marginHorizontal: 10,
                    marginVertical: 5,
                    flexDirection: "row",
                    borderRadius: 5,
                    backgroundColor: "white"
                }}>
                <TouchableHighlight
                    style={{ flex: 1, marginRight: 5 }}
                    onPress={() =>
                        this.props.playFunction(this.props.song.videoId)
                    }>
                    <Image
                        style={{
                            flex: 1
                        }}
                        source={{
                            uri:
                                "https://img.youtube.com/vi/" +
                                this.props.song.videoId +
                                "/0.jpg"
                        }}
                    />
                </TouchableHighlight>

                <View style={{ flex: 2 }}>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Name: </Text>
                        {this.props.song.name}
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Hardness: </Text>
                        {this.props.song.hardness}
                    </Text>

                    {this.props.song.mastered ? (
                        <Text style={{ fontWeight: "bold" }}>
                            Mastered: 👍{" "}
                        </Text>
                    ) : (
                        <Text style={{ fontWeight: "bold" }}>
                            Mastered: 👎{" "}
                        </Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1"
    },
    logo: {
        backgroundColor: "#056ecf",
        height: 128,
        width: 128
    }
});

export default Song;
