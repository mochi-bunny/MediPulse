// import SectionWrapper from "../../SectionWrapper"
// import Image from "next/image"
// import wordpress from "../../../public/icons/wordpress.svg"
// import nextjs from "../../../public/icons/nextjs.svg"
// import tailwind from "../../../public/icons/tailwind.svg"
// import nodejs from "../../../public/icons/nodejs.svg"
// import vercel from "../../../public/icons/vercel.svg"
// import figma from "../../../public/icons/figma.svg"

// const ToolKit = () => {

//     const features = [
//         {
//             icon: wordpress,
//             title: "Wordpress",
//             desc: "WordPress is an open-source content management system (CMS)."
//         },
//         {
//             icon: nextjs,
//             title: "Next.js",
//             desc: "Next.js is a React framework that gives you building blocks to create web apps."
//         },
//         {
//             icon: tailwind,
//             title: "Tailwind CSS",
//             desc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building UIs."
//         },
//         {
//             icon: nodejs,
//             title: "Node.js",
//             desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment."
//         },
//         {
//             icon: vercel,
//             title: "Vercel",
//             desc: "Vercel is a cloud platform that enables developers to host web apps."
//         },
//         {
//             icon: figma,
//             title: "Figma",
//             desc: "Figma is a web-based graphics editing and user interface design app."
//         },
//     ]

//     return (
//         <SectionWrapper>
//             <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
//                 <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
//                     <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//                         Work with the best toolkit
//                     </h2>
//                     <p>
//                         These are a few of our favourite things
//                     </p>
//                 </div>
//                 <div className="mt-12">
//                     <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
//                         {
//                             features.map((item, idx) => (
//                                 <li key={idx} className="flex gap-x-4">
//                                     <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
//                                         <Image src={item.icon} alt={item.title} />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-lg text-gray-800 font-semibold">
//                                             {item.title}
//                                         </h4>
//                                         <p className="mt-3">
//                                             {item.desc}
//                                         </p>
//                                     </div>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div>
//         </SectionWrapper>
//     )
// }

// export default ToolKit

import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import NavLink from "../NavLink";
import wordpress from "../../../public/icons/wordpress.svg"
import nextjs from "../../../public/icons/nextjs.svg"
import tailwind from "../../../public/icons/tailwind.svg"
import nodejs from "../../../public/icons/nodejs.svg"
import vercel from "../../../public/icons/vercel.svg"
import figma from "../../../public/icons/figma.svg"


const ToolKit = () => {

    const features = [
        // Add your feature items here
    ];

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    {/* Heading and Announcement Section */}
                    <div className="custom-screen">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-4">
                            Excited for Our Upcoming Website Launch?
                        </h2>
                        <p className="text-gray-600">
                            We're thrilled to announce that our full-featured website is on its way! We're integrating real-life doctor databases and enhancing our appointment form to offer you a seamless experience. Stay tuned for more updates!
                        </p>
                    </div>

                    {/* AI-Powered Home Remedies Section */}
                    <div className="max-w-2xl mx-auto text-center">
                        <h5 className="text-gray-800 text-2xl font-bold sm:text-4xl mb-4">
                            AI-Powered Home Remedies
                        </h5>
                        <p className="text-gray-600" style={{
                            fontSize: "18px",
                            lineHeight: "1.6",
                            backgroundColor: "#f9f9f9",
                            padding: "15px",
                            borderLeft: "5px solid #0000", // Updated border color for visibility
                            borderRadius: "8px",
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}>
                            Curious about how our <strong>AI chatbot</strong> can help with <strong>home remedies</strong>? Don’t miss our <strong>upcoming features</strong>! See it in action and discover how it can support your health. <strong>RSVP now</strong> to reserve your spot!
                        </p>

                        <div className="flex items-center justify-center mt-6">
                            <ul className="text-gray-700 flex justify-center items-center space-y-6 md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
                                <li>
                                    <NavLink
                                        href="/rsvp"
                                        className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                                    >
                                        RSVP NOW
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="">
                                    {/* <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3 text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div> */}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default ToolKit;