import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="My Note Taking App">
      <div className=" bg-slate-100 w-full h-full padding">
        <h1 className="text-black text-5xl" data-testid="heading">
          Hello Isaac
        </h1>
        <p>Add a new note</p>
      </div>
    </Layout>
  );
}
