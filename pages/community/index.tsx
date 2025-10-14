import { useState } from "react";

const Community = () => {
  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Hello World")}>Change Title</button>
    </div>
  );
};

export default Community;