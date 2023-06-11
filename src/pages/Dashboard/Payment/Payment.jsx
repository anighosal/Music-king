import React from "react";
import { Helmet } from "react-helmet-async";
import useMySelect from "../../../hooks/useMySelect";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./ChechoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [singleClass] = useMySelect();

  const classPrice = singleClass.classPrice;
  console.log(singleClass);

  return (
    <div>
      <Helmet>
        <title>Music King | Payment</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl">payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          singleClass={singleClass}
          classPrice={classPrice}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
