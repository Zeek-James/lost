import prisma from "@/lib/prisma";
import { Layout } from "@/components/Layout";

export async function getServerSideProps() {
  const users = await prisma.note.findMany();
  return {
    props: { initialUsers: users },
  };
  // return { props: { jhon: "" } };
}

export default function Home(props) {
  console.log(props);

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
