import Image from "next/image";

const Footer = () => (
    <footer className="flex items-center text-xs sm:text-sm md:text-base justify-center gap-6 md:justify-between px-4 py-4 sm:px-8 border-t border-gray-300">
        <Image
            src={"/logoHalfBlack.svg"}
            className="w-6 sm:w-8 "
            width={36.7}
            height={32.7}
        />
        <div className="flex flex-col md:flex-row items-center sm:gap-4 justify-between ">
            <p>Donate to this project🙂</p>
            <p>
                <a
                    className="cursor-pointer"
                    href="https://etherscan.io/address/0xC07A7333D62d50a169196d970F7671d9EB4d56FE"
                >
                    <u>0xC07A7333D62d50a169196d970F7671d9EB4d56FE</u>
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;