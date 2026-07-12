"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/nav-links";

export function ContactForm() {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = `${t.contact.subjectPrefix} — ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card space-y-4 rounded-3xl p-7 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder={t.contact.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background/50 focus-visible:ring-brand/50 h-12 rounded-xl border border-white/10 px-4 text-sm outline-none transition-colors focus-visible:ring-2"
          required
        />
        <input
          type="email"
          placeholder={t.contact.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background/50 focus-visible:ring-brand/50 h-12 rounded-xl border border-white/10 px-4 text-sm outline-none transition-colors focus-visible:ring-2"
          required
        />
      </div>
      <textarea
        placeholder={t.contact.messagePlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="bg-background/50 focus-visible:ring-brand/50 w-full resize-none rounded-xl border border-white/10 px-4 py-3 text-sm outline-none transition-colors focus-visible:ring-2"
        required
      />

      <div className="flex flex-col items-end gap-2 pt-1">
        <Magnetic>
          <Button
            type="submit"
            className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-7 text-sm font-medium hover:opacity-90"
          >
            {t.contact.send}
            <Send className="size-4" />
          </Button>
        </Magnetic>
        <p className="text-muted-foreground text-caption">{t.contact.sendNote}</p>
      </div>
    </form>
  );
}
