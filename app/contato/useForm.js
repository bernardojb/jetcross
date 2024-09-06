"use client";
import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    organization: "",
    message: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const formatCurrency = (val) => {
    val = val.replace(/\D/g, "");
    if (val.length === 0) {
      return "";
    }
    val = (parseInt(val) / 100).toFixed(2);
    val = val.replace(".", ",");
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return "R$ " + val;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "budget") {
      formattedValue = formatCurrency(value);
    }

    setValues({
      ...values,
      [name]: formattedValue,
    });
  };

  const handlePress = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setLoading(true);

    if (
      (values.name,
      values.email,
      values.phone,
      values.message === null && values.name,
      values.email,
      values.phone,
      values.message === "")
    ) {
      setErrors(validate(values));
      setLoading(false);
    } else {
      console.log(isSubmitting);
      await fetch("/contato/send/", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (res) {
          console.log(res);
          setLoading(false);
        })
        .catch(function (err) {
          console.error(err);
        })
        .finally(() => {
          setSubmitting(true);
        });
    }
  };

  return {
    isSubmitting,
    handleChange,
    values,
    handlePress,
    errors,
    setValues,
    isLoading,
    setSubmitting,
  };
};

export default useForm;
