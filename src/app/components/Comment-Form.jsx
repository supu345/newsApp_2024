"use client";
import React, { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";
import Cookies from "js-cookie";
import Link from "next/link";

const CommentForm = () => {
  let [data, setData] = useState({ postID: "", descriptions: "" });
  const [submit, setSubmit] = useState(false);
  let [login, SetLogin] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      SetLogin(true);
    } else {
      SetLogin(false);
    }
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 p-4">
          <h5 className="mb-3">Write Yours</h5>
          <textarea
            rows={6}
            onChange={(e) => {
              inputOnChange("descriptions", e.target.value);
            }}
            className="form-control mb-2"
          />
          {login ? (
            <SubmitButton
              className="btn btn-danger mt-3"
              submit={submit}
              text="Submit"
            />
          ) : (
            <Link href="/login">Please login first</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
