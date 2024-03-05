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
      console.log(this, form_data);
      for (let [key, value] of form_data){
        console.log(key + ": " + value);
      }
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
      public_key: "FLWPUBK_TEST-78135ef243cacdb926b16a903a38ec58-X",
      tx_ref: generateTxRef(),
      amount: parseFloat(formData.get("amount").replace(/,/g, "")),
      currency: formData.get("currency"),
      payment_options: "card, ussd, mobilemoneyuganda",
      redirect_url: "https://www.wokober.com/donate.html",
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
        logo: "https://www.wokober.com/images/img/Logo-01.png",
      },
    };

    console.log(payload);

    FlutterwaveCheckout(payload);
  }
})(jQuery);
