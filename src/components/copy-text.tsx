"use client";

import { CheckCircle } from "@solar-icons/react/ssr";
import type React from "react";
import {
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type AsElement = keyof React.JSX.IntrinsicElements;

export type CopyToClipboardProps = HTMLAttributes<HTMLElement> & {
  /** The text content to be copied when the component is clicked.
   *  This is independent of the displayed children.
   */
  copyable: string;

  /** The dynamic content that is shown to the user.
   *  This can be any JSX and does not affect what gets copied.
   */
  children: ReactNode;

  /** Optional callback fired after copy attempt.
   *  Receives the copied text (or empty string if failed) and success boolean.
   */
  onCopy?: (text: string, success: boolean) => void;

  /** Duration in milliseconds that the "Copied!" feedback is shown (default: 2000) */
  successDuration?: number;

  /** HTML element tag name used as the wrapper (default: 'button') */
  as?: AsElement;

  /** Disable copy functionality */
  disabled?: boolean;

  /** Additional CSS class names */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;
};

/**
 * CopyToClipboard Component
 *
 * Copies the `copyable` prop value to the clipboard when clicked.
 * The `children` prop is rendered as the visible content and can be dynamic
 * (e.g., state, props, complex JSX) without affecting the copied text.
 *
 * @example
 * ```tsx
 * const [code, setCode] = useState('abc123');
 *
 * return (
 *   <CopyToClipboard copyable={code} onCopy={(text) => console.log(`Copied: ${text}`)}>
 *     <div>Current code: {code}</div>
 *   </CopyToClipboard>
 * );
 * ```
 */
const Copyable = ({
  copyable,
  children,
  onCopy,
  successDuration = 2000,
  as = "button",
  disabled = false,
  className = "",
  style,
  ...restProps
}: CopyToClipboardProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = useCallback(async () => {
    if (disabled) return;

    const textToCopy = copyable ?? "";
    if (!textToCopy.trim()) {
      console.warn("CopyToClipboard: copyable prop is empty");
      onCopy?.("", false);
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, successDuration);
      onCopy?.(textToCopy, true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      onCopy?.(textToCopy, false);

      // Fallback for older browsers
      try {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (success) {
          setCopied(true);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = window.setTimeout(() => {
            setCopied(false);
            timeoutRef.current = null;
          }, successDuration);
          onCopy?.(textToCopy, true);
        } else {
          throw new Error("execCommand copy failed");
        }
      } catch (fallbackErr) {
        console.error("Fallback copy also failed: ", fallbackErr);
        setCopied(false);
      }
    }
  }, [copyable, disabled, onCopy, successDuration]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (disabled) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleCopy();
      }
    },
    [disabled, handleCopy],
  );

  const Wrapper = as;

  const combinedClassName = `copy-to-clipboard ${className}`.trim();
  const baseStyles: React.CSSProperties = {
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "0.25rem",
    background: "none",
    border: "none",
    padding: 0,
    margin: 0,
    ...style,
  };

  return (
    <Wrapper
      // @ts-expect-error: complex union type
      ref={elementRef as React.Ref<any>}
      // @ts-expect-error: idfk
      onClick={handleCopy}
      // @ts-expect:error: idfk
      onKeyDown={handleKeyDown}
      className={combinedClassName}
      style={baseStyles}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-live="polite"
      {...restProps}
    >
      {children}
      {copied && (
        <span
          style={{
            fontSize: "0.75em",
            marginLeft: "0.5rem",
            color: "green",
            whiteSpace: "nowrap",
            position: "absolute",
            zIndex: 1,
          }}
          aria-hidden="true"
          className="backdrop-blur-xl transition-opacity flex items-center justify-center"
        >
          <CheckCircle size={14} weight="Bold" />
        </span>
      )}
    </Wrapper>
  );
};

export default Copyable;
