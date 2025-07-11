import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#F9F9FB] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid layout responsive update */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Link href="/" className="flex items-center">
                                <Image
                                    height={100}
                                    width={100}
                                    src="/assets/logo.svg"
                                    alt="Budeshi Logo"
                                    className="w-12 md:w-16"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Listing</a></li>
                            <li><a href="#" className="hover:text-white">Contractors</a></li>
                            <li><a href="#" className="hover:text-white">Visualisation</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Cookies Policy</a></li>
                            <li><a href="#" className="hover:text-white">Data Processing</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>070 000 0000</li>
                            <li>MaryJammal: Block L,</li>
                            <li>House 2, Warimo,</li>
                            <li>Abuja</li>
                        </ul>

                        {/* Social icons */}
                        <div className="flex space-x-3 mt-4">
                            {/* Your SVG icons here unchanged */}
                            {/* Keep existing social media icons as they are */}
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col gap-4 md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © Budeshi 2025 All right reserved
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
                        <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start">
                            <Mail className="w-4 h-4" /> <span className="ml-2">info@budeshi.ng</span>
                        </p>
                        <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start">
                            <Phone className="w-4 h-4" /> <span className="ml-2">+234-700-000-0000</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
