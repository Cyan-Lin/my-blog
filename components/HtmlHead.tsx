type Props = {
  title: string;
};

export default function Head(props: Props) {
  const { title } = props;

  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* 想換favicon? 直接把src/app/favicon.ico 換成你要的圖片(next13只吃favicon.ico) */}
    </>
  );
}

// 不需要這個component了
