import Link from "next/link";

const Brand = () => (
    <Link href="/" className="flex items-center flex-start" >
        <img
            src="/blinder.svg"
            width={80}
            height={50}
            alt="Blinder logo"
            // Adjust the margin as needed
        />
        <span className="text-lg font-semibold">MediPulse</span>
    </Link>
);

export default Brand;
