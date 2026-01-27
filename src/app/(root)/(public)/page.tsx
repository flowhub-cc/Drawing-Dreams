"use client";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock,
  Video,
  Sparkles,
  Award,
  Users,
  CheckCircle,
  Star,
  Instagram,
  MessageCircle,
  Mail,
  AlertCircle,
  Palette,
  Heart,
  FileSpreadsheet,
  Notebook,
  MessageSquare,
  Target as TargetIcon,
  HelpCircle,
  Lock,
  MapPin,
  Brush,
  BookOpen,
  Gift,
  Rocket,
  Users2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Shield,
  Map,
  Brain,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Globe,
  MousePointer,
  Sun,
  Sunrise,
  Sunset,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const WEBINAR_CONFIG = {
  DATE_TIME: "2026-02-08 14:00:00",
  TIMEZONE: "Asia/Kolkata",
  RAZORPAY_LINK: "https://rzp.io/rzp/drawingdreams",
  PRICE: {
    original: "₹999",
    discounted: "Rs.  30 ONLY",
  },
  MAX_SEATS: 100,
};

const COLORS = {
  orange: {
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#F97316",
    600: "#EA580C",
    700: "#C2410C",
    800: "#9A3412",
    900: "#7C2D12",
  },
  amber: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
  },
  neutral: {
    50: "#FAFAF9",
    100: "#F5F5F4",
    800: "#292524",
    900: "#1C1917",
  },
};

