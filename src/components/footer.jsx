const Footer = () => {
  return (
    <footer className="w-full bg-[#F3F4F6] text-[#1F2937]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-[#3B82F6]">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              CVAI
            </h3>
            <p className="text-[#6B7280]">
              The AI-powered resume builder that helps you land more interviews.
            </p>
          </div>

          {[
            { title: 'Product', links: ['Templates', 'Examples', 'Pricing', 'Features'] },
            { title: 'Resources', links: ['Blog', 'Resume Tips', 'Cover Letters', 'Career Advice'] },
            { title: 'Company', links: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'] },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-4 text-[#1F2937]">{section.title}</h4>
              <ul className="space-y-3 text-[#6B7280]">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-[#3B82F6] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#6B7280] mb-4 md:mb-0">
              © {new Date().getFullYear()} CVAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { label: 'Twitter', iconPath: 'M8.29 20.251...' },
                { label: 'Facebook', iconPath: 'M22 12c0-5.52...' },
                { label: 'LinkedIn', iconPath: 'M19 0h-14c-2.76...' },
              ].map(({ label, iconPath }, i) => (
                <a key={i} href="#" className="text-[#6B7280] hover:text-[#3B82F6] transition-colors" aria-label={label}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
