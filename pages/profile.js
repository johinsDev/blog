import React from "react";
import Layout from "../components/layout";
import Contact from "../components/contact";

const Profile = () => (
  <Layout>
    <section className="flex flex-1 flex-col">
      <div className="bg-secondary py-20">
        <div className="flex flex-col items-center container md:flex-row">
          <img
            src="/profile-pic.jpg"
            className="w-full md:w-2/5"
            alt="avatar"
          />
          <div className="mt-10 md:mt-0 md:ml-10">
            <h3 className="text-2xl font-bold mb-5">Hola!</h3>

            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col container mb-10">
        <h3 className="text-center text-xl font-bold mt-10 mb-4">Proyectos</h3>

        <hr />

        <div className="flex items-center flex-wrap -mx-4">
          <div className="w-full sm:w-1/2  md:w-1/3 px-4">
            <h3 className="text-xl font-bold mt-10 mb-4">Titulo</h3>

            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="w-full sm:w-1/2  md:w-1/3 px-4">
            <h3 className="text-xl font-bold mt-10 mb-4">Titulo</h3>

            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="w-full sm:w-1/2  md:w-1/3 px-4">
            <h3 className="text-xl font-bold mt-10 mb-4">Titulo</h3>

            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  </Layout>
);

export default Profile;