const formatTime = (time: number) => {
  return time.toString().padStart(2, "0");
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isPast: false };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  const webinarDateTime = new Date(WEBINAR_CONFIG.DATE_TIME);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(webinarDateTime));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(webinarDateTime));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = () => {
    window.open(WEBINAR_CONFIG.RAZORPAY_LINK, "_blank");
  };

  if (timeLeft.isPast) {
    return (
      <div className='relative overflow-hidden bg-linear-to-br from-orange-500 via-amber-500 to-yellow-500 text-white p-8 md:p-10 rounded-3xl shadow-2xl'>
        {/* Animated gradient background */}
        <div className='absolute inset-0 bg-linear-to-r from-orange-600/50 via-amber-600/50 to-yellow-600/50 animate-pulse'></div>
        {/* Floating particles */}
        <div className='absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-20 translate-x-20 blur-2xl'></div>
        <div className='absolute bottom-0 left-0 w-32 h-32 bg-amber-300/30 rounded-full translate-y-16 -translate-x-16 blur-2xl'></div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        soluta! Inventore excepturi assumenda voluptatibus quidem hic veritatis
        reiciendis quis perferendis facere ut. Iste harum dolorum, ipsum id
        aliquam odit cupiditate?
        <div className='relative z-10 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full mb-6 border border-white/40'>
            <Zap className='w-4 h-4' />
            <span className='text-sm font-semibold'>
              LIVE NOW • JOIN IMMEDIATELY
            </span>
          </div>

          <h3 className='text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-amber-100'>
            Webinar Has Started! Doors Closing Soon
          </h3>
          <p className='text-lg opacity-90 mb-8 max-w-2xl mx-auto'>
            Last chance to join the live session and transform your art journey
            today.
          </p>

          <Button
            onClick={handleRegisterClick}
            className='group px-8 py-4 text-lg rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105'
            style={{
              background: `linear-gradient(135deg, ${COLORS.orange[50]}, ${COLORS.amber[100]})`,
              color: COLORS.orange[700],
            }}
          >
            <Rocket className='w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform' />
            Join Live Session Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className='relative mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-2xl text-white/95 p-8 md:p-10'>
      {/* Background image */}
      <img
        src='/assets/HeroPage.png'
        alt=''
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Dark overlay (reduced for readability) */}
      <div className='absolute inset-0 bg-black/55' />

      {/* Brand color overlay */}
      <div className='absolute inset-0 bg-linear-to-br from-orange-500/30 via-amber-500/20 to-yellow-500/20' />

      {/* Floating elements */}
      <div className='absolute top-0 right-0 w-48 h-48 bg-amber-300/25 rounded-full -translate-y-24 translate-x-24 blur-2xl' />
      <div className='absolute bottom-0 left-0 w-40 h-40 bg-yellow-300/25 rounded-full translate-y-20 -translate-x-20 blur-2xl' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl' />

      <div className='relative z-10'>
        <div className='text-center mb-8'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full mb-6 border border-white/50'>
            <Clock className='w-4 h-4 text-white' />
            <span className='text-sm font-semibold text-white'>
              WEBINAR STARTS IN
            </span>
          </div>

          <div className='flex justify-center space-x-4 md:space-x-6 mb-10'>
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className='text-center'>
                <div className='relative group'>
                  <div className='relative w-18 h-18 md:w-24 md:h-24 rounded-2xl bg-white/25 backdrop-blur-sm border border-white/40 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                    <div className='text-2xl md:text-3xl font-bold text-white drop-shadow-md'>
                      {formatTime(
                        timeLeft[unit as keyof Omit<TimeLeft, "isPast">],
                      )}
                    </div>
                    <div className='text-xs md:text-sm font-semibold uppercase tracking-wider text-white/90 mt-1'>
                      {unit.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className='absolute inset-0 rounded-2xl border-2 border-amber-300/60 animate-ping opacity-20' />
                </div>
              </div>
            ))}
          </div>

          <div className='space-y-8'>
            <Button
              onClick={handleRegisterClick}
              className='group px-8 py-5 text-lg rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-orange-800 drop-shadow-sm'
              style={{
                background: `linear-gradient(135deg, ${COLORS.orange[50]}, ${COLORS.amber[100]})`,
              }}
            >
              <Rocket className='w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform duration-300' />
              Get My Roadmap for ₹30
              <Sunrise className='w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300' />
            </Button>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 text-sm'>
              <div className='flex items-center gap-2 px-4 py-2 bg-white/25 backdrop-blur-sm rounded-full border border-white/40'>
                <CalendarDays className='w-4 h-4 text-white' />
                <span className='font-medium text-white'>
                  {webinarDateTime.toLocaleDateString("en-IN", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className='flex items-center gap-2 px-4 py-2 bg-white/25 backdrop-blur-sm rounded-full border border-white/40'>
                <Clock className='w-4 h-4 text-white' />
                <span className='font-medium text-white'>
                  {webinarDateTime.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  IST
                </span>
              </div>
              <div className='flex items-center gap-2 px-4 py-2 bg-white/25 backdrop-blur-sm rounded-full border border-white/40'>
                <Sun className='w-4 h-4 text-white' />
                <span className='font-medium text-white'>
                  Live Online Session
                </span>
              </div>
            </div>

            <p className='text-sm max-w-md mx-auto bg-white/15 backdrop-blur-sm rounded-xl p-3 border border-white/30 text-white'>
              ⚡ Only{" "}
              <span className='font-bold text-amber-200'>
                {WEBINAR_CONFIG.MAX_SEATS} spots
              </span>{" "}
              available. Registration closes when timer hits zero!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FixedCountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [isVisible, setIsVisible] = useState(true);
  const webinarDateTime = new Date(WEBINAR_CONFIG.DATE_TIME);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(webinarDateTime));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(webinarDateTime));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = () => {
    window.open(WEBINAR_CONFIG.RAZORPAY_LINK, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white z-50 shadow-2xl border-t-2 border-amber-500/50 backdrop-blur-lg'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <div className='hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30'>
              <Zap className='text-amber-50 w-3.5 h-3.5' />
              <span className='text-amber-50 text-sm font-medium'>
                Limited Time Offer
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex gap-2'>
                {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                  <div key={unit} className='text-center'>
                    <div className='px-3 py-2 min-w-[52px] bg-white/20 backdrop-blur-sm rounded-xl border border-white/30'>
                      <div className='text-lg font-bold text-white'>
                        {formatTime(
                          timeLeft[unit as keyof Omit<TimeLeft, "isPast">],
                        )}
                      </div>
                      <div className='text-xs font-medium uppercase tracking-wider opacity-90 text-white'>
                        {unit.charAt(0)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <div className='text-center'>
              <div className='text-sm text-amber-50 line-through opacity-75'>
                Rs. 999
              </div>
              <div className='text-xl font-bold bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent'>
                {WEBINAR_CONFIG.PRICE.discounted}
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <Button
                onClick={handleRegisterClick}
                className='px-5 py-2.5 text-sm rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                style={{
                  background: `linear-gradient(135deg, ${COLORS.orange[50]}, ${COLORS.amber[100]})`,
                  color: COLORS.orange[700],
                }}
              >
                <Rocket className='w-3.5 h-3.5 mr-1.5' />
                Register Now
              </Button>
              <button
                onClick={() => setIsVisible(false)}
                className='text-amber-50 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors border border-white/30'
                aria-label='Close'
              >
                ×
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const YouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle play/pause through postMessage
  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const message = isPlaying
      ? JSON.stringify({ event: "command", func: "playVideo", args: "" })
      : JSON.stringify({ event: "command", func: "pauseVideo", args: "" });

    iframe.contentWindow?.postMessage(message, "https://www.youtube.com");
  }, [isPlaying]);

  const handleIframeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Don't toggle play on iframe click, let YouTube handle it
    return false;
  };

  return (
    <div className='relative group'>
      {/* Glowing border effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-300'></div>

      <div className='relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-300/50'>
        <iframe
          ref={iframeRef}
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/eDuM-US_Gjk?si=Sgd43lmt9-dpmv5q&enablejsapi=1&controls=1&modestbranding=1&rel=0&showinfo=0'
          title='From Confused to Confident Artist - Webinar Preview'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='absolute inset-0 w-full h-full'
          loading='eager'
          onClick={handleIframeClick}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent pointer-events-none'></div>

        {/* Clickable overlay for play - Only shows when not playing */}
        {!isPlaying && (
          <div
            className='absolute inset-0 cursor-pointer'
            onClick={togglePlay}
          />
        )}

        {/* Clickable overlay for pause - Shows when playing */}
        {isPlaying && (
          <div
            className='absolute inset-0 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300'
            onClick={togglePlay}
          />
        )}
      </div>
    </div>
  );
};
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  duration: string;
  videoSrc: string;
  thumbnail: string;
  rating: number;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const testimonials: Testimonial[] = [
    {
      name: "Dev",
      role: "Beginner Artist",
      quote:
        "My artwork has improved a lot. Meenakshi mam's teaching way is very simple and easy to understand. Because of her guidance I feel more confident in my drawing skills",
      duration: "",
      videoSrc: "/assets/VT2.mp4",
      thumbnail: "/assets/vt2thumb.png",
      rating: 5,
    },
    {
      name: "Divyashree",
      role: "Hobby Artist",
      quote:
        "Course is designed in well structured way. Art fundamentals are placed in practicals which is highly engaging. Time is given  to practice which she reviews and guide then and there.",
      duration: "",
      videoSrc: "/assets/VT3.mp4",
      thumbnail: "/assets/VT3-thumb.png",
      rating: 5,
    },
    {
      name: "Vismat",
      role: "Student",
      quote:
        "The classses have been really helpful in understanding new concepts and exploring new mediums in drawing. I am now able to make my own portraits, which is a big personal achievement.",
      duration: "",
      videoSrc: "/assets/VT4.mp4",
      thumbnail: "/assets/VT4-thumb.png",
      rating: 5,
    },
    {
      name: "Divya",
      role: "Art Student",
      quote:
        "I was very weak in the fundamentals but as now Meenakshi Mam, has helped with the principles i can draw anything.",
      duration: "",
      videoSrc: "/assets/VT1.mp4",
      thumbnail: "/assets/VT1-thumb.png",
      rating: 5,
    },
  ];

  const handlePlayVideo = (index: number) => {
    if (playingVideo === index) {
      videoRefs.current[index]?.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.pause();
        videoRefs.current[playingVideo]!.currentTime = 0;
      }
      setPlayingVideo(index);
      setTimeout(() => {
        videoRefs.current[index]?.play();
      }, 100);
    }
  };

  const handleVideoClick = (index: number) => {
    if (playingVideo === index) {
      videoRefs.current[index]?.pause();
      setPlayingVideo(null);
    } else {
      handlePlayVideo(index);
    }
  };

  const handleVideoEnded = (index: number) => {
    setPlayingVideo(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.currentTime = 0;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='w-full'>
      <div className='relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200'>
        {/* Background pattern */}
        <div
          className='absolute inset-0 opacity-30'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fb923c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className='absolute top-6 left-6 z-10'>
          <div className='flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg'>
            <Video className='w-3.5 h-3.5' />
            <span className='text-amber-50 text-sm font-semibold'>
              Video Testimonials
            </span>
          </div>
        </div>

        <div
          className='flex transition-transform duration-500 ease-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='w-full flex-shrink-0 p-8 md:p-12 min-h-[560px] lg:min-h-[620px] flex justify-center items-center'
            >
              <div className='w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12'>
                {/* VIDEO CARD */}
                <div className='lg:w-2/5'>
                  <div className='group relative'>
                    <div className='absolute -inset-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500'></div>

                    <div className='relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border-2 border-amber-300'>
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={testimonial.videoSrc}
                        className='w-full h-full object-cover'
                        onEnded={() => handleVideoEnded(index)}
                        onClick={() => handleVideoClick(index)}
                        playsInline
                        preload='metadata'
                        style={{
                          opacity: playingVideo === index ? 1 : 0,
                          position: "absolute",
                          inset: 0,
                          zIndex: playingVideo === index ? 20 : 10,
                        }}
                      />

                      {playingVideo !== index && (
                        <div
                          className='absolute inset-0 cursor-pointer'
                          onClick={() => handleVideoClick(index)}
                        >
                          {/* Thumbnail image */}
                          <img
                            src={testimonial.thumbnail}
                            alt='Video thumbnail'
                            className='absolute inset-0 w-full h-full object-cover'
                          />

                          {/* Black overlay */}
                          <div className='absolute inset-0 bg-black/50' />

                          {/* Play UI overlay */}
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='text-center'>
                              <div className='w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4'>
                                <Play className='w-8 h-8 text-white ml-1' />
                              </div>
                            </div>
                          </div>

                          {/* Bottom fade + metadata */}
                          <div className='absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent'>
                            <div className='absolute bottom-4 left-4 right-4'>
                              <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                  <div className='w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl'>
                                    <Play className='w-6 h-6 text-white ml-0.5' />
                                  </div>
                                  <span className='text-white font-medium text-lg'>
                                    Play Their Story
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {playingVideo === index && (
                        <div className='absolute inset-0'>
                          <div
                            className='absolute inset-0 cursor-pointer'
                            onClick={() => handleVideoClick(index)}
                            title='Click to pause'
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* VIDEO CONTROLS */}
                  <div className='mt-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
                    <Button
                      size='lg'
                      onClick={() => handleVideoClick(index)}
                      className='w-full sm:w-auto px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105'
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.orange[500]}, ${COLORS.amber[500]})`,
                        color: "white",
                      }}
                    >
                      {playingVideo === index ? (
                        <>
                          <Pause className='w-4 h-4 mr-2' />
                          Pause Video
                        </>
                      ) : (
                        <>
                          <Play className='w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform' />
                          Play Their Story
                        </>
                      )}
                    </Button>

                    <div className='flex items-center gap-1'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-6 h-6'
                          style={{
                            color: COLORS.orange[500],
                            fill: COLORS.orange[500],
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* TESTIMONIAL CONTENT */}
                <div className='lg:w-3/5'>
                  <div className='relative'>
                    <div className='absolute -top-6 -left-6 text-6xl text-amber-200/50 font-serif'>
                      "
                    </div>
                    <div className='relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-xl border-2 border-amber-200'>
                      <div className='mb-8'>
                        <p className='text- mdsm:text-3xl font-light italic leading-relaxed text-orange-900'>
                          {testimonial.quote}
                        </p>
                      </div>

                      <div className='pt-8 border-t border-amber-200'>
                        <div className='flex items-center gap-6'>
                          <div className='w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center shadow-lg'>
                            <span className='text-2xl font-bold text-white'>
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className='text-2xl font-bold text-orange-900'>
                              {testimonial.name}
                            </h4>
                            <p className='text-orange-700'>
                              {testimonial.role}
                            </p>
                            <div className='flex items-center gap-3 mt-3'>
                              <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className='w-5 h-5'
                                    style={{
                                      color: COLORS.orange[500],
                                      fill: COLORS.orange[500],
                                    }}
                                  />
                                ))}
                              </div>
                              <span className='text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full'>
                                Verified Student
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CAROUSEL CONTROLS */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-white to-amber-50 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-10 border-2 border-amber-300 hover:scale-110 hover:rotate-[-5deg]'
          aria-label='Previous testimonial'
        >
          <ChevronLeft className='w-6 h-6 text-orange-600' />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-white to-amber-50 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-10 border-2 border-amber-300 hover:scale-110 hover:rotate-[5deg]'
          aria-label='Next testimonial'
        >
          <ChevronRight className='w-6 h-6 text-orange-600' />
        </button>

        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex ? "w-12" : "w-3"
              } h-3 rounded-full`}
              style={{
                background:
                  index === currentIndex
                    ? `linear-gradient(90deg, ${COLORS.orange[500]}, ${COLORS.amber[500]})`
                    : COLORS.orange[300],
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

interface BenefitCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => (
  <div className='group relative'>
    <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200'></div>
    <div className='relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 group-hover:border-orange-400'>
      <div className='flex items-start gap-4'>
        <div className='w-14 h-14 rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300'>
          <Icon className='w-7 h-7 text-white' />
        </div>
        <div className='flex-1'>
          <h3 className='font-bold text-xl mb-3 text-orange-900'>{title}</h3>
          <p className='text-orange-700'>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const webinarDateTime = new Date(WEBINAR_CONFIG.DATE_TIME);

  const faqs = [
    {
      q: "Who can join this webinar?",
      a: "This webinar is perfect for complete beginners, hobby artists, and anyone who feels scared, confused, or overwhelmed about starting their art journey.",
    },
    {
      q: "Do I need any art experience?",
      a: "No experience needed! This webinar is designed specifically for beginners with zero background in art.",
    },
    {
      q: "What will I learn in this webinar?",
      a: "You'll gain clarity on how to start art the right way, understand why beginners feel stuck, and build the belief that art is a learnable skill.",
    },
    {
      q: "What materials do I need?",
      a: "Just bring your curiosity! This webinar is about mindset and direction, so you don't need any art materials.",
    },
    {
      q: "How will I get the meeting link?",
      a: "Once registration is complete, you'll be added to a WhatsApp group where the webinar link will be shared immediately.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleRegisterClick = () => {
    window.open(WEBINAR_CONFIG.RAZORPAY_LINK, "_blank");
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 pb-20'>
      <FixedCountdownBar />

      {/* Hero Section */}
      <section className='relative overflow-hidden px-4 py-12 md:py-20'>
        {/* Gradient background */}
        <div className='absolute inset-0 bg-gradient-to-br from-orange-100/50 via-amber-100/30 to-yellow-100/20'></div>

        {/* Animated sun elements */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full -translate-y-48 translate-x-48 animate-pulse'></div>
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full translate-y-40 -translate-x-40 animate-pulse delay-1000'></div>

        {/* Sun rays */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]'>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className='absolute top-1/2 left-1/2 w-1 h-96 bg-gradient-to-b from-orange-400/10 to-transparent'
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                transformOrigin: "center bottom",
              }}
            ></div>
          ))}
        </div>

        <div className='container mx-auto max-w-6xl relative z-10'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full mb-6 animate-fade-in shadow-lg'>
              <Sparkles className='w-4 h-4' />
              <span className='text-amber-50 text-sm font-semibold'>
                LIVE MINDSET WEBINAR • LIMITED SEATS
              </span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                Confused About Art?
              </span>

              <br />
              <span className='text-3xl md:text-4xl lg:text-5xl text-orange-800 mt-4 block'>
                Stop Wasting Time on Random Tutorials.
              </span>
            </h1>

            <div className='mb-12'>
              <YouTubeVideo />
            </div>

            <p className='text-xl text-orange-700 mb-10 leading-relaxed bg-gradient-to-r from-orange-100/50 to-amber-100/50 p-6 rounded-2xl border border-amber-200'>
              Join the live workshop to get a clear, step-by-step roadmap to{" "}
              <span className='font-semibold text-orange-600'>
                start your art journey without fear.
              </span>
            </p>
          </div>

          <div className='mb-12'>
            <CountdownTimer />
          </div>

          <div className='space-y-3 mb-12'>
            {[
              "Remove fear and self-doubt around starting art",
              "Understand why beginners feel stuck or confused",
              "Get a clear roadmap for starting your art journey",
              "Learn how to explore different mediums confidently",
              "Build the belief that art is a learnable skill",
              "Join a supportive community of fellow beginners",
            ].map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-3 p-4 bg-gradient-to-r from-white to-amber-50 rounded-xl shadow-sm border-2 border-amber-200 hover:border-orange-400 transition-colors group'
              >
                <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform' />
                <span className='text-orange-800 text-lg'>{item}</span>
              </div>
            ))}
          </div>

          <div className='text-center'>
            <Button
              onClick={handleRegisterClick}
              size='lg'
              className='group px-12 py-7 text-xl rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
              style={{
                background: `linear-gradient(135deg, ${COLORS.orange[500]}, ${COLORS.amber[500]}, ${COLORS.orange[600]})`,
                color: "white",
              }}
            >
              <Rocket className='w-7 h-7 mr-3 group-hover:translate-x-2 transition-transform duration-300' />
              One Click Clarity
              <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300' />
            </Button>

            <p className='mt-6 text-sm text-orange-600 flex items-center justify-center gap-2 bg-orange-100/50 rounded-xl p-3 max-w-md mx-auto border border-amber-200'>
              <Lock className='w-4 h-4' />
              100% Secure Registration • Limited Seats • Recording for 7 Days
            </p>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className='px-4 py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/50 to-yellow-50/30'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12 md:mb-16'>
            <button
              onClick={() =>
                window.open(WEBINAR_CONFIG.RAZORPAY_LINK, "_blank")
              }
              className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group'
            >
              <TargetIcon className='w-4 h-4 group-hover:rotate-12 transition-transform duration-300' />
              <span className='text-amber-50 text-sm font-semibold'>
                YOUR TRANSFORMATION JOURNEY
              </span>
              <ArrowRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300' />
            </button>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                From Confusion to Confidence
              </span>
            </h2>
            <p className='text-xl text-orange-700 max-w-3xl mx-auto bg-white/50 p-6 rounded-2xl border border-amber-200'>
              This isn't a technical drawing class. It's a mindset shift
              designed to give you the clarity and confidence to start your art
              journey right.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                icon: Shield,
                title: "Silence The Inner Critic",
                description: `Stop the "I'm not good enough" voice and learn the mindset of a successful artist.`,
              },
              {
                icon: Map,
                title: `The "Zero-to-Artist" Plan`,
                description: `No more guessing. Get a clear step-by-step guide on what to practice and when.`,
              },
              {
                icon: Palette,
                title: `End Supply Overwhelm`,
                description: `Stop wasting money. Learn exactly which supplies you actually need to start.`,
              },
              {
                icon: Brain,
                title: `The "Talent Myth"`,
                description: `We prove that art is a learned skill, not a magical gift you’re born with.`,
              },
              {
                icon: Heart,
                title: `No-Judgment Zone`,
                description: `A safe, non-technical approach designed specifically for absolute beginners.`,
              },
              {
                icon: TrendingUp,
                title: "Instant Confidence",
                description: `Walk away with the excitement and belief that you can do this.`,
              },
            ].map((item, index) => (
              <BenefitCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className='px-4 py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                This Is For You If...
              </span>
            </h2>
            <p className='text-xl text-orange-700 max-w-3xl mx-auto'>
              Identify with any of these? You're in the right place.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                title: "Complete Beginners",
                description:
                  "You've always wanted to try art but don't know where to start",
                icon: "🎨",
                gradient: "from-orange-400 to-amber-400",
              },
              {
                title: "Hobby Artists",
                description: "You dabble in art but feel stuck or inconsistent",
                icon: "✨",
                gradient: "from-orange-700 to-orange-400",
              },
              {
                title: "Fearful Starters",
                description:
                  "Fear of failure or not being 'good enough' holds you back",
                icon: "🛡️",
                gradient: "from-orange-500 to-red-400",
              },
              {
                title: "Medium-Confused",
                description:
                  "Overwhelmed by all the supplies and techniques available",
                icon: "🤔",
                gradient: "from-yellow-400 to-orange-400",
              },
              {
                title: "Restarting Artists",
                description:
                  "You used to create art but stopped and want to begin again",
                icon: "🔄",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                title: "Self-Taught Learners",
                description:
                  "You've tried learning online but feel lost without structure",
                icon: "📚",
                gradient: "from-orange-600 to-amber-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 hover:border-orange-400 hover:scale-105'
              >
                <div className='flex items-start gap-4'>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='font-bold text-xl mb-2 text-orange-900'>
                      {item.title}
                    </h3>
                    <p className='text-orange-700'>{item.description}</p>
                  </div>
                </div>
                <div className='mt-4 pt-4 border-t border-amber-200'>
                  <div className='flex items-center gap-2 text-sm bg-gradient-to-r from-orange-100 to-amber-100 px-3 py-1 rounded-full'>
                    <MousePointer className='w-3 h-3 text-orange-600' />
                    <span className='text-orange-700 font-medium'>
                      Click "Register" to solve this
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='px-4 py-16 md:py-24 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/20'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                Real Stories, Real Transformations
              </span>
            </h2>
            <p className='text-xl text-orange-700 max-w-3xl mx-auto'>
              Watch how others transformed from confused to confident in their
              art journey.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* About Guide */}
      <section className='px-4 py-16 md:py-24 bg-gradient-to-br from-white via-amber-50 to-yellow-50'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
            <div className='lg:w-2/5'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-3xl blur-2xl opacity-30'></div>
                <div className='relative'>
                  <div className='w-64 h-64 md:w-80 md:h-80 mx-auto relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white'>
                    <Image
                      src='/assets/MentorImage.webp'
                      alt='Meenakshi Shukla - Art Mentor'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 256px, 320px'
                      priority
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent'></div>
                  </div>
                  <div className='absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 shadow-xl border-2 border-white flex items-center justify-center'>
                    <Award className='w-12 h-12 text-white' />
                  </div>
                  <div className='absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-400 shadow-xl border-2 border-white flex items-center justify-center'>
                    <Heart className='w-10 h-10 text-white' />
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-3/5'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full mb-4 shadow-lg'>
                <Sparkles className='w-4 h-4' />
                <span className='text-amber-50 text-sm font-semibold'>
                  MEET YOUR GUIDE
                </span>
              </div>

              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                  Meenakshi Shukla
                </span>
              </h2>
              <p className='text-xl text-orange-600 font-semibold mb-8 bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-xl border border-amber-200'>
                Founder, Drawing Dreams Art Institute • 7+ Years Experience •
                1500+ Students
              </p>

              <div className='space-y-6 mb-10'>
                {[
                  "7+ years specializing exclusively in beginner art education",
                  "Helped 1,500+ beginners start their art journey with confidence",
                  "Expert in breaking down complex art concepts into simple, actionable steps",
                  "Passionate advocate for making art accessible to everyone",
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-4 bg-white/50 p-4 rounded-xl border border-amber-200'
                  >
                    <div className='w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0'>
                      <CheckCircle className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-lg text-orange-800'>{item}</span>
                  </div>
                ))}
              </div>

              <div className='bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 text-orange-400 flex-shrink-0'>
                    <QuoteIcon />
                  </div>
                  <div>
                    <p className='text-xl italic text-orange-800 mb-4 leading-relaxed'>
                      "I kept meeting talented people who were too scared to
                      start. They had the desire but lacked the confidence and
                      direction. That's why I created this webinar - to give
                      beginners what I wish I had when I started."
                    </p>
                    <p className='font-bold text-orange-700'>
                      — Meenakshi Shukla
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className='px-4 py-16 md:py-24 bg-gradient-to-b from-white via-amber-50 to-yellow-50/30'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                Your Complete Starter Kit
              </span>
            </h2>
            <p className='text-xl text-orange-700 max-w-3xl mx-auto bg-white/50 p-6 rounded-2xl border border-amber-200'>
              Beyond just the live session, here's your complete starter kit for
              art confidence.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                icon: Video,
                title: "90-Min Live Masterclass",
                description:
                  "60-75 minute interactive session focused on clarity and confidence",
                duration: "Live Session",
                gradient: "from-orange-500 to-amber-500",
                highlight: true,
              },
              {
                icon: Map,
                title: `"Art Journey" Roadmap`,
                description:
                  "Step-by-step PDF guide on what to learn and in what order",
                duration: "PDF Guide",
                gradient: "from-amber-500 to-yellow-500",
              },
              {
                icon: FileSpreadsheet,
                title: "Medium Comparison Guide",
                description:
                  "Understand different art supplies and what's right for beginners",
                duration: "Cheat Sheet",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: Notebook,
                title: "Beginner Practice Exercises",
                description:
                  "Simple, non-intimidating exercises to build confidence",
                duration: "Practice Kit",
                gradient: "from-orange-400 to-amber-400",
              },
              {
                icon: MessageSquare,
                title: "Live Q&A Session",
                description:
                  "Get your specific questions answered directly by Meenakshi",
                duration: "Live Support",
                gradient: "from-amber-400 to-yellow-400",
              },
              {
                icon: Users2,
                title: "Beginner Community Access",
                description: "Connect with others starting their art journey",
                duration: "Community",
                gradient: "from-yellow-400 to-orange-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  item.highlight
                    ? "border-orange-400 bg-gradient-to-br from-white via-orange-50 to-amber-50"
                    : "border-amber-200"
                } hover:scale-105`}
              >
                <div className='flex items-start justify-between mb-4'>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}
                  >
                    <item.icon className='w-7 h-7 text-white' />
                  </div>
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${item.gradient} text-white shadow`}
                  >
                    {item.duration}
                  </span>
                </div>
                <h3 className='font-bold text-xl mb-3 text-orange-900'>
                  {item.title}
                </h3>
                <p className='text-orange-700'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT ARTWORK GALLERY SECTION */}
      <section className='px-4 py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-yellow-50/30'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full mb-4 shadow-lg'>
              <Palette className='w-4 h-4' />
              <span className='text-amber-50 text-sm font-semibold'>
                REAL STUDENT RESULTS
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                From 'I Can't Draw' to Masterpiece
              </span>
            </h2>
            <p className='text-xl text-orange-700 max-w-3xl mx-auto bg-white/50 p-6 rounded-2xl border border-amber-200'>
              Witness the amazing progress of students who started just like you
              - with confusion and self-doubt.
            </p>
          </div>

          {/* Mobile-Optimized Grid */}
          <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 mb-8'>
            {/* Artwork 1 */}
            <div className='group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4'>
                <div className='text-white'>
                  <p className='font-semibold text-sm md:text-base text-amber-50'>
                    Beginner's First Success
                  </p>
                  <p className='text-xs text-amber-200 mt-1'>Student Artwork</p>
                </div>
              </div>
              <img
                src='/assets/StudentArtwork1.webp'
                alt="Student Artwork 1 - Beginner's First Success"
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                loading='lazy'
              />
            </div>

            {/* Artwork 2 */}
            <div className='group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4'>
                <div className='text-white'>
                  <p className='font-semibold text-sm md:text-base text-amber-50'>
                    Confidence in Color
                  </p>
                  <p className='text-xs text-amber-200 mt-1'>Student Artwork</p>
                </div>
              </div>
              <img
                src='/assets/StudentArtwork2.webp'
                alt='Student Artwork 2 - Confidence in Color'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                loading='lazy'
              />
            </div>

            {/* Artwork 3 */}
            <div className='group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4'>
                <div className='text-white'>
                  <p className='font-semibold text-sm md:text-base text-amber-50'>
                    Journey of Growth
                  </p>
                  <p className='text-xs text-amber-200 mt-1'>Student Artwork</p>
                </div>
              </div>
              <img
                src='/assets/StudentArtwork3.webp'
                alt='Student Artwork 3 - Journey of Growth'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                loading='lazy'
              />
            </div>

            {/* Artwork 4 */}
            <div className='group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4'>
                <div className='text-white'>
                  <p className='font-semibold text-sm md:text-base text-amber-50'>
                    Skill Development
                  </p>
                  <p className='text-xs text-amber-200 mt-1'>Student Artwork</p>
                </div>
              </div>
              <img
                src='/assets/StudentArtwork4.webp'
                alt='Student Artwork 4 - Skill Development'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                loading='lazy'
              />
            </div>

            {/* Artwork 5 */}
            <div className='group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4'>
                <div className='text-white'>
                  <p className='font-semibold text-sm md:text-base text-amber-50'>
                    Artistic Breakthrough
                  </p>
                  <p className='text-xs text-amber-200 mt-1'>Student Artwork</p>
                </div>
              </div>
              <img
                src='/assets/StudentArtwork5.webp'
                alt='Student Artwork 5 - Artistic Breakthrough'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                loading='lazy'
              />
            </div>

            {/* Artwork 6 */}
            <div className='group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4'>
                <div className='text-white'>
                  <p className='font-semibold text-sm md:text-base text-amber-50'>
                    Creative Expression
                  </p>
                  <p className='text-xs text-amber-200 mt-1'>Student Artwork</p>
                </div>
              </div>
              <img
                src='/assets/StudentArtwork6.webp'
                alt='Student Artwork 6 - Creative Expression'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                loading='lazy'
              />
            </div>
          </div>

          {/* CTA */}
          <div className='text-center'>
            <Button
              onClick={() =>
                window.open(WEBINAR_CONFIG.RAZORPAY_LINK, "_blank")
              }
              size='lg'
              className='group px-8 py-6 text-lg rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
              style={{
                background: `linear-gradient(135deg, ${COLORS.orange[500]}, ${COLORS.amber[500]}, ${COLORS.orange[600]})`,
                color: "white",
              }}
            >
              <Rocket className='w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform duration-300' />
              Start Your Journey Now
              <ArrowRight className='w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300' />
            </Button>
            <p className='mt-4 text-sm text-orange-600 max-w-md mx-auto'>
              Join 1,500+ students who transformed from confused beginners to
              confident creators.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 md:py-24'>
        <div className='container mx-auto max-w-4xl'>
          <div className='relative overflow-hidden rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-400/50'>
            <img
              src='/assets/StudentArtwork5.webp'
              alt=''
              className='absolute inset-0 w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-black/70' />

            <div className='absolute inset-0 bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-yellow-500/20' />

            {/* Floating particles */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-32 translate-x-32 blur-2xl'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-amber-300/30 rounded-full translate-y-24 -translate-x-24 blur-2xl'></div>

            {/* Content */}
            <div className='relative z-10 text-center text-white'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full mb-6 border border-white/40'>
                <Gift className='text-amber-50 w-4 h-4' />
                <span className='text-sm text-amber-50 font-semibold'>
                  SPECIAL LAUNCH OFFER • 93% OFF
                </span>
              </div>

              <div className='flex justify-center text-white gap-5'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                  Ready to Transform
                  <span className='block bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent mt-2'>
                    Confusion Into Confidence?
                  </span>
                </h2>
              </div>

              <div className='mb-10'>
                <div className='inline-flex flex-col sm:flex-row items-center gap-6 bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30'>
                  <div className='text-center'>
                    <div className='text-3xl md:text-6xl font-bold mb-3'>
                      <span className='bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap'>
                        Rs.30/- ONLY
                      </span>
                    </div>
                  </div>
                  <div className='h-16 w-px bg-white/30 hidden sm:block'></div>
                  <div className='text-left mt-2 sm:mt-0'>
                    <div className='text-amber-50 px-4 py-1.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full text-sm whitespace-nowrap'>
                      Limited Spots Left
                    </div>
                  </div>
                </div>
              </div>

              <div className='space-y-8'>
                <Button
                  onClick={handleRegisterClick}
                  size='lg'
                  className='group px-8 sm:px-14 py-6 sm:py-7 text-xl sm:text-2xl rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.orange[50]}, ${COLORS.amber[100]})`,
                    color: COLORS.orange[700],
                  }}
                >
                  <Rocket className='w-6 h-6 sm:w-7 sm:h-7 mr-3 group-hover:translate-x-2 transition-transform duration-300' />
                  One Click Clarity
                  <ArrowRight className='w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='px-4 py-16 md:py-24 bg-gradient-to-br from-white via-orange-50 to-amber-50'>
        <div className='container mx-auto max-w-4xl'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'>
                Frequently Asked Questions
              </span>
            </h2>
            <p className='text-xl text-orange-700'>
              Everything you need to know before joining the webinar.
            </p>
          </div>

          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='group bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 hover:border-orange-400'
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className='w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-amber-50/50 transition-all duration-200 rounded-2xl group'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center group-hover:rotate-12 transition-transform'>
                      <HelpCircle className='w-6 h-6 text-white' />
                    </div>
                    <h3 className='font-semibold text-xl text-orange-900'>
                      {faq.q}
                    </h3>
                  </div>
                  <div
                    className={`transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className='w-6 h-6 text-orange-600' />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className='px-6 pb-6 pt-0'>
                    <div className='pl-16'>
                      <div className='flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200'>
                        <CheckCircle className='w-7 h-7 text-green-500 flex-shrink-0 mt-0.5' />
                        <p className='text-lg text-green-900'>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <div className='inline-flex flex-col sm:flex-row gap-6 items-center justify-center'>
              <Button
                variant='outline'
                size='lg'
                onClick={() => window.open("https://wa.me/+919651833502")}
                className='rounded-full border-2 border-orange-400 text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:border-orange-500'
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white'>
        <div className='container mx-auto max-w-6xl px-4 py-12 md:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg'>
                  <Brush className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent'>
                    Drawing Dreams Art Institute
                  </h3>
                  <p className='text-sm text-orange-300'>
                    Inspiring Artists Since 2017
                  </p>
                </div>
              </div>
              <p className='text-orange-300'>
                Empowering beginners to start their art journey with confidence
                and clarity through expert guidance and proven methods.
              </p>
            </div>

            <div>
              <h4 className='font-bold mb-4 text-xl text-amber-100'>
                Connect With Us
              </h4>
              <div className='flex gap-4 mb-6'>
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/meenakshiartt",
                    label: "Instagram",
                  },
                  {
                    icon: MessageCircle,
                    href: "https://wa.me/+919651833502",
                    label: "WhatsApp",
                  },
                  {
                    icon: Mail,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=Drawingdreams2023@gmail.com",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className='w-12 h-12 rounded-xl bg-gradient-to-r from-orange-600/30 to-amber-600/30 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 transition-all duration-300 hover:scale-110 border border-orange-700/50'
                    aria-label={social.label}
                  >
                    <social.icon className='w-5 h-5 stroke-white' />
                  </a>
                ))}
              </div>
              <div className='flex items-center gap-3 text-sm text-orange-300 bg-orange-900/30 p-3 rounded-xl border border-orange-800/50'>
                <MapPin className='w-4 h-4' />
                <span className='text-amber-50'>
                  Noida, India • Serving artists worldwide
                </span>
              </div>
            </div>
          </div>

          <div className='pt-8 border-t border-orange-800 text-center text-sm text-amber-50'>
            <p className='text-amber-50'>
              © {new Date().getFullYear()} Drawing Dreams Art Institute. All
              rights reserved.
            </p>
            <p className='mt-3 text-amber-50 font-medium'>
              From Confused to Confident Artist Webinar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Custom Quote Icon Component
const QuoteIcon = () => (
  <svg
    fill='currentColor'
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    className='w-10 h-10'
  >
    <path d='M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z' />
  </svg>
);

// Add CSS for gradient animation
const styles = `
  @keyframes gradient-shift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  .animate-gradient-shift {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
`;

// Add styles to head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
