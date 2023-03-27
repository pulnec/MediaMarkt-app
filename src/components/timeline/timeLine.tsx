import { View, Text } from "react-native";
import Icons from "../icons";
import {
  InformationContainer,
  Title,
  Detail,
  LineContainer,
  Line,
  Circle,
  ContainerBox,
  LineDisabled,
  CircleDisabled,
  TimeLineContainer,
} from "./timeLine.presets";

export default function TimeLine({ data = [] }: any) {
  const CheckCircle = () => {
    return (
      <Circle>
        <Icons.CheckIcon />
      </Circle>
    );
  };

  return (
    <TimeLineContainer>
      <ContainerBox>
        {data.map((item: any, index: number) => {
          const isLast = data.length - 1 === index;
          const nextValue =
            data[index + 1] !== undefined && data[index + 1].current;
          return (
            <LineContainer>
              {item.current ? <CheckCircle /> : <CircleDisabled />}
              {!isLast ? nextValue ? <Line /> : <LineDisabled /> : null}
            </LineContainer>
          );
        })}
      </ContainerBox>

      <ContainerBox>
        {data.map((item: any) => {
          return (
            <InformationContainer>
              <Title value={item.title} />
              <Detail value={item.detail1} />
              <Detail value={item.detail2} />
            </InformationContainer>
          );
        })}
      </ContainerBox>
    </TimeLineContainer>
  );
}
