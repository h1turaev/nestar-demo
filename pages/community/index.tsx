import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Hello World")}>Change Title</button>
    </div>
  );
};

export default withLayoutBasic(Community);