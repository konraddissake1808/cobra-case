import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 lg:gap lg:pt-24 lg:pb-52 
      sm:pb-32-x-0 
      xl:gap-x-8 xl:pt-32">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
