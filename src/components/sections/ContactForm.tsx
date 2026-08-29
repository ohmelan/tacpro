"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { CheckboxField, SelectField, TextField, TextareaField, PhoneField } from "@/components/ui/Field";
import { services } from "@/content/services";
const initialState: ContactFormState = { status: "idle", message: "" };
const languages = ["English", "Malayalam"];
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="bg-brand text-ink inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold tracking-tight disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </motion.button>
  );
}
export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  return (
    <form action={formAction} className="flex flex-col gap-6">
      {}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField label="Name" id="name" name="name" type="text" required />
        <TextField 
          label="Email" 
          id="email" 
          name="email" 
          type="email" 
          pattern="[a-zA-Z0-9._%\+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address (e.g. name@example.com)"
          required 
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <PhoneField 
          label="Contact Number" 
          id="phone" 
          name="phone" 
          type="tel" 
          pattern="[0-9]{10}"
          minLength={10}
          maxLength={10}
          title="Please enter exactly 10 digits"
          required 
        />
        <TextField label="Organization Name" id="organization" name="organization" type="text" />
      </div>
      <SelectField label="What do you need help with?" id="service" name="service" defaultValue="">
        <option value="">Select a service (optional)</option>
        {services.map((service) => (
          <option key={service.slug} value={service.title}>
            {service.title}
          </option>
        ))}
        <option value="Other">Other</option>
      </SelectField>
      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          label="Preferred Language"
          id="preferredLanguage"
          name="preferredLanguage"
          defaultValue="English"
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </SelectField>
        <SelectField label="Select Your State" id="state" name="state" defaultValue="">
          <option value="" disabled>
            Select your state
          </option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </SelectField>
      </div>
      <TextareaField label="Message" id="message" name="message" required rows={5} />
      <CheckboxField
        label="I authorize TAC and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND/NDNC."
        id="consent"
        name="consent"
        required
      />
      <div className="mt-2 flex items-center gap-4">
        <SubmitButton />
        {state.status !== "idle" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`text-sm ${state.status === "success" ? "text-brand" : "text-attention-soft"}`}
            role="status"
          >
            {state.message}
          </motion.p>
        )}
      </div>
    </form>
  );
}
