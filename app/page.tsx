import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-10">
      <h1 className="text-4xl font-bold">Pokedex</h1>
      <Image src="/pokedex.png" alt="Vercel Logo" width={283} height={64} />
      <Link href="/pokemons">Attrapez les tous</Link>
    </main>
  );
}
