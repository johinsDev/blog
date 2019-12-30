import Layout from "../../components/layout";
import Contact from "../../components/contact";

export default function Blog() {
  return (
    <Layout>
      <section className="flex flex-1 flex-col">
        <div className="container">
          <img src="/post-1.png" alt="single-post" />

          <div className="md:container">
            <h3 className="text-xl mt-10 mb-4 font-bold">Noticias</h3>

            <hr />

            <h1 className="text-2xl font-bold mt-4 mb-8 md:text-3xl">
              Titulo del blog post
            </h1>

            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p className="text-justify mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>

            <p className="text-justify mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>

        <Contact />
      </section>
    </Layout>
  );
}
