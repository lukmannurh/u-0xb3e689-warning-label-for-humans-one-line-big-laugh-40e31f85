# LEDGER — Warning Label for Humans: One Line, Big Laugh

- Competition: u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
- Prize: $5 total (5 x $1), free entry
- Deadline: 27 Nov 2026 05:20 WIB (2026-11-26T22:20:00Z)
- Kit: ~/workspace/makefun/kits/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85-kit/
- Anchor: 0b6da7ea84d80ab427b0b2f4f6fcb203851bbcb2, drand round 34257382
- Freshness wallet: payout wallet (5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL)

## Entry text (157 chars, 157 bytes, ASCII only)

WARNING: This human is not waterproof, not dishwasher safe, and will describe last night's dream in full if you hold eye contact for more than three seconds.

## How it was chosen

8 candidates drafted and judged against the kit brief (label form first,
recognition second, turn in the last few words, one idea only). The winner
is the only single-sentence, single-idea line with a real label rhythm
("not waterproof, not dishwasher safe") and a turn that lands at the very
end ("for more than three seconds"). Runners-up: the 129-char version of
the same line (without the three-second threshold), "Do not operate while
sleepy, hungry, or convinced they are right..." (136 chars, two ideas),
and "This human will read the instructions only after breaking the
thing..." (125 chars, two ideas).

## Deliverable

- main.ts (written fresh, in 2 messages: first draft, then an added
  ASCII-only + no-trailing-whitespace guard) — validates the text
  (1-160 chars, single line, not whitespace-only, clean UTF-8, plain
  ASCII) and writes it to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
- Output file: entry.txt
- No network calls. No em-dash, no emoji, no AI-slop symbols.

## Local tests (Node v24.22.1)

- Run 1 and run 2 both exit 0, wrote entry.txt (157 chars).
- Byte-identical across runs: sha256
  3ddfff1c4dae975b0448cc78f2ad3c3e890c387fe8003113df044a10fb1c9ec9
  (same before and after the second main.ts edit).
- Verified: 157 chars, 157 bytes, ASCII-only, single line, not
  whitespace-only. Gate (1-160 chars UTF-8) passes.

## Status

- Built, tested. NOT committed, NOT pushed, NOT bundled, NOT checked,
  NOT submitted — parent does that.
- No claim code yet (none issued).

## Submission

- Submission: 01a210b2-763f-7192-a1a6-d721556f0534
- Commit: 339cb7b3a44a30d9773c4050e75db8d33095bab6
- Stage: checked
- Claim code: AF-W3JMA-3G3KJ-35Q0T-2287M
