'use client';

import { OTPInput, REGEXP_ONLY_DIGITS, type SlotProps } from 'input-otp';

interface PinInputProps {
  value: string;
  onChange: (value: string) => void;
  onComplete: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export function PinInput({
  value,
  onChange,
  onComplete,
  error = false,
  disabled = false,
  autoFocus = true,
}: PinInputProps) {
  return (
    <>
      <OTPInput
        value={value}
        onChange={onChange}
        onComplete={onComplete}
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        inputMode="numeric"
        autoFocus={autoFocus}
        disabled={disabled}
        autoComplete="one-time-code"
        containerClassName={`group flex items-center justify-center gap-2 has-[:disabled]:opacity-40 ${
          error ? 'pin-shake' : ''
        }`}
        render={({ slots }) => (
          <>
            {slots.map((slot, idx) => (
              <Slot key={idx} {...slot} error={error} />
            ))}
          </>
        )}
      />

      <style jsx global>{`
        @keyframes pin-shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .pin-shake {
          animation: pin-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
        @keyframes pin-caret {
          0%, 70%, 100% { opacity: 1; }
          20%, 50% { opacity: 0; }
        }
        .pin-caret {
          animation: pin-caret 1.1s ease-out infinite;
        }
      `}</style>
    </>
  );
}

function Slot(props: SlotProps & { error: boolean }) {
  const base =
    'relative w-11 h-14 md:w-12 md:h-16 flex items-center justify-center ' +
    'text-2xl md:text-3xl font-semibold text-white ' +
    'rounded-xl bg-[#0a0a0f] border transition-all duration-150';

  const state = props.error
    ? 'border-red-500/60 shadow-[0_0_0_1px_rgba(239,68,68,0.3)]'
    : props.isActive
      ? 'border-ufc-red/70 shadow-[0_0_0_2px_rgba(210,10,10,0.25)]'
      : props.char
        ? 'border-[#2a2a3a]'
        : 'border-[#1e1e2e]';

  return (
    <div className={`${base} ${state}`}>
      {props.char ? (
        <span>&bull;</span>
      ) : props.hasFakeCaret ? (
        <div className="pin-caret w-[2px] h-7 bg-white/80" />
      ) : null}
    </div>
  );
}
