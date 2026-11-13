/* ---------------- PALETTE PRESETS ---------------- */
    const PALETTE_CONFIGS = {
      refined: {
        name: "REFINED",
        nameBm: "KEMAS",
        tagClass: "text-violet-300",
        tabs: {
          'first-time': 'active text-emerald-200 bg-emerald-950/35 border-emerald-500/45 shadow-[0_0_12px_rgba(16,185,129,0.12)] font-semibold',
          'token': 'active text-sky-200 bg-sky-950/35 border-sky-500/45 shadow-[0_0_12px_rgba(56,189,248,0.12)] font-semibold',
          'marketcoins': 'active text-violet-200 bg-violet-950/35 border-violet-500/45 shadow-[0_0_12px_rgba(139,92,246,0.12)] font-semibold',
          'clan': 'active text-teal-200 bg-teal-950/35 border-teal-500/45 shadow-[0_0_12px_rgba(20,184,166,0.12)] font-semibold',
          'arena': 'active text-indigo-200 bg-indigo-950/35 border-indigo-500/45 shadow-[0_0_12px_rgba(99,102,241,0.12)] font-semibold',
          'emblem': 'active text-amber-200 bg-amber-950/35 border-amber-500/45 shadow-[0_0_12px_rgba(245,158,11,0.12)] font-semibold',
          'battlepass': 'active text-rose-200 bg-rose-950/35 border-rose-500/45 shadow-[0_0_12px_rgba(244,63,94,0.12)] font-semibold',
          'levelup': 'active text-pink-200 bg-pink-950/35 border-pink-500/45 shadow-[0_0_12px_rgba(236,72,153,0.12)] font-semibold',
          'bots': 'active text-red-100 bg-red-950/45 border-red-500/55 shadow-[0_0_14px_rgba(239,68,68,0.22)] font-semibold'
        },
        dots: {
          'first-time': 'dot-indicator bg-emerald-400',
          'token': 'dot-indicator bg-sky-400',
          'marketcoins': 'dot-indicator bg-violet-400',
          'clan': 'dot-indicator bg-teal-400',
          'arena': 'dot-indicator bg-indigo-400',
          'emblem': 'dot-indicator bg-amber-400',
          'battlepass': 'dot-indicator bg-rose-400',
          'levelup': 'dot-indicator bg-pink-400',
          'bots': 'dot-indicator bg-red-500'
        },
        cards: {
          'token': { inCart: 'bg-sky-950/25 border-sky-500/45 shadow-sm', hover: 'hover:border-sky-500/30 hover:bg-[#15151b]' },
          'marketcoins': { inCart: 'bg-violet-950/25 border-violet-500/45 shadow-sm', hover: 'hover:border-violet-500/30 hover:bg-[#15151b]' },
          'clan': { inCart: 'bg-teal-950/25 border-teal-500/45 shadow-sm', hover: 'hover:border-teal-500/30 hover:bg-[#15151b]' },
          'arena': { inCart: 'bg-indigo-950/25 border-indigo-500/45 shadow-sm', hover: 'hover:border-indigo-500/30 hover:bg-[#15151b]' },
          'emblem': { inCart: 'bg-amber-950/25 border-amber-500/45 shadow-sm', hover: 'hover:border-amber-500/30 hover:bg-[#15151b]' },
          'battlepass': { inCart: 'bg-rose-950/25 border-rose-500/45 shadow-sm', hover: 'hover:border-rose-500/30 hover:bg-[#15151b]' },
          'levelup': { inCart: 'bg-pink-950/25 border-pink-500/45 shadow-sm', hover: 'hover:border-pink-500/30 hover:bg-[#15151b]' },
          'bots': { inCart: 'bg-red-950/30 border-red-500/50 shadow-sm', hover: 'hover:border-red-500/40 hover:bg-[#160d0f]' },
          'default': { inCart: 'bg-emerald-950/25 border-emerald-500/45 shadow-sm', hover: 'hover:border-emerald-500/30 hover:bg-[#15151b]' }
        },
        prices: {
          'token': 'text-sky-300 font-bold font-mono',
          'marketcoins': 'text-violet-300 font-bold font-mono',
          'clan': 'text-teal-300 font-bold font-mono',
          'arena': 'text-indigo-300 font-bold font-mono',
          'emblem': 'text-amber-300 font-bold font-mono',
          'battlepass': 'text-rose-300 font-bold font-mono',
          'levelup': 'text-pink-300 font-bold font-mono',
          'bots': 'text-red-400 font-bold font-mono',
          'default': 'text-emerald-400 font-bold font-mono'
        },
        buttons: {
          'token': 'bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-medium shadow-sm',
          'marketcoins': 'bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-medium shadow-sm',
          'clan': 'bg-teal-600 hover:bg-teal-500 active:scale-95 text-white font-medium shadow-sm',
          'arena': 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-medium shadow-sm',
          'emblem': 'bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-semibold shadow-sm',
          'battlepass': 'bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-medium shadow-sm',
          'levelup': 'bg-pink-600 hover:bg-pink-500 active:scale-95 text-white font-medium shadow-sm',
          'bots': 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-95 text-white font-bold shadow-md shadow-red-950/50',
          'default': 'bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-medium shadow-sm'
        },
        steppers: {
          'token': 'bg-sky-950/40 border-sky-500/30',
          'marketcoins': 'bg-violet-950/40 border-violet-500/30',
          'clan': 'bg-teal-950/40 border-teal-500/30',
          'arena': 'bg-indigo-950/40 border-indigo-500/30',
          'emblem': 'bg-amber-950/40 border-amber-500/30',
          'levelup': 'bg-pink-950/40 border-pink-500/30',
          'bots': 'bg-red-950/50 border-red-500/35',
          'default': 'bg-zinc-950 border-zinc-700'
        }
      },
      eyecare: {
        name: "EYE-CARE",
        nameBm: "LEMBUT",
        tagClass: "text-emerald-300",
        tabs: {
          'first-time': 'active text-emerald-200 bg-emerald-950/25 border-emerald-500/35 font-medium',
          'token': 'active text-slate-200 bg-slate-900 border-slate-600/40 font-medium',
          'marketcoins': 'active text-purple-200 bg-purple-950/25 border-purple-500/35 font-medium',
          'clan': 'active text-teal-200 bg-teal-950/25 border-teal-500/35 font-medium',
          'arena': 'active text-blue-200 bg-blue-950/25 border-blue-500/35 font-medium',
          'emblem': 'active text-amber-200 bg-amber-950/25 border-amber-500/35 font-medium',
          'battlepass': 'active text-rose-200 bg-rose-950/25 border-rose-500/35 font-medium',
          'levelup': 'active text-pink-200 bg-pink-950/25 border-pink-500/35 font-medium',
          'bots': 'active text-rose-200 bg-red-950/35 border-red-500/40 font-medium'
        },
        dots: {
          'first-time': 'dot-indicator bg-emerald-400/80',
          'token': 'dot-indicator bg-slate-400',
          'marketcoins': 'dot-indicator bg-purple-400/80',
          'clan': 'dot-indicator bg-teal-400/80',
          'arena': 'dot-indicator bg-blue-400/80',
          'emblem': 'dot-indicator bg-amber-400/80',
          'battlepass': 'dot-indicator bg-rose-400/80',
          'levelup': 'dot-indicator bg-pink-400/80',
          'bots': 'dot-indicator bg-red-400/80'
        },
        cards: {
          'token': { inCart: 'bg-slate-900/60 border-slate-600/50', hover: 'hover:border-slate-600/40' },
          'marketcoins': { inCart: 'bg-purple-950/20 border-purple-500/35', hover: 'hover:border-purple-500/30' },
          'clan': { inCart: 'bg-teal-950/20 border-teal-500/35', hover: 'hover:border-teal-500/30' },
          'arena': { inCart: 'bg-blue-950/20 border-blue-500/35', hover: 'hover:border-blue-500/30' },
          'emblem': { inCart: 'bg-amber-950/20 border-amber-500/35', hover: 'hover:border-amber-500/30' },
          'battlepass': { inCart: 'bg-rose-950/20 border-rose-500/35', hover: 'hover:border-rose-500/30' },
          'levelup': { inCart: 'bg-pink-950/20 border-pink-500/35', hover: 'hover:border-pink-500/30' },
          'bots': { inCart: 'bg-red-950/25 border-red-500/40', hover: 'hover:border-red-500/30 hover:bg-[#140b0d]' },
          'default': { inCart: 'bg-emerald-950/20 border-emerald-500/35', hover: 'hover:border-emerald-500/30' }
        },
        prices: {
          'token': 'text-slate-300 font-mono font-medium',
          'marketcoins': 'text-purple-300 font-mono font-medium',
          'clan': 'text-teal-300 font-mono font-medium',
          'arena': 'text-blue-300 font-mono font-medium',
          'emblem': 'text-amber-300 font-mono font-medium',
          'battlepass': 'text-rose-300 font-mono font-medium',
          'levelup': 'text-pink-300 font-mono font-medium',
          'bots': 'text-red-300 font-mono font-medium',
          'default': 'text-emerald-300 font-mono font-medium'
        },
        buttons: {
          'token': 'bg-slate-700 hover:bg-slate-600 text-slate-100',
          'marketcoins': 'bg-purple-700/80 hover:bg-purple-600 text-white',
          'clan': 'bg-teal-700/80 hover:bg-teal-600 text-white',
          'arena': 'bg-blue-700/80 hover:bg-blue-600 text-white',
          'emblem': 'bg-amber-600/80 hover:bg-amber-500 text-zinc-950 font-medium',
          'battlepass': 'bg-rose-700/80 hover:bg-rose-600 text-white font-medium',
          'levelup': 'bg-pink-700/80 hover:bg-pink-600 text-white',
          'bots': 'bg-red-700/80 hover:bg-red-600 text-white font-medium',
          'default': 'bg-emerald-700/80 hover:bg-emerald-600 text-white'
        },
        steppers: {
          'token': 'bg-slate-900 border-slate-700',
          'marketcoins': 'bg-zinc-950 border-violet-900/40',
          'clan': 'bg-zinc-950 border-teal-900/40',
          'arena': 'bg-zinc-950 border-indigo-900/40',
          'emblem': 'bg-zinc-950 border-amber-900/40',
          'levelup': 'bg-pink-950/40 border-pink-500/30',
          'bots': 'bg-red-950/40 border-red-500/30',
          'default': 'bg-zinc-950 border-zinc-700'
        }
      },
      vivid: {
        name: "VIVID",
        nameBm: "TERANG",
        tagClass: "text-amber-400",
        tabs: {
          'first-time': 'active text-emerald-300 bg-emerald-950/45 border-emerald-500/70 shadow-[0_0_14px_rgba(16,185,129,0.25)] font-semibold',
          'token': 'active text-blue-300 bg-blue-950/45 border-blue-500/70 shadow-[0_0_14px_rgba(59,130,246,0.25)] font-semibold',
          'marketcoins': 'active text-purple-300 bg-purple-950/45 border-purple-500/70 shadow-[0_0_14px_rgba(168,85,247,0.25)] font-semibold',
          'clan': 'active text-cyan-300 bg-cyan-950/45 border-cyan-500/70 shadow-[0_0_14px_rgba(6,182,212,0.25)] font-semibold',
          'arena': 'active text-indigo-300 bg-indigo-950/45 border-indigo-500/70 shadow-[0_0_14px_rgba(99,102,241,0.25)] font-semibold',
          'emblem': 'active text-amber-300 bg-amber-950/45 border-amber-500/70 shadow-[0_0_14px_rgba(245,158,11,0.25)] font-semibold',
          'battlepass': 'active text-rose-300 bg-rose-950/45 border-rose-500/70 shadow-[0_0_14px_rgba(244,63,94,0.25)] font-semibold',
          'levelup': 'active text-pink-300 bg-pink-950/45 border-pink-500/70 shadow-[0_0_14px_rgba(236,72,153,0.25)] font-semibold',
          'bots': 'active text-red-300 bg-red-950/50 border-red-500/80 shadow-[0_0_18px_rgba(239,68,68,0.4)] font-bold'
        },
        dots: {
          'first-time': 'dot-indicator bg-emerald-400',
          'token': 'dot-indicator bg-blue-400',
          'marketcoins': 'dot-indicator bg-purple-400',
          'clan': 'dot-indicator bg-cyan-400',
          'arena': 'dot-indicator bg-indigo-400',
          'emblem': 'dot-indicator bg-amber-400',
          'battlepass': 'dot-indicator bg-rose-400',
          'levelup': 'dot-indicator bg-pink-400',
          'bots': 'dot-indicator bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]'
        },
        cards: {
          'token': { inCart: 'bg-blue-950/25 border-blue-500/60 shadow-[0_0_16px_rgba(59,130,246,0.18)]', hover: 'hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(59,130,246,0.1)]' },
          'marketcoins': { inCart: 'bg-purple-950/30 border-purple-500/70 shadow-[0_0_18px_rgba(168,85,247,0.2)]', hover: 'hover:border-purple-500/40' },
          'clan': { inCart: 'bg-cyan-950/30 border-cyan-500/70 shadow-[0_0_18px_rgba(6,182,212,0.2)]', hover: 'hover:border-cyan-500/40' },
          'arena': { inCart: 'bg-indigo-950/30 border-indigo-500/70 shadow-[0_0_18px_rgba(99,102,241,0.2)]', hover: 'hover:border-indigo-500/40' },
          'emblem': { inCart: 'bg-amber-950/30 border-amber-500/70 shadow-[0_0_18px_rgba(245,158,11,0.2)]', hover: 'hover:border-amber-500/40' },
          'battlepass': { inCart: 'bg-rose-950/30 border-rose-500/70 shadow-[0_0_18px_rgba(244,63,94,0.2)]', hover: 'hover:border-rose-500/40' },
          'levelup': { inCart: 'bg-pink-950/30 border-pink-500/70 shadow-[0_0_18px_rgba(236,72,153,0.2)]', hover: 'hover:border-pink-500/40' },
          'bots': { inCart: 'bg-red-950/40 border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.3)]', hover: 'hover:border-red-500/60 hover:shadow-[0_0_14px_rgba(239,68,68,0.2)]' },
          'default': { inCart: 'bg-emerald-950/25 border-emerald-500/60 shadow-[0_0_16px_rgba(16,185,129,0.18)]', hover: 'hover:border-emerald-500/30' }
        },
        prices: {
          'token': 'text-blue-400 font-bold font-mono',
          'marketcoins': 'text-purple-400 font-bold font-mono',
          'clan': 'text-cyan-400 font-bold font-mono',
          'arena': 'text-indigo-400 font-bold font-mono',
          'emblem': 'text-amber-400 font-bold font-mono',
          'battlepass': 'text-rose-400 font-bold font-mono',
          'levelup': 'text-pink-400 font-bold font-mono drop-shadow-[0_0_6px_rgba(244,114,182,0.4)]',
          'bots': 'text-red-400 font-bold font-mono drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]',
          'default': 'text-emerald-400 font-bold font-mono'
        },
        buttons: {
          'token': 'bg-blue-600 hover:bg-blue-500 active:scale-95 text-white',
          'marketcoins': 'bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold',
          'clan': 'bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-zinc-950 font-semibold',
          'arena': 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold',
          'emblem': 'bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-semibold',
          'battlepass': 'bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold shadow-[0_0_12px_rgba(244,63,94,0.4)]',
          'levelup': 'bg-pink-600 hover:bg-pink-500 active:scale-95 text-white font-semibold shadow-[0_0_12px_rgba(236,72,153,0.4)]',
          'bots': 'bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:brightness-110 active:scale-95 text-white font-bold shadow-[0_0_14px_rgba(239,68,68,0.5)]',
          'default': 'bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white'
        },
        steppers: {
          'token': 'bg-blue-950/40 border-blue-500/40',
          'marketcoins': 'bg-purple-950/40 border-purple-500/40',
          'clan': 'bg-cyan-950/40 border-cyan-500/40',
          'arena': 'bg-indigo-950/40 border-indigo-500/40',
          'emblem': 'bg-amber-950/40 border-amber-500/40',
          'levelup': 'bg-pink-950/40 border-pink-500/40',
          'bots': 'bg-red-950/50 border-red-500/50',
          'default': 'bg-zinc-950 border-zinc-700'
        }
      }
    };
