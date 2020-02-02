import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.getStartedText}>Video Test Screen</Text>

      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
        }}
        inFullscreen={true}
      />
    </ScrollView>
    
  );
}

LinksScreen.navigationOptions = {
  title: "Video"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
