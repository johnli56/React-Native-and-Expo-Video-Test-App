import React from "react";
import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Video } from "expo-av";

import VideoPlayer from "expo-video-player";
/*
<ScrollView style={styles.container}>
<Text style={styles.getStartedText}>Video Test Screen</Text>


<VideoPlayer
  videoProps={{
    shouldPlay: false,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    source: {
      uri:
        "http://d2khmbg2rb4k4p.cloudfront.net/e3c815db-fae3-4774-b918-de97b9841910/mp4/workout_test_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr.mp4"
    }
  }}
  inFullscreen={false}
  showControlsOnLoad={true}
  showFullscreenButton={false}
  style={styles.video}
/>

<Video
  source={{
    uri:
      "http://d2khmbg2rb4k4p.cloudfront.net/e3c815db-fae3-4774-b918-de97b9841910/mp4/workout_test_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr.mp4"
  }}
  shouldPlay
  useNativeControls
  usePoster
  volume={0.1}
  resizeMode="contain"
  style={styles.video}
/>
</ScrollView>
*/
export default function LinksScreen() {
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <View style={{ flex: 0.7, justifyContent: "center", backgroundColor: "black"}}>
        <Video
          source={{
            uri:
              "http://d2khmbg2rb4k4p.cloudfront.net/e3c815db-fae3-4774-b918-de97b9841910/mp4/workout_test_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr.mp4"
          }}
          isMuted={true}
          shouldPlay
          isLooping
          resizeMode="contain"
          usePoster={true}
          useNativeControls={true}
          style={{flex: 1}}
        />
      </View>
      
      <View style={{ flex: 0.1 }} />
      <TouchableOpacity style={{ flex: 0.3, paddingHorizontal: 10, paddingVertical: 10 }}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightblue"
          }}
        >
          <Text>Next</Text>
        </View>
      </TouchableOpacity>
    </View>

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
  },
  video: {
    
  }
});

