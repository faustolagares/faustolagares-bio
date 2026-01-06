import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaPinterest } from 'react-icons/fa';
import { SiTiktok, SiThreads } from 'react-icons/si';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-4">
      {/* Primeira linha - 5 ícones */}
      <div className="flex justify-center gap-3">
        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <FaXTwitter className="w-5 h-5 text-primary/80" />
        </a>
        
        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <FaInstagram className="w-5 h-5 text-pink-500/80" />
        </a>

        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <FaFacebook className="w-5 h-5 text-blue-600/80" />
        </a>

        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <SiTiktok className="w-5 h-5 text-primary/80" />
        </a>

        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <SiThreads className="w-5 h-5 text-primary/80" />
        </a>
      </div>

      {/* Segunda linha - 4 ícones */}
      <div className="flex justify-center gap-3">
        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <FaPinterest className="w-5 h-5 text-red-600/80" />
        </a>

        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <FaGithub className="w-5 h-5 text-primary/80" />
        </a>

        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <FaLinkedin className="w-5 h-5 text-blue-500/80" />
        </a>

        <a href="#" className="flex items-center justify-center w-10 h-10 bg-secondary/30 rounded-full border border-border hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
          <FaYoutube className="w-5 h-5 text-red-500/80" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
