import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackIcon({ width = 16, height = 16 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7z"
        fill="#3A3541"
        fillOpacity={0.87}
      />
    </Svg>
  );
}

export default BackIcon;
