"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TextField, TextareaField, SelectField } from "@/components/ui/Field";
export function AddReviewForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 3000);
  };
  return (
    <div className="mt-8 flex flex-col items-center">
      {!isOpen && (
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Add a Review
        </Button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-2xl overflow-hidden"
          >
            <div className="mt-6 border-brand-line bg-ink rounded-3xl border p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-success-soft text-success mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink-fg">
                    Thank you for your review!
                  </h3>
                  <p className="text-ink-fg-secondary mt-2">
                    Your feedback has been submitted for moderation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink-fg tracking-tight">
                      Leave a Review
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="text-ink-fg-dim hover:text-ink-fg transition-colors"
                      aria-label="Close"
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <TextField label="Full Name *" id="name" name="name" required placeholder="John Doe" />
                    <SelectField label="Rating *" id="rating" name="rating" required>
                      <option value="5">5 Stars - Excellent</option>
                      <option value="4">4 Stars - Very Good</option>
                      <option value="3">3 Stars - Average</option>
                      <option value="2">2 Stars - Poor</option>
                      <option value="1">1 Star - Terrible</option>
                    </SelectField>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <TextField label="Organization (Optional)" id="organization" name="organization" placeholder="Company Name" />
                    <TextField label="Designation (Optional)" id="designation" name="designation" placeholder="e.g. Director" />
                  </div>
                  <SelectField label="Service Used *" id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="Business Registrations">Business Registrations</option>
                    <option value="Income Tax & GST">Income Tax & GST</option>
                    <option value="Accounting & Financial">Accounting & Financial</option>
                    <option value="Registrations & Certifications">Registrations & Certifications</option>
                    <option value="Audit & Assurance">Audit & Assurance</option>
                    <option value="Trust & NGO">Trust & NGO</option>
                    <option value="Compliances & Support">Compliances & Support</option>
                  </SelectField>
                  <TextareaField
                    label="Your Review *"
                    id="review"
                    name="review"
                    required
                    placeholder="Tell us about your experience..."
                    rows={4}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button type="submit" variant="brand">
                      Submit Review
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
