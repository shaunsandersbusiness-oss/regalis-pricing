import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-10 px-6 border-t border-[#c9a84c]/10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <img 
          src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" 
          alt="Regalis Realty Media" 
          className="max-w-[200px] w-full h-auto mb-4"
        />
        <p className="text-[#666666] text-[12px]">
          &copy; 2026 Regalis Realty Media &middot; <a href="https://termsandconditions.regalisrealtymedia.com/" className="hover:text-[#c9a84c] transition-colors">Terms</a> &middot; <a href="https://privacypolicy.regalisrealtymedia.com/" className="hover:text-[#c9a84c] transition-colors">Privacy</a>
        </p>
      </div>
    </footer>
  );
}
