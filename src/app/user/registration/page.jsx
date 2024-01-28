import SignUpForm from "@/app/components/user/SignUpForm";
import React from "react";

const metadata = {
  title: "registration",
  description: "registration desc",
};
const page = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default page;
