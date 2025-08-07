import React from "react";
import { CreditCard, PaymentForm, GooglePay } from "react-square-web-payments-sdk";

const PaymentFormComponent = () => {
	return (
		<PaymentForm
			/**
			 * Identifies the calling form with a verified application ID generated from
			 * the Square Application Dashboard.
			 */
			createPaymentRequest={() => ({
				currencyCode: "GBP",
			})}
			applicationId="sandbox-sq0idb-icUuzgSjTcf1c73psgPW1w"
			/**
			 * Invoked when payment form receives the result of a tokenize generation
			 * request. The result will be a valid credit card or wallet token, or an error.
			 */
			cardTokenizeResponseReceived={(token, buyer) => {
				console.info({ token, buyer });
			}}
			/**
			 * This function enable the Strong Customer Authentication (SCA) flow
			 *
			 * We strongly recommend use this function to verify the buyer and reduce
			 * the chance of fraudulent transactions.
			 */
			createVerificationDetails={() => ({
				amount: "1.00",
				/* collected from the buyer */
				billingContact: {
					addressLines: ["123 Main Street", "Apartment 1"],
					familyName: "Doe",
					givenName: "John",
					countryCode: "GB",
					city: "London",
				},
				currencyCode: "GBP",
				intent: "CHARGE",
			})}
			locationId="L669W5A3NHA5N"
		>
			<CreditCard />
			<GooglePay />
		</PaymentForm>
	);
};

export default PaymentFormComponent;
