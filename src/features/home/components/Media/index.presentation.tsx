import { FC } from "react";

interface MediaProps {
  path: string;
}

const Media: FC<MediaProps> = () => {
  return (
    <>
      <img
        src="your_image_url.jpg"
        alt="Your Image"
        style={{ width: 100, height: 100 }}
      />
    </>
  );
};
