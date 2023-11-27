import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Head>
        <title>Badminton</title>
        <meta name="description" content="Generated" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="bg-gradient-to-r from-blue-500 via-green-400 to-red-500 text-transparent bg-clip-text text-8xl font-extrabold animate-gradient pt-10">
            Badminton
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/kendte"
            >
              <h3 className="text-2xl font-bold">Badmintons historie</h3>
              <div className="text-lg">
                Sporten blev opfundet i England i 1930&apos;erne. Imellem tiden er sporten blev udbredt til næsten alle verdens hjørner, men især i asien og i europa. Danmark har nogen af verdenens bedste spillere som Victor Axelsen, Mia Blichfeldt og Camilla Martin.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://badminton.dk/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Hvad er badminton?</h3>
              <div className="text-lg">
                Badminton er en sport, hvor du spiller med en ketcher og en fjerbold. Badminton er verdens hurtigtse ketchersport. Tryk på boksen og kom direkte hen til Badminton Danmarks hjemmeside, hvor du kan få flere oplysninger vedrørende events, turneringer, hvor man kan starte til badminton osv.
              </div>
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-white">
            <Image src="https://i.eurosport.com/2023/05/30/3715460-75599128-2560-1440.jpg" alt="Mia" width={400} height={400} />
          </div>
        </div>
      </main>
    </>
  );
}
