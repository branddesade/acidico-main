"use client";
import Image from "next/image";

import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const Pricing = () => {
  
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="$ACID"
            title="Tokenomics"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <div className="w-full ">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about/about-image-01.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-fit object-center"
                    />
                  </div>
                </div>
        </div>

        
      </div>
    </section>
  );
};

export default Pricing;
