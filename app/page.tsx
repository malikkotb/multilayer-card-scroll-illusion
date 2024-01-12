import Card from "@/components/Card";
import { projects } from "../data";
export default function Home() {
  return (
    <main className="my-[50vh]">
      {projects.map((project, index) => {
        return <Card key={index} {...project} />;
      })}
    </main>
  );
}
