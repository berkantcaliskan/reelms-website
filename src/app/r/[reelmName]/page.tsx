import { redirect } from "next/navigation";

// reelms.io/r/[reelmName] → deep link into the app
// The app handles the actual routing; this page is invisible to users.

interface Props {
  params: Promise<{ reelmName: string }>;
}

export default async function ReelmRedirect({ params }: Props) {
  const { reelmName } = await params;
  redirect(`reelms://r/${reelmName}`);
}
