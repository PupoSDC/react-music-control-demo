/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MusicControl from 'react-native-music-control'
import Video from 'react-native-video';

const DEMO_VIDEO = "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4";

const App = () => {
  const [paused, setPaused] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.fullScreen}
        onPress={() => {
          console.log("video paused: ", !paused);
          setPaused(paused => !paused)
        }}
      >
        <Video
          source={require("./demoVideo.mp4")}
          paused={paused}
          style={styles.fullScreen}
          repeat={true}
          playInBackground={true}
          playWhenInactive={true}
          ignoreSilentSwitch={'ignore'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
