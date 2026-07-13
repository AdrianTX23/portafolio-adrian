"use client";

import { Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/nav-links";

const inputClasses =
  "bg-background/50 focus-visible:ring-brand/50 h-12 w-full rounded-xl border border-white/10 px-4 text-sm outline-none transition-colors focus-visible:ring-2";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `${t.contact.subjectPrefix} — ${subject || name}`,
          from_name: name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card flex h-full flex-col items-center justify-center space-y-2 rounded-2xl p-6 text-center sm:p-8">
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {t.contact.successTitle}
        </h3>
        <p className="text-muted-foreground text-sm">{t.contact.successNote}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card flex h-full flex-col space-y-4 rounded-2xl p-6 sm:p-8"
    >
      <h3 className="font-heading text-base font-semibold tracking-tight">
        {t.contact.formTitle}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder={t.contact.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
          required
        />
        <input
          type="email"
          placeholder={t.contact.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
          required
        />
      </div>
      <input
        type="text"
        placeholder={t.contact.subjectPlaceholder}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className={inputClasses}
      />
      <textarea
        placeholder={t.contact.messagePlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="bg-background/50 focus-visible:ring-brand/50 w-full flex-1 resize-none rounded-xl border border-white/10 px-4 py-3 text-sm outline-none transition-colors focus-visible:ring-2"
        required
      />

      <div className="flex flex-col items-end gap-2 pt-1">
        <Magnetic>
          <Button
            type="submit"
            disabled={status === "sending"}
            className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-7 text-sm font-medium hover:opacity-90 disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                {t.contact.sending}
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              <>
                {t.contact.send}
                <Send className="size-4" />
              </>
            )}
          </Button>
        </Magnetic>
        <p
          className={`text-caption ${status === "error" ? "text-destructive" : "text-muted-foreground"}`}
        >
          {status === "error" ? (
            <>
              {t.contact.errorNote}{" "}
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="underline">
                {SOCIAL_LINKS.email}
              </a>
            </>
          ) : (
            t.contact.sendNote
          )}
        </p>
      </div>
    </form>
  );
}
