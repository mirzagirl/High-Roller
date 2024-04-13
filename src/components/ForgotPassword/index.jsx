import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import ForgotForm from "./ForgotForm";
import useStyles from "./ForgotPassword.styles";

const ForgotPassword = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id1 = searchParams.get("id");
  const token1 = searchParams.get("token");
  const [token, setToken] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (token1) setToken(token1);
    if (id1) setId(id1);
  }, [token1, id1]);

  const { isLoggedIn } = useSelector((state) => state.authentication);
  useEffect(() => {
    if (isLoggedIn) {
      toast.error("User Already Logged In");
      navigate("/");
    }
    if (id1 === null || token1 === null || !id1 || !token1) {
      navigate("/");
    }
  }, []);

  return (
    <div className={classes.forgotPassword}>
      {!isLoggedIn && <ForgotForm id={id} token={token} />}
    </div>
  );
};

export default ForgotPassword;
