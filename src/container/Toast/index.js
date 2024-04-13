import React, { useEffect } from "react";

import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { resetState } from "../../redux-saga/redux/toast";

const Toast = () => {
  const { msg, tKey, success, error } = useSelector((state) => state.toast);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (msg && success) {
      toast.success(msg);
    }
    if (msg && error) {
      toast.error(msg);
    }
    if (tKey && success) {
      toast.success(t(tKey));
    }
    if (tKey && error) {
      toast.error(t(tKey));
    }
    dispatch(resetState());
  }, [dispatch, msg, tKey, success, error, t]);

  return <></>;
};

export default Toast;
