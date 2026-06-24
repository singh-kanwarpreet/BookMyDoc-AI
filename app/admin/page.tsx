import { currentUser, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";
// export const dynamic = 'force-dynamic'

async function AdminPage() {
  const { userId } = await auth();

// user is not logged in
if (!userId) redirect("/");

const user = await currentUser();

// fallback safety
if (!user) redirect("/");

  const adminEmail = process.env.ADMIN_EMAIL;
  const userEmail = user.emailAddresses[0]?.emailAddress;
 
  // user is not the admin
  if (!adminEmail || userEmail !== adminEmail) redirect("/dashboard");

  return <AdminDashboardClient />;
}

export default AdminPage;