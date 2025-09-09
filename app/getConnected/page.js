import { Suspense } from "react";
import GetConnectedPage from "./GetConnectedPage";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GetConnectedPage />
    </Suspense>
  );
}
