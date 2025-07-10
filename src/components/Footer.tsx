import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-[#F9F9FB] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        height={"100"}
                                        width={"100"}
                                        src="/assets/logo.svg"
                                        alt="Budeshi Logo"
                                        className="w-12 md:w-16"
                                    />
                                </Link>
                            </div>

                        </div>

                        <div>
                            <h4 className="text-lg text-black font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Listing</a></li>
                                <li><a href="#" className="hover:text-white">Contractors</a></li>
                                <li><a href="#" className="hover:text-white">Visualisation</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg text-black font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Cookies Policy</a></li>
                                <li><a href="#" className="hover:text-white">Data Processing</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg text-black font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>070 000 0000</li>
                                <li>MaryJammal: Block L,</li>
                                <li>House 2, Warimo,</li>
                                <li>Abuja</li>
                            </ul>
                            <div className="flex space-x-3 mt-4">
                                <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.19954 6.73295L6.52837 4.61047H4.50279V3.23086C4.50279 2.65049 4.78558 2.08339 5.68986 2.08339H6.62373V0.275966C6.07989 0.187864 5.53036 0.1402 4.97959 0.133362C3.31242 0.133362 2.224 1.15149 2.224 2.99208V4.61047H0.375977V6.73295H2.224V11.8667H4.50279V6.73295H6.19954Z" fill="#0D0D0D" />
                                    </svg>

                                </div>
                                <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6183 12.9455C11.4618 12.6196 12.1286 11.9528 12.4545 11.1093C12.6088 10.7097 12.7168 10.2539 12.7461 9.58705C12.753 9.43085 12.7584 9.29973 12.7634 9.16821V4.71293C12.76 4.61998 12.7561 4.52318 12.7511 4.41442C12.7218 3.74759 12.6138 3.28941 12.4595 2.89217C12.3003 2.47063 12.055 2.09306 11.7341 1.77951C11.4202 1.46056 11.0403 1.21295 10.6234 1.05637C10.2238 0.902102 9.76793 0.794114 9.1011 0.764803C8.42926 0.732792 8.21599 0.725464 6.51247 0.725464C4.80896 0.725464 4.5953 0.732792 3.92616 0.762103C3.25933 0.791414 2.80115 0.899402 2.40391 1.05367C1.98237 1.21295 1.60479 1.45824 1.29086 1.77951C0.972293 2.09344 0.724691 2.47333 0.567723 2.88986C0.413454 3.28941 0.305466 3.74528 0.276155 4.4121C0.244144 5.08395 0.236816 5.29722 0.236816 7.00112C0.236816 8.70502 0.244143 8.9183 0.273455 9.58744C0.302766 10.2543 0.410754 10.7128 0.565409 11.1097C0.724691 11.5312 0.972293 11.9088 1.29086 12.2227C1.60479 12.5413 1.98468 12.7893 2.40159 12.9459C2.80115 13.1001 3.25701 13.2081 3.92384 13.2374C4.59298 13.2671 4.80626 13.2745 6.51016 13.2745C8.21406 13.2745 8.42695 13.2671 9.09648 13.2374C9.7633 13.2081 10.2211 13.0998 10.6183 12.9455ZM6.51479 12.1464C4.8402 12.1464 4.63926 12.139 3.97976 12.1097C3.36693 12.0827 3.03602 11.9798 2.81542 11.8941C2.54352 11.7935 2.29592 11.6342 2.0946 11.4259C1.88634 11.2223 1.72667 10.9774 1.62639 10.7051C1.54077 10.4845 1.4378 10.1509 1.4108 9.54077C1.38149 8.87896 1.37416 8.68034 1.37416 7.00575C1.37416 5.33116 1.38149 5.13023 1.4108 4.47111C1.4378 3.85828 1.54077 3.52737 1.62639 3.30677C1.72705 3.03448 1.88634 2.78688 2.0973 2.58595C2.30055 2.37768 2.54583 2.2184 2.81773 2.11774C3.03834 2.03212 3.37194 1.92915 3.98208 1.90215C4.64389 1.87284 4.84251 1.86551 6.51672 1.86551C8.19092 1.86551 8.39224 1.87284 9.05174 1.90215C9.66457 1.92915 9.99548 2.03212 10.2161 2.11774C10.488 2.2184 10.7356 2.37768 10.9365 2.58595C11.1448 2.78958 11.3045 3.03448 11.4047 3.30677C11.4903 3.52737 11.5933 3.86059 11.6203 4.47111C11.6496 5.13293 11.657 5.33155 11.657 7.00575C11.657 8.67995 11.6496 8.87626 11.6203 9.53807C11.5933 10.1509 11.4903 10.4818 11.4047 10.7024C11.1938 11.2493 10.7599 11.6832 10.2134 11.8938C9.99278 11.9794 9.65956 12.0824 9.04904 12.1093C8.38723 12.1387 8.18899 12.1464 6.51479 12.1464Z" fill="#0D0D0D" />
                                        <path d="M6.5126 3.77693C4.73273 3.77693 3.28877 5.22088 3.28877 7.00076C3.28877 8.78064 4.73273 10.2246 6.5126 10.2246C8.29248 10.2246 9.73605 8.78064 9.73605 7.00076C9.73605 5.22088 8.2921 3.77693 6.5126 3.77693ZM6.5126 9.09149C5.3579 9.09149 4.42149 8.15508 4.42149 7.00038C4.42149 5.84567 5.3579 4.90926 6.5126 4.90926C7.66731 4.90926 8.60372 5.84567 8.60372 7.00038C8.60372 8.15508 7.66731 9.09149 6.5126 9.09149Z" fill="#0D0D0D" />
                                        <path d="M10.6153 3.64947C10.6153 3.23372 10.2783 2.89703 9.8625 2.89703C9.44674 2.89703 9.11005 3.23411 9.11005 3.64947C9.11005 4.06484 9.44713 4.40192 9.8625 4.40192C10.2779 4.40192 10.6153 4.06523 10.6153 3.64947Z" fill="#0D0D0D" />
                                    </svg>

                                </div>
                                <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                                    <span className="text-xs"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.47861 5.2129L10.3051 0.857117H9.39868L6.07472 4.63841L3.42185 0.857117H0.361328L4.37386 6.57565L0.361328 11.1428H1.26777L4.77569 7.14877L7.57792 11.1428H10.6384M1.59492 1.5265H2.98747L9.398 10.5063H8.0051" fill="#0D0D0D" />
                                    </svg>
                                    </span>
                                </div>
                                <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.71055 9.88753V3.29194H0.520218V9.88753H2.71055ZM1.61584 2.39158C2.37949 2.39158 2.85492 1.88511 2.85492 1.25218C2.84062 0.604817 2.37949 0.112488 1.63036 0.112488C0.880718 0.112488 0.391113 0.604817 0.391113 1.25212C0.391113 1.88506 0.866366 2.39152 1.60149 2.39152L1.61584 2.39158ZM3.92292 9.88753H6.11308V6.20465C6.11308 6.00779 6.12737 5.81041 6.18524 5.6698C6.3435 5.27579 6.70389 4.86793 7.3091 4.86793C8.10146 4.86793 8.41862 5.47271 8.41862 6.35945V9.88753H10.6087V6.10582C10.6087 4.08002 9.5283 3.13731 8.08728 3.13731C6.90583 3.13731 6.38695 3.79823 6.09867 4.24838H6.11325V3.29217H3.92304C3.95163 3.91091 3.92292 9.88753 3.92292 9.88753Z" fill="#0D0D0D" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">© Budeshi 2025 All right reserved</p>
                        <div className="flex gap-4">
                            <p className="text-gray-400 text-sm flex items-center"><span><Mail /></span> <span className="ml-2"> </span> info@budeshi.ng</p>
                            <p className="text-gray-400 text-sm flex items-center"><span><Phone /></span> <span className="ml-2"></span> +234-700-000-0000</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}