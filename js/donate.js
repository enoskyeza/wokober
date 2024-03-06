/* ---------------------
  Jquery to validate Donate form and submit to flutterwave
  --------------------- */
(function ($) {
  "use strict";

  //When Document fully loads the Js
  $(document).ready(function () {
    $("#donateForm").on("submit", function (evt) {
      evt.preventDefault();
      let form = this
      var form_data = new FormData(form);
     
      makePayment(form_data);
    });
  });

  function generateTxRef() {
    const timestamp = new Date().getTime().toString();
    const randomNum = Math.floor(Math.random() * 90000) + 10000; // generates a random number between 10000 and 99999
    const txRef = `TX${timestamp}${randomNum}`;
    return txRef;
  }

  function makePayment(formData) {
    const payload = {
      // public_key: "FLWPUBK_TEST-78135ef243cacdb926b16a903a38ec58-X",
      public_key: "FLWPUBK-e6e785df3edd3d1e4a5502ae39fb7ea2-X",
      tx_ref: generateTxRef(),
      amount: parseFloat(formData.get("amount").replace(/,/g, "")),
      currency: formData.get("currency"),
      // payment_options: "card, ussd, mobilemoneyuganda",
      // redirect_url: "https://www.wokober.com/donate.html",
      callback: function (payment) {
        console.log(payment);
        if (payment.transaction_id) {
          const transactionId = payment.transaction_id;
          $.ajax({
            url: "src/ProcessPayment.php",
            type: "GET",
            data: {
              transactionId: transactionId
            },
            success: function (response) {
              console.log("Validation response:", response);
              // Handle success response here
            },
            error: function (xhr, status, error) {
              console.error("Validation error:", error);
              // Handle error here
            }
          });
        } else {
          console.error("Transaction ID not found in payment data");
          // Handle case where transaction ID is missing
        }

      },
      meta: {
        address_line1: formData.get("address"),
        // city: formData.get("city"),
        // state: formData.get("state"),
        // postal_code: formData.get("postcode"),
      },
      customer: {
        email: formData.get("email"),
        phone_number: formData.get("phone"),
        name: `${formData.get("first_name")} ${formData.get("last_name")}`,
      },
      customizations: {
        title: "Donation Payment",
        description: "Payment for a donation",
        logo: "https://www.wokober.com/images/img/logo-mobile.png",
      },
    };

    FlutterwaveCheckout(payload);
  }
})(jQuery);
