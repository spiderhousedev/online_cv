import { AsciiArt } from "@/components/ui/ascii-art";
 
export function AsciiArtDemo() {
  return (
    <AsciiArt
      src={`${import.meta.env.BASE_URL}me.jpeg`}
      resolution={100}
      color="var(--color-neutral-500)"
      animationStyle="fade"
      animationDuration={0}
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-neutral-950"
    />
  );
}