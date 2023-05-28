import React from 'react'

const Hero = () => {

    return (
        <div>
            <section className="flex flex-col w-full">
                <div className="flex-col gap-10 w-full justify-center bg-[#101010] from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-3xl font-bold">Terms and Conditions</h1>
                    </div>

                    <div className="md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
                        <h2 className="text-white text-lg">
                            Welcome to Xenova! These Terms and Conditions ("Terms") govern your access to and use of the Xenova web application ("App"), provided by Xenova ("We," "Us," or "Our"). By accessing or using the App, you agree to comply with these Terms. Please read them carefully before using the App.
                        </h2>
                    </div>
                </div>

                <div className="px-6">
                    <dl className='text-md mt-8 flex flex-col gap-4'>
                        <dt>Acceptance of Terms:</dt>
                        <dd>By accessing or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as any additional terms and policies referenced herein. If you do not agree to these Terms, you may not use the App.</dd>
                        <dt>App Description:</dt>
                        <dd>AdShare is a web application that allows users to share ads in the form of WhatsApp status updates. Users can share these ads with their contacts and earn money based on their engagement and the number of people who view the shared ads.</dd>
                        <dt>Eligibility:</dt>
                        <dd className='flex flex-col gap-2'>
                            <p>a) You must be at least 18 years old to use the App. By using the App, you represent and warrant that you are 18 years of age or older.</p>
                            <p>b) You agree to provide accurate and truthful information when creating an account and throughout your use of the App.</p>
                        </dd>
                        <dt>User Accounts:</dt>
                        <dd className='flex flex-col gap-2'>
                            <p>a. To use certain features of the App, you may need to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password.</p>
                            <p>b. You are solely responsible for all activities that occur under your account. If you become aware of any unauthorized use of your account, you must notify us immediately.</p>
                            <p>c. We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including if we believe you have violated these Terms.</p>
                        </dd>
                        <dt>Intellectual Property:</dt>
                        <dd>
                            <p>a. The App and all its content, including but not limited to text, images, logos, and trademarks, are the property of AdShare or its licensors and are protected by intellectual property laws.</p>
                            <p>b. You may not use, reproduce, modify, or distribute any of the App's content without our prior written consent.</p>
                        </dd>
                        <dt>Ad Sharing and Earnings:</dt>
                        <dd className='flex flex-col gap-2'>
                            <p>a. Users can share ads provided by AdShare with their contacts through the App.</p>
                            <p>b. Users may earn money based on the engagement and viewership of the ads shared through their accounts. The exact earning structure, rates, and payment methods will be specified separately in the App's guidelines or policies.</p>
                            <p>c. Users are responsible for ensuring that the shared ads comply with the guidelines provided by AdShare and any applicable laws and regulations.</p>
                            <p>d. AdShare reserves the right to adjust or modify the earnings structure, rates, and payment methods at any time, with or without notice.</p>
                        </dd>
                        <dt>User Obligations:</dt>
                        <dd>
                            <p>a. You agree to use the App only for lawful purposes and in compliance with these Terms and all applicable laws and regulations.</p>
                            <p>b. You will not engage in any activities that may disrupt or interfere with the functioning of the App or its services.</p>
                            <p>c. You are solely responsible for any content you share through the App, and you represent and warrant that you have the necessary rights and permissions to share such content.</p>
                        </dd>
                        <dt>Privacy:</dt>
                        <dd>
                            <p>We value your privacy and handle your personal information in accordance with our Privacy Policy, available on the App. By using the App, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.</p>
                        </dd>
                        <dt>Disclaimer of Warranties:</dt>
                        <dd>
                            <p>a. The App is provided on an "as-is" and "as available" basis, without warranties of any kind, either express or implied.</p>
                            <p>b. We do not guarantee that the App will be uninterrupted, error-free, or free from viruses or other harmful components.</p>
                        </dd>
                        <dt>Limitation of Liability:</dt>
                        <dd>
                            <p>To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with your use of the App.</p>
                        </dd>
                        <dt>Modifications and Termination:</dt>
                        <dd>
                            <p>a. We reserve the right to modify or discontinue the App, in whole or in part, at any time, with or without notice.</p>
                            <p>b. We may also modify these Terms at any time. Any changes to the Terms will be effective immediately upon posting the revised version on the App.</p>
                        </dd>
                        <dt>Governing Law and Jurisdiction:</dt>
                        <dd>
                            <p>a. These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.</p>
                            <p>b. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of India.</p>
                        </dd>
                    </dl>
                </div>

            </section>
        </div>
    )
}

export default Hero
