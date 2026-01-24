"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    const createConfetti = () => {
      const colors = ["#FB923C", "#F97316", "#F59E0B", "#FBBF24"];
      const confettiCount = 50;

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.cssText = `
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          top: -20px;
          left: ${Math.random() * 100}vw;
          border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
          animation: fall linear ${Math.random() * 3 + 2}s forwards;
          z-index: 1000;
        `;
        document.body.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }
    };

    createConfetti();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(${Math.random() * 360}deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
      document.querySelectorAll(".confetti").forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-md w-full'>
        <div className='text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-amber-200'>
          {/* Animated Check Circle */}
          <div className='relative inline-block mb-6'>
            <div className='w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center animate-bounce'>
              <CheckCircle className='w-20 h-20 text-white' />
            </div>
            <div className='absolute inset-0 rounded-full border-4 border-green-300 animate-ping opacity-75'></div>
          </div>

          {/* Thank You Text */}
          <h1 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
            Thank You!
          </h1>

          <p className='text-orange-700 text-lg mb-8'>
            Your registration is confirmed. Check your email and WhatsApp for
            the webinar link.
          </p>

          {/* Back Button */}
          <Button
            onClick={() => (window.location.href = "/")}
            className='group px-8 py-6 text-lg rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-r from-orange-500 to-amber-500 text-white'
          >
            <ArrowRight className='w-5 h-5 mr-2 group-hover:translate-x-2 transition-transform rotate-180' />
            Back to Home
            <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform' />
          </Button>
        </div>

        {/* Bottom Note */}
        <p className='text-center text-orange-600 mt-6 text-sm'>
          We&apos;re excited to have you join the webinar!
        </p>
      </div>
    </div>
  );
}
