// components/RegistrationForm.tsx
"use client";
import { useState, useEffect } from "react";
import {
  X,
  Rocket,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { redirect, useRouter } from "next/navigation";

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
};

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  buttonText?: string;
}

// Webhook function
async function sendWebhook(name: string, email: string, contact: string) {
  const response = await fetch("/api/webhook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payload: {
        name,
        email,
        contact,
        registeredAt: new Date().toISOString(),
        source: "webinar_registration",
      },
    }),
  });

  return await response.json();
}

export default function FormPopup({
  isOpen,
  onClose,
  buttonText = "Register for Free Webinar",
}: RegistrationFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: "", contact: "", email: "" });
        setErrors({});
        setTouched({});
        setSubmitStatus({ type: null, message: "" });
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";

      case "contact":
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!value.trim()) return "Contact number is required";
        if (!phoneRegex.test(value.trim())) {
          return "Please enter a valid 10-digit Indian mobile number";
        }
        return "";

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value.trim())) {
          return "Please enter a valid email address";
        }
        return "";

      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await sendWebhook(
        formData.name,
        formData.email,
        formData.contact,
      );

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Registration successful! Thank you for registering. We'll send you the webinar details soon.",
        });

        // Reset form after 2 seconds and close
        setTimeout(() => {
          onClose();
        }, 100);
        router.push("/thank-you");
      } else {
        throw new Error(response.message || "Registration failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300'
      onClick={handleOverlayClick}
    >
      <div
        className='relative w-full max-w-md bg-linear-to-br from-white via-orange-50 to-amber-50 rounded-3xl shadow-2xl border-2 border-amber-200 overflow-hidden animate-in fade-in zoom-in duration-300'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative elements */}
        <div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-orange-400/20 to-amber-400/20 rounded-full -translate-y-20 translate-x-20 blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-40 h-40 bg-linear-to-tr from-amber-400/20 to-yellow-400/20 rounded-full translate-y-20 -translate-x-20 blur-3xl'></div>

        {/* Header with gradient */}
        <div className='relative px-6 py-8 bg-linear-to-r from-orange-500 to-amber-500'>
          <div className='absolute inset-0 bg-black/10'></div>
          <div className='relative z-10 text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4 border-2 border-white/50'>
              <Rocket className='w-8 h-8 text-white' />
            </div>
            <h2 className='text-2xl font-bold text-white mb-2'>
              Secure Your Free Spot!
            </h2>
            <p className='text-amber-50 text-sm'>
              Limited seats available • Join 1500+ artists
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className='absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 flex items-center justify-center border border-white/50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <X className='w-4 h-4 text-white' />
          </button>
        </div>

        {/* Form */}
        <div className='relative px-6 py-8'>
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-xl ${
                submitStatus.type === "success"
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-red-50 border-2 border-red-200"
              }`}
            >
              <div className='flex items-start gap-3'>
                {submitStatus.type === "success" ? (
                  <CheckCircle className='w-5 h-5 text-green-500 shrink-0 mt-0.5' />
                ) : (
                  <AlertCircle className='w-5 h-5 text-red-500 shrink-0 mt-0.5' />
                )}
                <p
                  className={`text-sm ${
                    submitStatus.type === "success"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Name Field */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-semibold text-orange-900 mb-2'
              >
                Full Name <span className='text-red-500'>*</span>
              </label>
              <div className='relative'>
                <div className='absolute left-3 top-1/2 -translate-y-1/2'>
                  <User className='w-5 h-5 text-orange-400' />
                </div>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter your full name'
                  disabled={isSubmitting || submitStatus.type === "success"}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-200
                    ${
                      errors.name && touched.name
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                        : "border-amber-200 focus:border-orange-400 focus:ring-orange-200"
                    } focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>
              {errors.name && touched.name && (
                <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
                  <AlertCircle className='w-4 h-4' />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Contact Field */}
            <div>
              <label
                htmlFor='contact'
                className='block text-sm font-semibold text-orange-900 mb-2'
              >
                Contact Number <span className='text-red-500'>*</span>
              </label>
              <div className='relative'>
                <div className='absolute left-3 top-1/2 -translate-y-1/2'>
                  <Phone className='w-5 h-5 text-orange-400' />
                </div>
                <input
                  type='tel'
                  id='contact'
                  name='contact'
                  value={formData.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='10-digit mobile number'
                  maxLength={10}
                  disabled={isSubmitting || submitStatus.type === "success"}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-200
                    ${
                      errors.contact && touched.contact
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                        : "border-amber-200 focus:border-orange-400 focus:ring-orange-200"
                    } focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>
              {errors.contact && touched.contact && (
                <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
                  <AlertCircle className='w-4 h-4' />
                  {errors.contact}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semibold text-orange-900 mb-2'
              >
                Email Address <span className='text-red-500'>*</span>
              </label>
              <div className='relative'>
                <div className='absolute left-3 top-1/2 -translate-y-1/2'>
                  <Mail className='w-5 h-5 text-orange-400' />
                </div>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter your email address'
                  disabled={isSubmitting || submitStatus.type === "success"}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-200
                    ${
                      errors.email && touched.email
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                        : "border-amber-200 focus:border-orange-400 focus:ring-orange-200"
                    } focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>
              {errors.email && touched.email && (
                <p className='mt-2 text-sm text-red-600 flex items-center gap-1'>
                  <AlertCircle className='w-4 h-4' />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isSubmitting || submitStatus.type === "success"}
              className='w-full group relative overflow-hidden rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-6 py-4 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
            >
              <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
              <div className='relative flex items-center justify-center gap-2'>
                {isSubmitting ? (
                  <>
                    <Loader2 className='w-5 h-5 animate-spin' />
                    <span>Registering...</span>
                  </>
                ) : submitStatus.type === "success" ? (
                  <>
                    <CheckCircle className='w-5 h-5' />
                    <span>Registered Successfully!</span>
                  </>
                ) : (
                  <>
                    <Rocket className='w-5 h-5 group-hover:rotate-12 transition-transform' />
                    <span>{buttonText}</span>
                  </>
                )}
              </div>
            </button>

            {/* Terms and privacy notice */}
            <p className='text-xs text-center text-orange-600 mt-4'>
              By registering, you agree to our{" "}
              <button className='font-semibold underline hover:text-orange-800 transition-colors'>
                Terms
              </button>{" "}
              and{" "}
              <button className='font-semibold underline hover:text-orange-800 transition-colors'>
                Privacy Policy
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
