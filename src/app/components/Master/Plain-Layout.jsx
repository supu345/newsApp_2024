import React from "react";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import { PrismaClient } from "@prisma/client";
import { Toaster } from "react-hot-toast";

async function getData() {
  const prisma = new PrismaClient();
  let socials = await prisma.socials.findMany();
  let categories = await prisma.categories.findMany();
  return { socials: socials, categories: categories };
}

const PlainLayout = async (props) => {
  const data = await getData();
  return (
    <>
      <AppNavBar data={data} />
      {props.children}
      <Toaster position="bottom-center" />
      <Footer data={data} />
    </>
  );
};

export default PlainLayout;
