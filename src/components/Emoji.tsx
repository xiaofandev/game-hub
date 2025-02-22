import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.svg";
import meh from "../assets/meh.svg";
import thumbsUp from "../assets/thumbs-up.png";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: string]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "recommend", boxSize: "24px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "20px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
