'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GrantApplicationPage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 20,
        minutes: 21,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    const eligibilityCriteria = [
        {
            title: "LEGAL STATUS AND REGISTRATION",
            content: [
                "• The applicant organisation must be registered and have a valid registration certificate.",
                "• Applications in the process of registration can apply, but access funds only after full registration."
            ]
        },
        {
            title: "OPERATIONAL PRESENCE",
            content: [
                "• The organisation or individual must have a verifiable operational presence in the community and be actively engaged in community development or program delivery within their state.",
                "• The organization or individual should demonstrate active community engagement or program delivery within their state."
            ]
        },
        {
            title: "GOVERNANCE AND ACCOUNTABILITY",
            content: [
                "• The organisation must have a well-defined governance structure with documented rules and responsibilities.",
                "• The organisation must demonstrate its capacity to set up a basic internal control system, including segregation of duties, financial accountability, and reporting mechanisms."
            ]
        },
        {
            title: "FINANCIAL MANAGEMENT CAPACITY",
            content: [
                "Local organisation must have a functional bank account in the name of the organisation, with:",
                "• The organisation should have systems and the capacity of basic financial record-keeping",
                "• The organisation must submit to having the control systems audited and evaluate effectiveness in project activities, with financial reporting to FPRC."
            ]
        },
        {
            title: "PROGRAMMATIC FOCUS",
            content: [
                "Proposed activities must align with the thematic priorities of the grant call across any sector for 2023/2024 Federal Procurement across the state (e.g. health, education, gender equality, youth development, climate action, or governance).",
                "• Projects must address local needs, promote community participation, and demonstrate potential for measurable impact strengthening procurement accountability in the state."
            ]
        },
        {
            title: "COMPLIANCE AND ETHICAL STANDING",
            content: [
                "The organisation/individual must not be under any legal investigation, litigation, or blacklisted or suspended by any donor, development agency, or regulatory authority.",
                "• Must uphold ethical principles including non-discrimination, transparency, accountability, and respect for human rights."
            ]
        },
        {
            title: "LOCAL ENGAGEMENT AND SUSTAINABILITY",
            content: [
                "• Projects should demonstrate community involvement in design and implementation.",
                "• Applicants must outline a sustainability plan showing how the intervention can be continued or have lasting impact beyond the grant period and continued use of the BUDESHI platform for reporting - upload Work Plan."
            ]
        },
        {
            title: "REPORTING",
            content: [
                "• All grant beneficiaries and reporting will be through the Budeshi platform.",
                "• There will be an annual award for the best organisation for programme reporting."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="relative text-white overflow-hidden">
                {/* Blurred Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center filter  scale-3d"
                    style={{
                        backgroundImage: "url('/assets/image.png')",
                    }}
                />

                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black opacity-70" />

                {/* Foreground Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Grant Application Eligibility Criteria
                        </h1>
                        <p className=" text-blue-100 max-w-2xl mx-auto">
                            Review the eligibility criteria carefully to ensure your organisation or initiative meets the requirements before applying for the grant.
                        </p>
                    </div>
                </div>

            </div>
            {/* <div className="flex  justify-between">
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-12 md:w-16"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-12 md:w-16"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-12 md:w-16"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-12 md:w-16"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-12 md:w-16"
                />
            </div> */}


            {/* Countdown Timer */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-xl text-gray-900 mb-6">
                        Countdown to Grant Application Submission
                    </h2>
                    <div className="flex justify-center space-x-4">
                        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg min-w-[60px]">
                            <div className="text-2xl font-bold">{formatTime(timeLeft.days)}</div>
                            <div className="text-sm text-gray-400">Days</div>
                        </div>
                        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg min-w-[60px]">
                            <div className="text-2xl font-bold">{formatTime(timeLeft.hours)}</div>
                            <div className="text-sm text-gray-400">Hours</div>
                        </div>
                        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg min-w-[60px]">
                            <div className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</div>
                            <div className="text-sm text-gray-400">Minutes</div>
                        </div>
                        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg min-w-[60px]">
                            <div className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</div>
                            <div className="text-sm text-gray-400">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="py-16 ">
                <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8  bg-[#F9F9FB]">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
                        Ensure All Criterials Are Met
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eligibilityCriteria.map((criteria, index) => (
                            <div key={index} className="h-full rounded-sm bg-white ">
                                <div className="relative">
                                    {/* Top-right SVG */}
                                    <div className="absolute top-0 right-0">
                                        <img
                                            src="/assets/patterns.svg"
                                            alt="Budeshi Logo"
                                            className="w-64"
                                        />
                                    </div>

                                    <div className=" absolute top-6 left-6">
                                        <div className="bg-[#010E3D0D] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-2xl">
                                            {index + 1}.
                                        </div>
                                    </div>
                                    <div className="p-10 pt-20 items-start mb-4"></div>

                                    <div className="text-sm px-10  mb-20  text-gray-600 space-y-2">
                                        <h4 className="font-semibold text-gray-900 leading-tight">
                                            {criteria.title}
                                        </h4>
                                        {criteria.content.map((item, itemIndex) => (
                                            <div key={itemIndex}>
                                                {item.startsWith('•') ? (
                                                    <div className="ml-4">{item}</div>
                                                ) : (
                                                    <p>{item}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GrantApplicationPage;