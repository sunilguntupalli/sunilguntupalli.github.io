'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, CircleAlert, RotateCcw, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

const causes = [
  { name: 'Kafka Lag', detail: 'Consumer group lag is stable.', correct: false },
  { name: 'Database Issue', detail: 'Pool utilization is within bounds.', correct: false },
  { name: 'JWT / Auth Expiry', detail: '401s increased after token rotation.', correct: true },
  { name: 'Redis Cache Failure', detail: 'Cache hit ratio remains at 94%.', correct: false },
  { name: 'Kubernetes Pod Crash', detail: 'All checkout pods are Ready.', correct: false }
];

export function IncidentSimulator() {
  const [choice, setChoice] = useState<string | null>(null);
  const selected = causes.find(({ name }) => name === choice);
  const reset = () => setChoice(null);
  return <section id="simulator" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28" aria-labelledby="simulator-title">
    <div className="night-card overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-9">
      <div className="grid gap-7 lg:grid-cols-[.8fr_1.25fr_.6fr] lg:items-stretch">
        <div className="flex flex-col justify-between"><div><p className="eyebrow">Interactive</p><h2 id="simulator-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Incident<br />Simulator</h2><p className="mt-4 text-sm leading-6 text-slate-300">Can you identify the root cause of this production outage?</p><div className="mt-6 rounded-2xl border border-emerald-300/25 bg-emerald-400/10 p-4 text-center"><p className="text-xs uppercase tracking-wider text-emerald-200">System health</p><p className="mt-1 text-3xl font-semibold text-emerald-300">99.9%</p><p className="text-xs text-slate-300">Cluster ready</p></div></div><div className="mt-6 flex items-center gap-2 text-sm text-cyan-300"><ShieldAlert className="h-4 w-4" /> P2 · checkout-service</div></div>
        <div className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 p-4 font-mono text-xs leading-6 sm:p-5"><p className="text-slate-500">● ● ● <span className="ml-2 text-cyan-400">production logs</span></p><div className="mt-4 space-y-1"><p><span className="text-emerald-400">12:45:21 INFO</span> [auth-service] JWT token expired for userId=231</p><p><span className="text-red-400">12:45:22 WARN</span> [api-gateway] 401 rate increased to 12%</p><p><span className="text-red-400">12:45:23 ERROR</span> [payment-service] authorization rejected</p><p><span className="text-amber-300">12:45:24 INFO</span> [redis] cache hit ratio dropped to 92%</p><p><span className="text-red-400">12:45:25 ERROR</span> [api-gateway] 502 Bad Gateway</p><p><span className="text-slate-400">12:45:26 WARN</span> [k8s] pod restarts detected in prod namespace</p></div><p className="mt-4 text-cyan-300">› What&apos;s the likely root cause?</p></div>
        <div className="flex flex-col gap-2">{causes.map((cause) => <button key={cause.name} onClick={() => setChoice(cause.name)} className={`focus-ring rounded-lg border px-3 py-3 text-left text-sm transition ${choice === cause.name ? 'border-cyan-300 bg-cyan-400/15 text-cyan-100' : 'border-white/10 bg-white/[.035] text-slate-200 hover:border-cyan-300/40'}`}><span className="font-medium">{cause.name}</span><span className="mt-1 block text-[11px] text-slate-500">{cause.detail}</span></button>)}</div>
      </div>
      <AnimatePresence mode="wait">{selected && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`mt-5 flex gap-3 rounded-xl border p-4 text-sm ${selected.correct ? 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100' : 'border-amber-300/20 bg-amber-300/10 text-amber-100'}`}>{selected.correct ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <CircleAlert className="h-5 w-5 shrink-0" />}<p>{selected.correct ? 'Incident Resolved — Root Cause: JWT/Auth Expiry. Resolution time improved by 35%; system health restored to 99.9%.' : 'Not quite. The log stream points to the authentication layer—inspect the 401 spike after token rotation.'}</p><button onClick={reset} aria-label="Reset simulator" className="ml-auto self-start"><RotateCcw className="h-4 w-4" /></button></motion.div>}</AnimatePresence>
    </div>
  </section>;
}
