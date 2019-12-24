import React from "react";
import Layout from "../../components/layout";
import Link from "next/link";

const Blog = () => (
  <Layout>
    <section className="w-full bg-secondary py-10">
      <div className="container">
        <h3 className="mb-4 font-bold border-b text-xl">Noticias</h3>
        <div className="flex">
          <img src="main-news-img.png" alt="image-blog" className="w-1/2" />

          <div className="flex flex-col w-1/2 pl-10">
            <h2 className="font-bold text-2xl mb-4">Titulo del blogpost</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="mt-8">
              <Link href="blog/1">
                <a
                  className="border border-primary px-5 py-2 flex items-center justify-center rounded-sm"
                  style={{
                    width: "fit-content"
                  }}
                >
                  Leer mas
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container my-10">
      <h3 className="text-center font-bold text-xl">Ultimas noticias</h3>
      <hr className="my-5" />
      <div className="flex flex-wrap -mx-4 px-8">
        {new Array(6).fill(0).map((_, index) => {
          return (
            <article className="w-1/3 px-4 flex flex-col mb-10" key={index}>
              <img src={`post-${Math.ceil((index + 1) / 2)}.png`} alt="" />
              <h4 className="my-4 font-semibold">Titulo del post</h4>
              <p className="text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="mt-5">
                <Link href="blog/1">
                  <a
                    className="border border-primary px-5 py-2 flex items-center justify-center rounded-sm"
                    style={{
                      width: "fit-content"
                    }}
                  >
                    Ver mas
                  </a>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  </Layout>
);

export default Blog;
