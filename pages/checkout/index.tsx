import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

import commerce from "../../lib/commerce";
import { AddressForm, PaymentForm } from "../../components/";
import theme from "../../src/theme";
import { useCommerce } from "../../context/CommerceContext";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({}) => {
  const { cart, handleCaptureCheckout, order, errorMessage } = useCommerce();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const history = useRouter();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  if (cart.id) {
    var generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch {
        if (activeStep !== steps.length) history.push("/");
      }
    };
  }

  useEffect(() => {
    generateToken();
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </Typography>
          <Divider
            sx={{
              margin: "20px 0",
            }}
          />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button variant="outlined" type="button">
          <Link href="/">Back to home</Link>
        </Button>
      </>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  if (errorMessage) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {errorMessage}</Typography>
        <br />

        <Button variant="outlined" type="button">
          <Link href="/">Back to home</Link>
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} test={test} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        shippingData={shippingData}
        onCaptureCheckout={() => {
          handleCaptureCheckout();
        }}
      />
    );

  return (
    <>
      <CssBaseline />
      <Box component="div" />
      <Box
        component="main"
        sx={{
          marginTop: "5%",
          width: "auto",
          marginLeft: "16px",
          marginRight: "16px",
          [theme.breakpoints.up(600 + 16 * 2)]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <main>
          <Paper
            sx={{
              marginTop: "24px",
              marginBottom: "24px",
              padding: "16px",
              [theme.breakpoints.down("xs")]: {
                width: "100%",
                marginTop: 60,
              },
              [theme.breakpoints.up(600 + 24 * 2)]: {
                marginTop: "48px",
                marginBottom: "48px",
                padding: "24px",
              },
            }}
          >
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper
              activeStep={activeStep}
              sx={{
                // padding: theme.spacing(3, 0, 5),
                paddingTop: "24px",
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingBottom: "40px",
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}
          </Paper>
        </main>
      </Box>
    </>
  );
};

export default Checkout;
