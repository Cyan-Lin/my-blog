import IconSvg from "@/components/svg";

function StudioLogo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <IconSvg
        fill={"var(--color-cyan)"}
        stroke={"var(--color-black)"}
        strokeWidth={2}
        size={40}
        type="blogger"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;
