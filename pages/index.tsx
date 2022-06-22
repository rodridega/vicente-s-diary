import { MainLayout } from "../components/layouts";
import { Button } from "@nextui-org/react";

const title = "Diario de Vicente";

export default function Home() {
  return (
    <MainLayout title={title} >
      
      <Button>Click!</Button>
    </MainLayout>
  );
}
