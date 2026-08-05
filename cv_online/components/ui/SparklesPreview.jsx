import { SparklesCore } from "../ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="h-full w-full"
          particleColor="#00ff0d"
        />
      </div>

     
    </div>
  );
}