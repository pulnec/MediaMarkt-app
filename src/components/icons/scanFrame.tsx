import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ScanFrame({ width = 324, height = 312 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 324 312" fill="none">
      <Path
        d="M3 73V31C3 15.536 15.536 3 31 3h42M249 3h44c15.464 0 28 12.536 28 28v44M73 309H31c-15.464 0-28-12.536-28-28v-42M321 235v46c0 15.464-12.536 28-28 28h-46"
        stroke="#DF0000"
        strokeWidth={6}
      />
    </Svg>
  );
}

export default ScanFrame;
