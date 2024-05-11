import { createServerSideClient } from "@/lib/supabase";

export const getUser = async ({ serverComponent = false }) => {
  const supabase = await createServerSideClient(serverComponent);
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};
