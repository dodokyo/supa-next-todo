import { createServerSideClient } from "@/lib/supabase";

export const getUser = async () => {
  const supabase = await createServerSideClient();
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};
