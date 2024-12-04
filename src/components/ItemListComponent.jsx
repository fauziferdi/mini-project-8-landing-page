import React from "react";
const ItemListComponent = () => {
  return (
    <>
      <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt=""
          src="https://s3-alpha-sig.figma.com/img/2c79/bc12/838f86e29b8f03e478e953ae6c12a330?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjgQCFqogp5VB5ANvGtp9S4eHB7swKnwbtLSBOOSAM9uUDXDyzFKstcWrUJtUSDDeZ5von5T-CfyQlmqjyJ-MAj2f9YdOABXBIOE19vsVZbTh6-UPDkhqCi6Hto8FgZwIdtOnI3wwFYh05HwAnKIODFDeaX2m04rvNZiLceKM4pECUWS-FiupUZEFzcPEdnmKBN-YFrfCJ1U-3DNJvxYeo5~rpMAcYcUa6iyCOECkxJL-XezSVDsb~sj1dfjo9LCxr7RdBP9pNfiXhiMpmLzthoWmkdupQ7K8AgJIdnMgXm7tdVgiWjIC56JnIDl85Q60mle~B6zE-uAT3kA5RaeIg__"
          class="h-80 w-full object-cover px-5 pt-5"
        />

        <div class="p-4 sm:p-6">
          <a href="/blog/1">
            <h3 class="text-lg font-sans font-extrabold text-gray-900">
              Copywriters and designers: How to work better togethe
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <a
            href="#"
            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold"
          >
            Read More
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </>
  );
};

export default ItemListComponent;
