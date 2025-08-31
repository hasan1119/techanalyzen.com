import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  subsets: ["latin"],
});

const ContactForm = () => {
  return (
    <div className="bg-[#39b6501a] border border-dashed border-natural-400 shadow py-10 px-8 rounded-2xl mx-2 md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-4 md:gap-y-6">
        {/* first name */}
        <div className="flex flex-col">
          <label
            htmlFor="fname"
            className={`mb-1 font-medium dark:text-[#f6f3fc] text-gray-800 ${figtree.className}`}
          >
            First Name
          </label>
          <input
            className="border border-dashed border-[#22272c]/30 dark:border-[#22272c] rounded-lg py-3 px-4 text-base outline-none bg-transparent transition-all ease-in-out focus:border-primary dark:focus:border-primary dark:text-[#f6f3fc] text-gray-700 w-full"
            type="text"
            id="fname"
            name="fname"
            placeholder="Your first name"
          />
        </div>
        {/* Last name */}
        <div className="flex flex-col">
          <label
            htmlFor="lname"
            className={`mb-1 font-medium dark:text-[#f6f3fc] text-gray-800 ${figtree.className}`}
          >
            Last Name
          </label>
          <input
            className="border border-dashed border-[#22272c]/30 dark:border-[#22272c] rounded-lg py-3 px-4 text-base outline-none bg-transparent transition-all ease-in-out focus:border-primary dark:focus:border-primary dark:text-[#f6f3fc] text-gray-700 w-full"
            type="text"
            id="lname"
            name="lname"
            placeholder="Your last name"
          />
        </div>
        {/* Phone */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className={`mb-1 font-medium dark:text-[#f6f3fc] text-gray-800 ${figtree.className}`}
          >
            Phone
          </label>
          <input
            className="border border-dashed border-[#22272c]/30 dark:border-[#22272c] rounded-lg py-3 px-4 text-base outline-none bg-transparent transition-all ease-in-out focus:border-primary dark:focus:border-primary dark:text-[#f6f3fc] text-gray-700 w-full"
            type="number"
            name="phone"
            id="phone"
            placeholder="Your phone number"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={`mb-1 font-medium dark:text-[#f6f3fc] text-gray-800 ${figtree.className}`}
          >
            Email
          </label>
          <input
            className="border border-dashed border-[#22272c]/30 dark:border-[#22272c] rounded-lg py-3 px-4 text-base outline-none bg-transparent transition-all ease-in-out focus:border-primary dark:focus:border-primary dark:text-[#f6f3fc] text-gray-700 w-full"
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="description"
            className={`mb-1 font-medium dark:text-[#f6f3fc] text-gray-800 ${figtree.className}`}
          >
            Description
          </label>
          <textarea
            className="border border-dashed border-[#22272c]/30 dark:border-[#22272c] rounded-lg py-3 px-4 text-base outline-none bg-transparent !text-gray-700 dark:!text-[#f6f3fc] w-full"
            id="description"
            name="description"
            rows={4}
            placeholder="Message"
          />
        </div>

        <button className="relative z-20 rounded-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 backdrop-blur-3xl px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-green-700 hover:shadow-purple-500/25">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
