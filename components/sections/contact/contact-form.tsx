"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AtSign, Loader2, Send, Tag, Type, User } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/nav-links";

const inputClasses =
  "bg-background/50 focus-visible:ring-brand/50 focus-visible:border-brand-border h-12 w-full rounded-xl border border-white/10 pr-4 pl-10 text-sm outline-none transition-all focus-visible:ring-2";

const fieldTransition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

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

  return (
    <div className="glass-card relative h-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={fieldTransition}
            className="flex h-full flex-col items-center justify-center space-y-2 p-6 text-center sm:p-8"
          >
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              {t.contact.successTitle}
            </h3>
            <p className="text-muted-foreground text-sm">{t.contact.successNote}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={fieldTransition}
            className="flex h-full flex-col space-y-4 p-6 sm:p-8"
          >
            <h3 className="font-heading text-base font-semibold tracking-tight">
              {t.contact.formTitle}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative">
                <User className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>
              <div className="relative">
                <AtSign className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>
            </div>
            <div className="relative">
              <Tag className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.contact.subjectPlaceholder}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div className="relative flex-1">
              <Type className="text-muted-foreground pointer-events-none absolute top-4 left-3.5 size-4" />
              <textarea
                placeholder={t.contact.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-background/50 focus-visible:ring-brand/50 focus-visible:border-brand-border h-full w-full resize-none rounded-xl border border-white/10 py-3.5 pr-4 pl-10 text-sm outline-none transition-all focus-visible:ring-2"
                required
              />
            </div>

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
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
