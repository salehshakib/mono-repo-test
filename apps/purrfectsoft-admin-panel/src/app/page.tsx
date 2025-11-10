import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <Button>This Button Does Nothing</Button>
      </div>
    </div>
  );
}
