
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-unbounded",
  subsets: ["latin"],
})
export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`text-5xl md:text-[60px] max-w-[900px] mx-auto font-bold !leading-[60px] uppercase text-center mt-10 whitespace-pre-wrap section-title ${unbounded.className}`}>{children}</h2>
  );
}
