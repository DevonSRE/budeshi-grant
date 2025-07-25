'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Countdown from '@/components/countdown';

const GrantApplicationPage = () => {
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
        // {
        //     title: "FINANCIAL MANAGEMENT CAPACITY",
        //     content: [
        //         "Local organisation must have a functional bank account in the name of the organisation, with:",
        //         "• The organisation should have systems and the capacity of basic financial record-keeping",
        //         "• The organisation must submit to having the control systems audited and evaluate effectiveness in project activities, with financial reporting to FPRC."
        //     ]
        // },
        // {
        //     title: "PROGRAMMATIC FOCUS",
        //     content: [
        //         "Proposed activities must align with the thematic priorities of the grant call across any sector for 2023/2024 Federal Procurement across the state (e.g. health, education, gender equality, youth development, climate action, or governance).",
        //         "• Projects must address local needs, promote community participation, and demonstrate potential for measurable impact strengthening procurement accountability in the state."
        //     ]
        // },
        // {
        //     title: "COMPLIANCE AND ETHICAL STANDING",
        //     content: [
        //         "The organisation/individual must not be under any legal investigation, litigation, or blacklisted or suspended by any donor, development agency, or regulatory authority.",
        //         "• Must uphold ethical principles including non-discrimination, transparency, accountability, and respect for human rights."
        //     ]
        // },
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
                <div className="absolute inset-0 bg-cover bg-center filter  scale-3d" style={{
                    backgroundImage: "url('/assets/image.png')",
                }} />

                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black opacity-70" />

                {/* Foreground Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
                    <div className="text-center mt-10">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Grant Application Eligibility Criteria
                        </h1>
                        <p className=" text-blue-100 max-w-2xl mx-auto">
                            Review the eligibility criteria carefully to ensure your organisation or initiative meets the requirements before applying for the grant.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex relative -mt-5 justify-around">
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-8 md:w-8"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-8 md:w-8"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-12 md:w-12"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-8 md:w-8"
                />
                <img
                    src="/assets/dot.svg"
                    alt="Budeshi Logo"
                    className="w-8 md:w-8"
                />
            </div>
            <Countdown />

            {/* Eligibility Criteria */}
            <div className="py-16 max-w-7xl mx-auto ">
                <div className=" px-4 py-12 sm:px-6 lg:px-8  bg-[#F9F9FB]">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
                        Ensure All Criterials Are Met
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {eligibilityCriteria.map((criteria, index) => (
                                <div key={index} className="h-full rounded-sm bg-white ">
                                    <div className="relative">
                                        {/* Top-right SVG */}
                                        <div className="absolute top-0 right-0">
                                            <Image
                                                height={"100"}
                                                width={"100"}
                                                src="/assets/Patterns.svg"
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
            </div>

            <Footer />
        </div>
    );
};

export default GrantApplicationPage;
