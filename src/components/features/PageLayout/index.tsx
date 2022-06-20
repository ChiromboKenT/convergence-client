import React, { ReactNode } from "react";
import Card from "../Card";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex px-8 w-full h-screen bg-primary">
      <div className="flex  flex-1 h-full w-full justify-center items-center ">
        {children}
      </div>
      <div
        className="bg-primary py-8 flex-1 max-h-screen
       w-full relative"
      >
        <Card styles="gradient max-h-full  aspect-square p-0 h-full">
          <img
            className="rounded-xl  max-h-full  
            max-w-full object-cover"
            src="https://picsum.photos/200/300"
            alt="Random generated"
          />
        </Card>
        <div className="absolute bottom-[4rem]  py-10 z-500 left-[50%] -translate-x-[50%]">
          <h2 className="font-poppins tracking-tighter font-extrabold text-center text-[48px] text-secondary ">
            Welcome
          </h2>
          <h3 className="font-poppins tracking-tighter font-extrabold text-[28px] text-center text-secondary">
            Subscribe to receive an email
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
