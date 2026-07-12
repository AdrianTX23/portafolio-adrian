"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/nav-links";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = `Contacto desde el portafolio — ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border bg-card shadow-elevation-2 space-y-3 rounded-2xl border p-6"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-border bg-background focus-visible:ring-ring h-10 rounded-lg border px-3 text-sm outline-none focus-visible:ring-2"
          required
        />
        <input
          type="email"
          placeholder="Tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-border bg-background focus-visible:ring-ring h-10 rounded-lg border px-3 text-sm outline-none focus-visible:ring-2"
          required
        />
      </div>
      <textarea
        placeholder="Cuéntame en qué puedo ayudarte..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="border-border bg-background focus-visible:ring-ring w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none focus-visible:ring-2"
        required
      />

      <div className="flex flex-col items-end gap-2">
        <Magnetic>
          <Button
            type="submit"
            className="shadow-glow bg-brand text-brand-foreground gap-2 rounded-full px-5 hover:opacity-90"
          >
            Enviar mensaje
            <Send className="size-4" />
          </Button>
        </Magnetic>
        <p className="text-muted-foreground text-caption">
          Se abrirá tu cliente de correo con el mensaje ya redactado.
        </p>
      </div>
    </form>
  );
}
