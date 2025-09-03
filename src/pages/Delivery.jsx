import React from "react";
import '../styles/Delivery.scss'
export default function Delivery() {
  return (
    <div >
        <div class="delivery">
          <div class="delivery-info w-richtext">
            <h2>How do we deliver your toys?</h2>
            <p>
             At ToyNest, we know that every toy is not just a commodity, but a surprise that children look forward to. To this end, we carefully design every delivery link to ensure that the toys are delivered to you safely, quickly and intact.
            </p>
            <h3>Packaging and toy protection</h3>
            <p>
             Each order is packed with environmentally friendly, pressure-proof and moisture-proof materials to prevent the toys from being damaged during transportation. For fragile and combined toys, we will use reinforced cushioning packaging to ensure that they are intact.
            </p>
            <h4>Package tracking service</h4>
            <p>
             We provide real-time package tracking service for all orders. After shipment, you will receive an email or SMS with the logistics tracking number and tracking link, and you can check the current delivery progress at any time.
            </p>
            <ul className="list">
              <li>Optional gift box packaging and greeting card</li>
            <li>Provide customized blessing service</li>
            <li>Please note when placing an order or contact customer service. Some services require additional charges.</li>
            </ul>
            <h4>Gift wrapping service</h4>
            <p>
            We support personalized gift packaging, suitable for birthdays, Christmas, Children's Day and other festivals
            </p>
          </div>
          <div class="question">
            <h5 class="question-heading">
              Can't Find the Answer to&nbsp;Your Question?
            </h5>
            <a href="/contacts" class="button ">
              Contact Us
            </a>
          </div>
        </div>
    </div>
  );
}
