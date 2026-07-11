"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { contactSchema } from "@/lib/validations/contact";

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  text: string;
}

const initialMessages: ChatMessage[] = [
  {
    id: "intro",
    role: "assistant",
    text: "Hola, soy Adrián. Cuéntame sobre tu proyecto u oportunidad y te respondo directo a tu correo.",
  },
];

type Status = "idle" | "sending" | "sent" | "unavailable";

export function ContactChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = contactSchema.safeParse({ name, email, message, company });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revisa los campos del formulario.");
      return;
    }

    setStatus("sending");
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", text: message },
    ]);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request-failed");

      setStatus("sent");
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text: "¡Mensaje enviado! Te responderé pronto a tu correo.",
        },
      ]);
      setMessage("");
    } catch {
      setStatus("unavailable");
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text: "El envío automático aún no está disponible — escríbeme directo a adrian-pico-28@hotmail.com mientras tanto.",
        },
      ]);
    }
  }

  const isDone = status === "sent" || status === "unavailable";

  return (
    <div className="border-border bg-card shadow-elevation-2 rounded-2xl border">
      <div className="space-y-4 p-6">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {msg.role === "assistant" && (
                <Avatar size="sm" className="mt-0.5 shrink-0">
                  <AvatarFallback className="bg-brand text-brand-foreground text-xs">
                    AP
                  </AvatarFallback>
                </Avatar>
              )}
              <p
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === "assistant"
                    ? "bg-muted rounded-tl-sm"
                    : "bg-brand text-brand-foreground rounded-tr-sm"
                }`}
              >
                {msg.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!isDone && (
        <form onSubmit={handleSubmit} className="border-border space-y-3 border-t p-6">
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
            rows={3}
            className="border-border bg-background focus-visible:ring-ring w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none focus-visible:ring-2"
            required
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {error && <p className="text-destructive text-sm">{error}</p>}

          <div className="flex justify-end">
            <Magnetic>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="shadow-glow bg-brand text-brand-foreground gap-2 rounded-full px-5 hover:opacity-90"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                <Send className="size-4" />
              </Button>
            </Magnetic>
          </div>
        </form>
      )}
    </div>
  );
}
