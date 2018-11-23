import React, { Component } from "react";

import { View, Text } from "react-native";

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
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "lightgray",
                        marginRight: 10,
                        height: 65
                    }}>
                    <Text
                        onPress={() => this.testFunction()}
                        style={{
                            flex: 1,
                            textAlignVertical: "center",
                            textAlign: "center"
                        }}>
                        PLAY
                    </Text>
                </View>

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

export default Song;
