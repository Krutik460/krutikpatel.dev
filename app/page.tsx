import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen items-center justify-center bg-gray-50 px-16">
      <div className="relative h-full w-full">
        <div className="absolute left-40 top-0 h-96 w-96 animate-blob rounded-full bg-purple-300 mix-blend-multiply blur-2xl filter"></div>
        <div className="absolute bottom-10 left-96 h-96 w-96 animate-oppositeBlob rounded-full bg-yellow-300 mix-blend-multiply blur-2xl filter"></div>
        <div className="absolute -top-5 right-56 h-96 w-96 animate-blob rounded-full bg-pink-300 mix-blend-multiply blur-2xl filter"></div>
        <h1 className="flex justify-center text-9xl">KRUTIK PATEL</h1>
      </div>
    </main>
  );
}
