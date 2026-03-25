"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

function validate(values: FormState) {
  if (!values.name.trim()) return "Please add your name.";
  if (values.name.trim().length < 2) return "Your name is too short.";
  if (!values.email.trim()) return "Please add your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) return "Please use a valid email address.";
  if (!values.message.trim()) return "Please write a message.";
  if (values.message.trim().length < 10) return "Please add a little more detail.";
  return "";
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validate(values);
    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          website: values.website,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { message?: string; error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || "We could not send your message right now.");
      }

      setStatus("success");
      setFeedback(payload?.message || "Thanks. We will reply soon.");
      setValues(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your message right now.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative grid gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          name="name"
          aria-label="Your name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          maxLength={120}
          required
          className="input-field"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          aria-label="Your email address"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          maxLength={320}
          required
          className="input-field"
          placeholder="you@school.org"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          aria-label="Your message"
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          maxLength={5000}
          rows={7}
          required
          className="textarea-field"
          placeholder="Tell us a little about what you want to discuss."
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          aria-label="Send contact message"
          disabled={status === "submitting"}
          className="btn-primary disabled:cursor-wait disabled:opacity-80"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p className="text-sm text-stone-500">We usually reply within two business days.</p>
      </div>

      <p
        aria-live="polite"
        className={`min-h-6 rounded-lg px-3 py-2 text-sm ${
          status === "error"
            ? "bg-terracotta-100 text-terracotta-600"
            : status === "success"
              ? "bg-forest-100 text-forest-700"
              : "text-stone-500"
        }`}
      >
        {feedback}
      </p>
    </form>
  );
}
