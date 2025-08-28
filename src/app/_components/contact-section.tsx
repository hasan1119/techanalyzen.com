"use client"
import Container from "@/common/Container";
import SectionTitle from "@/common/SectionTitle";
import { motion } from 'framer-motion';
import { MapPin } from "lucide-react";
import { Figtree, Unbounded } from "next/font/google";
import ContactForm from "./contact-form";
const unbounded = Unbounded({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const figtree = Figtree({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  subsets: ["latin"],
});


const ContactSection = () => {
  return (
    <section id="contact" className="gradient-primary border-t">
      <Container>
        <div className="w-full py-18 px-4 md:px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <SectionTitle className="text-start">Get in touch
            </SectionTitle>
            <div className="flex flex-col gap-y-10 pt-10">
              <div className="flex lg:items-center gap-4 sm:gap-6 md:gap-8">
                <div className="w-12 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 backdrop-blur-3xl sm:w-16 md:w-[4.5rem] h-12 sm:h-16 md:h-[4.5rem] rounded-full bg-natural-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8"><path d="M0 24L1.687 17.837C0.645998 16.033 0.0989998 13.988 0.0999998 11.891C0.103 5.335 5.43799 0 11.993 0C15.174 0.001 18.16 1.24 20.406 3.488C22.6509 5.736 23.8869 8.724 23.8859 11.902C23.8829 18.459 18.548 23.794 11.993 23.794C10.003 23.793 8.04198 23.294 6.30499 22.346L0 24ZM6.59698 20.193C8.27298 21.188 9.87298 21.784 11.989 21.785C17.437 21.785 21.875 17.351 21.878 11.9C21.88 6.438 17.463 2.01 11.997 2.008C6.54498 2.008 2.11 6.442 2.108 11.892C2.107 14.117 2.75899 15.783 3.85399 17.526L2.85499 21.174L6.59698 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.85598 12.54 9.25898 11.567 9.08598 11.269C8.91298 10.972 9.06798 10.811 9.21598 10.663C9.34998 10.53 9.51298 10.316 9.66198 10.142C9.81298 9.97 9.86198 9.846 9.96198 9.647C10.061 9.449 10.012 9.275 9.93698 9.126C9.86198 8.978 9.26798 7.515 9.02098 6.92C8.77898 6.341 8.53398 6.419 8.35198 6.41L7.78198 6.4C7.58398 6.4 7.26198 6.474 6.98998 6.772C6.71798 7.07 5.94999 7.788 5.94999 9.251C5.94999 10.714 7.01498 12.127 7.16298 12.325C7.31198 12.523 9.25798 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z" fill="#fff"></path></svg>
                </div>
                <div className="border-b border-black pb-1">
                  <h4 className={`text-xs text-start sm:text-base md:text-lg text-text-600 leading-[22px] mb-2 sm:mb-3.5 md:mb-2 ${unbounded.className}`}>Whatsapp Link</h4>
                  <a href="https://api.whatsapp.com/send?phone=8801743591672" className={`text-sm sm:text-lg md:text-xl text-text-900 leading-[22px] font-semibold break-all ${figtree.className}`} target="_blank">https://wa.me/message/dsfrewr5345</a>
                </div>
              </div>

              <div className="flex lg:items-center gap-4 sm:gap-6 md:gap-8">
                <div className="w-12 sm:w-16 md:w-[4.5rem] h-12 sm:h-16 md:h-[4.5rem] rounded-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 backdrop-blur-3xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 text-white h-6 sm:w-8 sm:h-8"><path d="M26.668 5.33331H5.33464C3.86797 5.33331 2.6813 6.53331 2.6813 7.99998L2.66797 24C2.66797 25.4666 3.86797 26.6666 5.33464 26.6666H26.668C28.1346 26.6666 29.3346 25.4666 29.3346 24V7.99998C29.3346 6.53331 28.1346 5.33331 26.668 5.33331ZM26.668 10.6666L16.0013 17.3333L5.33464 10.6666V7.99998L16.0013 14.6666L26.668 7.99998V10.6666Z" fill="#fff"></path>
                  </svg>
                </div>
                <div className="">
                  <h4 className={`text-xs sm:text-base md:text-lg text-text-600 leading-[22px] mb-2 sm:mb-3.5 md:mb-2 text-start ${unbounded.className}`}>Email Us</h4>
                  <a href="mailto:hello@netrosystems.com" className={`text-sm sm:text-lg md:text-xl text-text-900 leading-[22px] font-semibold break-all ${figtree.className}`} target="_blank">info@techanalyzen.com</a>
                </div>
              </div>
              <div className="flex lg:items-center gap-4 sm:gap-6 md:gap-8">
                <div className="w-12 sm:w-16 md:w-[4.5rem] h-12 sm:h-16 md:h-[4.5rem] rounded-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 backdrop-blur-3xl flex items-center justify-center">
                  <MapPin className="size-8 text-white" />
                </div>
                <div className="text-start">
                  <h4 className={`text-xs sm:text-base md:text-lg text-text-600 leading-[22px] mb-2 sm:mb-3.5 md:mb-2 text-start ${unbounded.className}`}>Address</h4>
                  <p className={`text-sm sm:text-lg md:text-xl text-text-900 leading-[22px] font-semibold break-all ${figtree.className}`}>123 Tech Avenue, </p>
                  <p className={`text-sm sm:text-lg md:text-xl text-text-900 leading-[22px] font-semibold break-all mt-2 ${figtree.className}`}>Innovation City, 98765</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection