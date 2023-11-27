import Image from 'next/image'
import { image1 } from "~/utils/Images"
import styles from './styles.module.css';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const FamPage = () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <h1 className="bg-gradient-to-r from-blue-500 via-green-400 to-red-500 text-transparent bg-clip-text text-8xl font-extrabold animate-gradient pt-10">
                Badminton
            </h1>
            <div className="grid grid-cols-2 gap-20 py-16">
                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-white font-extrabold text-3xl animate-gradient'>Mia Blichfeldt</h3>
                    <Image src="/1.png"
                        width={300}
                        height={300}
                        alt="Mia"
                        objectFit="cover"
                        className="border-2 rounded-full shadow-xl shadow-white" />
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-white font-extrabold text-3xl animate-gradient'>Camilla Martin</h3>
                    <Image src="/2.png"
                        width={300}
                        height={300}
                        alt="Pernille"
                        objectFit="cover"
                        className="border-2 rounded-full shadow-xl shadow-white" />
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-white font-extrabold text-3xl animate-gradient'>Peter Gade</h3>
                    <Image src="/peter.png"
                        width={300}
                        height={300}
                        alt="Peter Gade"
                        objectFit="cover"
                        className="border-2 rounded-full shadow-xl shadow-white" />
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-white font-extrabold text-3xl animate-gradient'>Victor Axelsen</h3>
                    <Image src="/4.png"
                        width={300}
                        height={300}
                        alt="Axel"
                        objectFit="cover"
                        className="border-2 rounded-full shadow-xl shadow-white"
                    />
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <Link href="/" className='text-white font-extrabold text-3xl'>
                    <div className='flex flex-row items-center gap-4'>
                        <FiArrowLeft size={50} /> {"Tilbage"}
                    </div>
                </Link>
            </div>
        </main >
    )
}

export default FamPage 