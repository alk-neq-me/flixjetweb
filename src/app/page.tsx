import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="absolute inset-0 h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 mx-auto items-center">
        <h1 className="text-2xl">Hello, World</h1>
        <Button text="Click!" />
      </div>
    </div>
  )
}
