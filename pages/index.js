import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

const Home = () => (
  <Layout removeFooter={true}>
    <div className="w-full h-full fixed">
      <section
        className="w-full h-full"
        style={{
          background: "url(Cover.png) center center fixed",
          backgroundSize: "cover"
        }}
      >
        <div
          style={{
            height: 350
          }}
          className="container flex flex-col items-center justify-between pt-20"
        >
          <p
            className="text-3xl font-bold text-center text-white font-roboto"
            style={{ letterSpacing: 10 }}
          >
            Conoce las novedades y noticias del mundo tech
          </p>
          <Link href="/blog">
            <a className="px-5 bg-primary h-12 font-bold text-lg flex items-center justify-center focus:outline-none">
              Entra ya!
            </a>
          </Link>
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
