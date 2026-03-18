import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../theme";

export function BackgroundBlobs() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <LinearGradient
        colors={["rgba(160,131,249,0.40)", "rgba(160,131,249,0.00)"]}
        start={{ x: 0.2, y: 0.1 }}
        end={{ x: 0.9, y: 0.8 }}
        style={[styles.blob, styles.blobA]}
      />
      <LinearGradient
        colors={["rgba(167,199,161,0.26)", "rgba(167,199,161,0.00)"]}
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        style={[styles.blob, styles.blobB]}
      />
      <LinearGradient
        colors={[COLORS.background, "rgba(222,210,255,0.16)", COLORS.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blob: { position: "absolute", borderRadius: 999 },
  blobA: { width: 520, height: 520, top: -260, left: -180 },
  blobB: { width: 520, height: 520, bottom: -280, right: -220 },
});