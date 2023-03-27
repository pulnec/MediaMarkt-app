import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CheckIcon({ width = 12, height = 9 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 9" fill="none">
      <Path
        d="M4.25 6.432L1.818 4l-.829.822L4.25 8.083l7-7-.822-.822L4.25 6.432z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CheckIcon;
