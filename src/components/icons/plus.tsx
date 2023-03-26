import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlusIcon({ width = 14, height = 14 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path d="M14 8H8v6H6V8H0V6h6V0h2v6h6v2z" fill="#fff" />
    </Svg>
  );
}

export default PlusIcon;
