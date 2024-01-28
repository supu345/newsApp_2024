import React from "react";
import parse from "html-react-parser";
import PlainLayout from "../components/Master/Plain-Layout";

const metadata = {
  title: "privacy",
  description: "privacy desc",
};

async function getData() {
  return (
    await (await fetch(`${process.env.HOST}/api/policy?type=privacy`)).json()
  )["data"];
}

const Page = async () => {
  let data = await getData();
  return (
    <PlainLayout>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card p-4">{parse(data[0]["long_des"])}</div>
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default Page;
