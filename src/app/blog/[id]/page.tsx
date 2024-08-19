import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  
  return <div>Page</div>;
};

export default Page;
