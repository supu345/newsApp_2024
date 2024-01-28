import PlainLayout from "@/app/components/Master/Plain-Layout";
import LoginForm from "@/app/components/user/LoginForm";
import React from "react";

const metadata = {
  title: "login",
  description: "login desc",
};
const page = () => {
  return (
    <PlainLayout>
      <LoginForm />
    </PlainLayout>
  );
};

export default page;
