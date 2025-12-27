import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f7f8f9] text-[#45505b] text-center py-10 px-4">
      <div className="container mx-auto">

        {/* NAME */}
        <h3 className="text-3xl font-montserrat uppercase sm:text-4xl font-bold mb-3">
          Omkar Patil
        </h3>

        {/* SUBTEXT */}
        <p className="text-[15px] font-raleway italic max-w-2xl mx-auto mb-10">
          Creating modern, responsive, and visually appealing web experiences
          with passion and precision.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex items-center  justify-center gap-3 mb-10">
         

          <a
            href="https://www.facebook.com/share/1JfJAaSBJi/"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0563BB] text-white hover:bg-[#0678E3] transition"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://www.instagram.com/_omya_patil_18?igsh=eDVmeDg2eTY3b2Ro"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0563BB] text-white hover:bg-[#0678E3] transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/omkar-patil-b744752a9/"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0563BB] text-white hover:bg-[#0678E3] transition"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="mb-2 font-raleway text-sm">
          © Copyright <strong>Omkar</strong>. All Rights Reserved
        </div>

        {/* CREDITS */}
        <div className="text-[13px] font-raleway">
          Designed by <a href="#" className="text-[#0563BB] font-semibold">Omkar Patil</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
