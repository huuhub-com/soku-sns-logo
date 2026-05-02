import "./index.css";
import { Composition } from "remotion";
import { SokuSnsLogoVertical } from "./compositions/SokuSnsLogoVertical";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SokuSnsLogoVertical"
      component={SokuSnsLogoVertical}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
