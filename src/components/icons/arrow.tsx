import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowIcon({ width = 10, height = 8 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 8" fill="none">
      <Path d="M5 8L.67.5h8.66L5 8z" fill="#D9D9D9" />
    </Svg>
  );
}

export default ArrowIcon;
