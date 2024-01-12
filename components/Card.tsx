interface CardProps {
  title: string;
  src: string;
  description: string;
  link: string;
  color: string;
}
export default function Card({
  title,
  src,
  description,
  link,
  color,
}: CardProps) {
  return (
    <div className={` sticky top-0 h-[100vh] flex items-center justify-center`}>
      <div
        style={{ backgroundColor: color }}
        className="flex flex-col w-[1000px] h-[500px] rounded-3xl p-12 origin-top"
      >
        <h2 className=" text-center m-0 text-2xl">{title}</h2>
        <div className="body flex h-full mt-12 gap-12">
            <div className="description w-[40%] relative top-[10%]">{description}</div>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}
