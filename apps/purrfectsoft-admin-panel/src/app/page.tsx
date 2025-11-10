import { Button } from "@repo/ui/button";
import MyButton from "@repo/ui/my-button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <MyButton>This Button Does Nothing</MyButton>
        <Button>This Button Uses the UI Button</Button>
      </div>
    </div>
  );
}
