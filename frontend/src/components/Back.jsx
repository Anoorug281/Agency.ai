import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40
      gap-10 text-gray-700 dark:text-white/80">

      <h3 className="font-semibold">Trusted by Leading Companies</h3>

      {/* VIEWPORT */}
      <div className="relative w-full overflow-hidden">

        {/* TRACK */}
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* REPEAT LOGOS 3 TIMES */}
          {[...company_logos, ...company_logos, ...company_logos].map(
            (logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Back;
