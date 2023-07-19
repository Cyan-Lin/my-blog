export type TypeSvg = "return" | "blogger" | "upRightArrow";

type Props = {
  size: number;
  stroke: string;
  fill: string;
  strokeWidth: number;
  className?: string;
  type: TypeSvg;
};

function IconSvg(props: Props) {
  const { size, stroke, fill, strokeWidth, className, type } = props;

  const svgProps = {
    return: {
      attrs: {
        viewBox: "0 0 24 24",
        className: `svg-icon svg-icon--return ${className || ""}`,
      },
      dom: (
        <>
          <path d="M2.41,16.78H14.85A7.65,7.65,0,0,0,22.5,9.13h0a7.65,7.65,0,0,0-7.65-7.65H.5"></path>
          <polyline points="8.15 22.52 2.41 16.78 8.15 11.04"></polyline>
        </>
      ),
    },

    blogger: {
      attrs: {
        viewBox: "0 0 24 24",
        className: `svg-icon svg-icon--blogger ${className || ""}`,
      },
      dom: (
        <>
          <path
            className="cls-637b8512f95e86b59c57a110-1"
            d="M18.68,9.14V5.55a4,4,0,0,0-4-4H5.55a4,4,0,0,0-4,4.05V18.68A3.82,3.82,0,0,0,5.32,22.5H18.68a3.82,3.82,0,0,0,3.82-3.82V13a1.9,1.9,0,0,0-1.91-1.9h0A1.92,1.92,0,0,1,18.68,9.14Z"
          ></path>
          <rect
            className="cls-637b8512f95e86b59c57a110-1"
            x="6.27"
            y="6.27"
            width="7.64"
            height="3.82"
            rx="1.91"
          ></rect>
          <rect
            className="cls-637b8512f95e86b59c57a110-1"
            x="6.27"
            y="14.86"
            width="10.5"
            height="3.82"
            rx="1.91"
          ></rect>
        </>
      ),
    },
    upRightArrow: {
      attrs: {
        viewBox: "0 0 24 24",
        className: `svg-icon svg-icon--upRightArrow ${className || ""}`,
      },
      dom: (
        <>
          <line
            className="cls-63ce7424ea57ea6c838005a7-1"
            x1="22"
            y1="2"
            x2="2"
            y2="22"
          ></line>
          <polyline
            className="cls-63ce7424ea57ea6c838005a7-1"
            points="22 15.75 22 2 8.25 2"
          ></polyline>
        </>
      ),
    },
  };

  return (
    <svg
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svgProps[type].attrs}
    >
      {svgProps[type].dom}
    </svg>
  );
}

export default IconSvg;
