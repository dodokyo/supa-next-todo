import React from "react";

// http://localhost:3000/share/776c611f-63bc-4fb8-a757-d5fab6bc0cdb

interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const SharePage = async (props: SharePageProps) => {
  const userId = props?.params?.user_id;

  console.log(">>userId", userId);

  return <div>share page</div>;
};

export default SharePage;
