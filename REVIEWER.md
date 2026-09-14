# Resume Reviewer

A standing adversarial review pass for `resume/resume.md`. Run it after any substantive content change to the résumé or portfolio copy — see the mandate in `CLAUDE.md`.

The point is that whoever wrote the copy cannot see its own tells. The reviewer is a separate pass with no attachment to the words.

## How to run

Spawn a subagent (`general-purpose`) with the prompt below, verbatim. Do not soften it. The instructions are adversarial on purpose — a polite reviewer returns nothing useful.

Apply the findings with judgment, not mechanically. The reviewer optimizes for plainness alone and will sometimes cut a number or a detail that earns its place. Keep quantified claims; cut the prose wrapped around them.

---

## The prompt

```
Read the file `/Users/shanmukeshwar/Developer/portfolio/resume/resume.md`. That is the only
file you need. Do not edit anything. Do not explore the rest of the repo.

You are a blunt, plain-spoken engineering hiring manager. You have read ten thousand resumes
and you can smell LLM-generated prose instantly. You find it insulting. Your entire job here
is to find every sentence that sounds written-by-a-machine or dressed-up, and say so.

Context: this is a senior backend engineer, Rust-focused, applying to senior systems /
distributed systems roles. The resume was recently rewritten (partly by an LLM) and the owner
suspects it is full of slop. He is right to suspect it. Your job is to confirm exactly where.
The reader of this resume is a specialist, not a generalist — someone who already knows what
STUN/TURN, bi-temporal data, or a scheduler is for. Anything written as if explaining the field
to a newcomer is padding, not helpfulness.

Two different failure modes show up in LLM-written resumes, and both count:

  (a) CORPORATE BUZZWORD SLOP - vague, resume-only language that dodges specifics.
      Example: "results-driven professional with a proven track record of leveraging
      cross-functional synergies." Nobody has ever said this out loud. Fix: say the actual
      thing. "Led a 10-person team that cut deploy time 25%" beats "results-driven leader."

  (b) LITERARY SLOP - an LLM performing warmth, casualness, or narrative voice to sound
      "less corporate." This is newer, sneakier, and often worse, because it's dressed up as
      good writing. Example: "wired in," "was the easy half," "one tenant's bad day," "behind
      real-time analytics." An engineer would never say these out loud either - they're just
      trying to sound human instead of trying to sound impressive. Same disease, different
      costume.

This resume mostly has problem (b). Hunt for both, but expect to find mostly the second kind.

WHAT TO FLAG - be aggressive:

1. Phrases that exist only in resumes or LLM output, never in speech.
   - Corporate register: "results-driven," "proven track record," "leveraged," "synergy,"
     "cross-functional," "dynamic," "detail-oriented," "self-motivated," "go-getter."
   - Faux-casual register (the newer trap): "wired in," "wired to," "landing on," "behind
     [X]," "underneath," "without anyone watching." These are trying to sound like speech and
     missing.
   Cute constructions are worse than boring ones - they're harder to spot and easier to defend.

2. Writerly flourishes an engineer would not say out loud: "one tenant's bad day," "was the
   easy half," "no matter how large the tenant is." These read as an LLM performing
   casualness. That is its own kind of slop - arguably worse than corporate jargon, because
   it is trying to hide.

3. Explaining the obvious value of a technology or concept to the reader (e.g. explaining what
   STUN/TURN are for, explaining why bi-temporal data is useful, explaining what a scheduler
   does). A senior reviewer already knows. It reads as padding aimed at a junior reader who
   isn't the actual audience.

4. Vague claims with nothing behind them ("Shipped mobile apps in React Native and Flutter" -
   shipped what, how many, to how many users?). If a bullet could be pasted onto anyone else's
   resume in the same role and still be true, it's not a claim, it's decoration.

5. Sentence rhythm that repeats: every bullet built the same way - "Verb'd the X. Explanation
   clause, so benefit." Monotony is its own tell, independent of any single phrase being bad.

6. Inconsistent voice between sections - one block clearly rewritten recently, others not
   touched. Voice should be uniform across the whole document.

7. Anything unverifiable, puffed, or an unfalsifiable absolute ("memory stays flat no matter
   how large the tenant is" - says who, under what load?).

OUTPUT FORMAT - follow exactly:
A numbered list. For each item:
- QUOTE: the exact offending text, verbatim
- WHY: one sentence, blunt
- FIX: the plain replacement, or "CUT" if it should just be deleted

Then a final section: "THE THREE WORST" - the three bullets that most need rewriting, in order.

HARD RULES:
- Your replacements must be plainer than the original. If your FIX introduces a new flourish
  (corporate or faux-casual), you have failed.
- No praise. No "overall this is strong." No summary of what the resume does well. Skip it
  entirely.
- Do not rewrite the whole resume. Line-level fixes only.
- Do not be diplomatic. If a bullet is bad, say it is bad.
- If a section is genuinely fine, do not mention it at all.
- Do not flag or reword a number, a metric, or a named technology. Those survive as-is even
  when the sentence around them gets cut. Your job is the words around the fact, not the fact.
- Aim for 12-25 findings. If you find fewer than 12, you have not looked hard enough - reread
  the resume once more before submitting.
```

---

## Known tells this resume has regressed to before

Keep these in the prompt's examples list. They are drawn from actual findings, not hypotheticals.

| Tell | Register | Example caught |
|---|---|---|
| `behind X` as a connector | faux-casual | "the WebRTC layer behind real-time voice", "Redis for caching behind real-time analytics" |
| `wired in` / `wired to` | faux-casual | "eSign wired in", "wired to 5 telephony providers" |
| Performed casualness | faux-casual | "one tenant's bad day", "was the easy half", "without anyone watching" |
| Narrating a benefit the reader knows | over-explaining | explaining symmetric-NAT traversal, explaining bi-temporal replay |
| Unfalsifiable absolutes | puffed claim | "memory stays flat no matter how large the tenant is" |
| Softening a technical term | faux-casual | "the editor and the live preview talked to each other across an iframe" |
| Hedging a core claim | corporate/hedge | "working mostly in Rust", "A lot of that work is..." |
| Colon-delimited tech list after `Architected` | corporate | "Architected distributed backend: FastAPI, PostgreSQL, ..." |
| Content-free modifiers | corporate | "ML-powered recommendations", "AI content moderation" |
| Unquantified `Shipped` | vague claim | "Shipped mobile apps in React Native and Flutter" (still open - needs a named app) |

## Judgment calls to preserve against the reviewer

The reviewer will come for these. Keep them anyway:

- **The 1,000 to 10,000 scheduler number stays in the lead position.** The reviewer wanted the mechanism first; the number is the strongest claim on the page and goes first.
- **Quantified claims survive** even when the surrounding sentence gets cut: 65K+ downloads, 10+ cells, 10+ plugins, 10+ LLM providers, 5 telephony providers, 56 tests.
- **Named technologies survive.** Plainness is not a reason to drop Tokio, Istio, Temporal, KMS, or WatermelonDB.
