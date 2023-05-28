import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="flex flex-col w-full">
        <div className="flex-col gap-10 w-full justify-center bg-[#101010] from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
          <div className="md:w-1/2 flex-col">
            <h1 className="text-white text-3xl font-bold">Privacy Policy</h1>
          </div>
          <div className="md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
            <h2 className="text-white text-lg">
              Welcome to Xenova! This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your personal information when you use our web application ("App"). Please read this Policy carefully before using the App. By accessing or using the App, you consent to the practices described in this Policy.
            </h2>
          </div>
        </div>

        <div className="px-6">
          <dl className='text-md mt-8 flex flex-col gap-4'>
            <dt>Information We Collect:</dt>
            <dd>
              <p>a) Personal Information: We may collect personal information that you provide to us, such as your name, email address, and contact information when you create an account or communicate with us.</p>
              <p>b) Usage Information: We may collect information about how you use the App, including your interactions, preferences, and activities.</p>
            </dd>

            <dt>How We Use Your Information:</dt>
            <dd>
              <p>We may use the information we collect for various purposes, including:</p>
              <p>a) Providing and improving the App;</p>
              <p>b) Personalizing your experience and delivering tailored content;</p>
              <p>c) Communicating with you and responding to your inquiries;</p>
              <p>d) Analyzing usage trends and optimizing the App's performance;</p>
              <p>e) Protecting our rights and preventing fraud;</p>
              <p>f) Enforcing our Terms and Conditions.</p>
            </dd>

            <dt>Sharing of Your Information:</dt>
            <dd>
              <p>We may share your information with:</p>
              <p>a) Third-party service providers who assist us in operating the App and providing related services;</p>
              <p>b) Authorized personnel within our organization;</p>
              <p>c) With your consent, when necessary to fulfill the purpose for which you provide it.</p>
            </dd>

            <dt>Google Contacts:</dt>
            <dd>
              <p>We may use Google Contacts API to verify the number of contacts you have. This information is used solely for the purpose of determining the reach of your shared ads and is not stored or used for any other purpose.</p>
            </dd>

            <dt>Data Security:</dt>
            <dd>
              <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            </dd>

            <dt>Children's Privacy:</dt>
            <dd>
              <p>The App is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided personal information without your consent, please contact us to request deletion of the information.</p>
            </dd>

            <dt>Changes to This Policy:</dt>
            <dd>
              <p>We may update this Policy from time to time. Any changes will be posted on this page, and the revised Policy will become effective when posted. We encourage you to review this Policy periodically for any updates.</p>
            </dd>

            <dt>Contact Us:</dt>
            <dd>
              <p>If you have any questions or concerns about this Policy or our privacy practices, please contact us at xenovaads@gmail.com.</p>
            </dd>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;