import Link from "next/link";
import IconSvg from "./svg";

function StudioNavbar(props: any) {
  return (
    <div className="">
      <div className="bg-[#101112] p-5">
        <Link href="/" className="text-[lightCyan] flex items-center">
          <IconSvg
            type="return"
            size={20}
            fill="var(--color-black)"
            stroke="var(--color-light-cyan)"
            strokeWidth={2}
            className="mr-2"
          />
          Go To Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavbar;
