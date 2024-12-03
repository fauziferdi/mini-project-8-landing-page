import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const ItemListComponent2 = () => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://s3-alpha-sig.figma.com/img/2c79/bc12/838f86e29b8f03e478e953ae6c12a330?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjgQCFqogp5VB5ANvGtp9S4eHB7swKnwbtLSBOOSAM9uUDXDyzFKstcWrUJtUSDDeZ5von5T-CfyQlmqjyJ-MAj2f9YdOABXBIOE19vsVZbTh6-UPDkhqCi6Hto8FgZwIdtOnI3wwFYh05HwAnKIODFDeaX2m04rvNZiLceKM4pECUWS-FiupUZEFzcPEdnmKBN-YFrfCJ1U-3DNJvxYeo5~rpMAcYcUa6iyCOECkxJL-XezSVDsb~sj1dfjo9LCxr7RdBP9pNfiXhiMpmLzthoWmkdupQ7K8AgJIdnMgXm7tdVgiWjIC56JnIDl85Q60mle~B6zE-uAT3kA5RaeIg__"
        class="card-img-top tw-p-3 tw-pb-0"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bold">
          Copywriters and designers: How to work better together
        </h5>
        <p class="card-text">
          Good design and good copy go hand in hand. Heres how to build closer
          collaboration between these two.
        </p>
        <a
          href="#"
          class="text-dark text-decoration-none tw-flex tw-items-center"
        >
          read more <FaArrowRightLong className="tw-ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ItemListComponent2;
