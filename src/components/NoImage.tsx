import { FC, useMemo } from "react";

type NoImageType = "artist" | "artwork";

export const NoImageDiv: FC<{ type: NoImageType }> = ({ type }) => {
  const num = useMemo(() => Math.floor(Math.random() * 5) + 1, []);
  const noImageUrl = `url(/no-image/${type}${num}.png)`;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: noImageUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: `${
            type === "artwork"
              ? "rgba(101, 101, 101, 0.6)"
              : "rgba(101, 101, 101, 0.5)"
          }`,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span style={{ color: "white", fontSize: 16, lineHeight: 1 }}>
            No Image
          </span>
        </div>
      </div>
    </div>
  );
};
