import type { QuizQuestion } from "@/types/quiz";

/**
 * Cryptography and Network Security -- Unit 1.
 * Source: N.M.A.M. Institute of Technology, Dept. of CSE (Dr. Raghunandan K R),
 * covering two decks: security foundations & classical ciphers, and public-key
 * cryptography / RSA. The source material is lecture slides, not a pre-made
 * question bank, so unlike some other subjects here, these 50 questions and
 * their explanations are original compositions written to test the concepts
 * and worked examples in those slides -- not verbatim transcriptions. Every
 * numeric answer (Caesar/Additive/Multiplicative/Affine ciphers, Playfair,
 * Hill cipher, Vigenere, RSA) was independently checked against the source's
 * own worked examples with actual code before being used here. One arithmetic
 * slip found in the source's own Caesar-cipher example was not reused.
 */
export const questions: QuizQuestion[] = [
  {
    id: "cns-01",
    text: "In the standard model for network security, the two communicating parties both rely on a trusted third party. What role does this third party typically play?",
    topic: "Security Foundations",
    options: [
      { id: "a", text: "Encrypting every message before it enters the information channel" },
      { id: "b", text: "Acting as an arbiter or distributing the secret information needed for the security transformation" },
      { id: "c", text: "Monitoring the channel to detect the opponent" },
      { id: "d", text: "Physically carrying messages between sender and receiver" },
    ],
    correctOptionId: "b",
    explanation:
      "The trusted third party sits outside the sender-receiver link and is responsible for things like distributing or arbitrating the secret information (e.g., keys) that both sides need to apply their security-related transformation. It doesn't do the encryption itself and isn't the channel's opponent.",
  },
  {
    id: "cns-02",
    text: "In that same model, where does the 'opponent' sit?",
    topic: "Security Foundations",
    options: [
      { id: "a", text: "Between the sender and the security-related transformation, before the message is secured" },
      { id: "b", text: "Inside the trusted third party" },
      { id: "c", text: "On the information channel, attempting to compromise the secure message in transit" },
      { id: "d", text: "Only at the recipient's side, after decryption" },
    ],
    correctOptionId: "c",
    explanation:
      "The opponent taps the information channel itself, trying to compromise the secure message as it travels between sender and recipient -- which is exactly why a security-related transformation is applied before the message ever reaches that channel.",
  },
  {
    id: "cns-03",
    text: "The taxonomy of security attacks groups snooping and traffic analysis as threats to one specific goal, separately from modification, masquerading, replaying, and repudiation. Which goal do snooping and traffic analysis threaten?",
    topic: "Security Foundations",
    options: [
      { id: "a", text: "Availability" },
      { id: "b", text: "Confidentiality" },
      { id: "c", text: "Integrity" },
      { id: "d", text: "Non-repudiation" },
    ],
    correctOptionId: "b",
    explanation:
      "Snooping (unauthorized viewing) and traffic analysis (inferring information from patterns of communication, even without reading content) both threaten confidentiality. Modification, masquerading, replaying, and repudiation threaten integrity instead, and denial of service threatens availability.",
  },
  {
    id: "cns-04",
    text: "Masquerading and replaying are both classified as threats to which security goal?",
    topic: "Security Foundations",
    options: [
      { id: "a", text: "Availability" },
      { id: "b", text: "Confidentiality" },
      { id: "c", text: "Integrity" },
      { id: "d", text: "Physical security" },
    ],
    correctOptionId: "c",
    explanation:
      "Masquerading (pretending to be someone else) and replaying (resending captured data) both let an attacker alter what the receiver ends up believing or accepting -- that's a threat to integrity, alongside modification and repudiation.",
  },
  {
    id: "cns-05",
    text: "Which pair correctly matches each term with its definition, as used in this unit?",
    topic: "Security Foundations",
    options: [
      { id: "a", text: "Cipher text is the original message, plain text is the coded output" },
      { id: "b", text: "Encipher means recovering plain text from cipher text" },
      { id: "c", text: "Cryptanalysis is the study of methods for deciphering cipher text without knowing the key" },
      { id: "d", text: "Cryptology refers only to the design of secure encryption algorithms" },
    ],
    correctOptionId: "c",
    explanation:
      "Cryptanalysis (also called code breaking) is the study of principles/methods for deciphering ciphertext without access to the key. Plain text is the original message and cipher text is the coded output (not the reverse), encipher means converting plain text to cipher text (not the reverse), and cryptology is the umbrella field covering both cryptography and cryptanalysis.",
  },
  {
    id: "cns-06",
    text: "Cryptographic systems are classified along three independent dimensions. Which of the following is NOT one of them?",
    topic: "Cryptography Classifications",
    options: [
      { id: "a", text: "The type of operation used to transform plaintext (substitution, transposition, or product)" },
      { id: "b", text: "The number of keys used (symmetric vs. asymmetric)" },
      { id: "c", text: "The way plaintext is processed (block vs. stream)" },
      { id: "d", text: "The nationality of the algorithm's designer" },
    ],
    correctOptionId: "d",
    explanation:
      "The three classifying dimensions given are: type of operation (substitution/transposition/product), number of keys used (symmetric/asymmetric), and how plaintext is processed (block/stream). The designer's nationality plays no role in this classification.",
  },
  {
    id: "cns-07",
    text: "What is the defining difference between a substitution cipher and a transposition cipher?",
    topic: "Cryptography Classifications",
    options: [
      { id: "a", text: "Substitution rearranges the order of plaintext elements; transposition replaces them with other elements" },
      { id: "b", text: "Substitution replaces each plaintext element with another element; transposition rearranges the order of elements without changing them" },
      { id: "c", text: "Substitution only works on numbers, transposition only works on letters" },
      { id: "d", text: "There is no real difference -- they are two names for the same technique" },
    ],
    correctOptionId: "b",
    explanation:
      "In substitution, each element of the plaintext is mapped to a different element (a letter, bit-pattern, etc.). In transposition, the same elements are kept but their order is rearranged. This is also why transposition-only ciphers preserve the original letter-frequency distribution while substitution ciphers don't.",
  },
  {
    id: "cns-08",
    text: "A block cipher and a stream cipher differ mainly in:",
    topic: "Cryptography Classifications",
    options: [
      { id: "a", text: "Block ciphers process one block of plaintext at a time to produce a block of output; stream ciphers process elements continuously, one at a time" },
      { id: "b", text: "Block ciphers can only be symmetric; stream ciphers can only be asymmetric" },
      { id: "c", text: "Stream ciphers require two keys; block ciphers require only one" },
      { id: "d", text: "Block ciphers are a type of transposition cipher; stream ciphers are a type of substitution cipher" },
    ],
    correctOptionId: "a",
    explanation:
      "A block cipher takes a fixed-size block of plaintext and produces a block of ciphertext for it; a stream cipher processes the input continuously, producing output one element at a time as it goes. Either type can, in principle, be symmetric or asymmetric.",
  },
  {
    id: "cns-09",
    text: "What are the two requirements for the secure use of symmetric (conventional) encryption?",
    topic: "Cryptography Classifications",
    options: [
      { id: "a", text: "A strong encryption algorithm, and a secret key known only to sender and receiver" },
      { id: "b", text: "Two different keys, and a trusted certificate authority" },
      { id: "c", text: "A public key infrastructure, and a hash function" },
      { id: "d", text: "A strong algorithm, and the algorithm itself must remain secret" },
    ],
    correctOptionId: "a",
    explanation:
      "Symmetric encryption needs a strong algorithm and a secret key shared only between sender and receiver. Notably, the algorithm itself does not need to be secret (in fact, standard algorithms are published) -- only the key does.",
  },
  {
    id: "cns-10",
    text: "What are the two general approaches to attacking a conventional encryption scheme?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "Cryptanalysis and brute-force attack" },
      { id: "b", text: "Phishing and social engineering" },
      { id: "c", text: "Substitution and transposition" },
      { id: "d", text: "Symmetric and asymmetric attack" },
    ],
    correctOptionId: "a",
    explanation:
      "Cryptanalysis exploits the nature of the algorithm (and possibly some knowledge of plaintext characteristics) to deduce the plaintext or key, while a brute-force attack simply tries every possible key until an intelligible plaintext appears.",
  },
  {
    id: "cns-11",
    text: "In a Ciphertext-Only Attack (COA), what does the attacker have access to?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "Only the ciphertext, with no known plaintext and no key" },
      { id: "b", text: "Both the plaintext and its corresponding ciphertext" },
      { id: "c", text: "The ability to encrypt any chosen plaintext of their choice" },
      { id: "d", text: "The ability to have arbitrary ciphertexts decrypted for them" },
    ],
    correctOptionId: "a",
    explanation:
      "COA is the most restrictive setting for the attacker: they only ever see ciphertext, with neither the plaintext nor the key available, and must still try to recover one or the other.",
  },
  {
    id: "cns-12",
    text: "A Chosen-Plaintext Attack (CPA) is defined by the attacker being able to:",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "See ciphertext only, without any plaintext" },
      { id: "b", text: "Encrypt plaintexts of their own choosing and observe the resulting ciphertexts" },
      { id: "c", text: "Choose ciphertexts and have them decrypted, learning the plaintext" },
      { id: "d", text: "Only observe encrypted traffic passively on the network" },
    ],
    correctOptionId: "b",
    explanation:
      "In a CPA, the attacker can feed chosen plaintexts into the encryption process and observe what ciphertext comes out -- giving insight into the algorithm's behavior that can expose weaknesses. This is distinct from a Chosen-Ciphertext Attack, where the attacker instead chooses ciphertexts to have decrypted.",
  },
  {
    id: "cns-13",
    text: "Which type of attack exploits information leaked by the physical implementation of a cryptosystem -- such as timing, power consumption, or electromagnetic emissions -- rather than a weakness in the algorithm itself?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "Differential cryptanalysis" },
      { id: "b", text: "Known-plaintext attack" },
      { id: "c", text: "Side-channel attack" },
      { id: "d", text: "Chosen-ciphertext attack" },
    ],
    correctOptionId: "c",
    explanation:
      "Side-channel attacks target the physical implementation (timing, power draw, EM radiation, even sound) rather than the mathematical structure of the algorithm -- the algorithm can be perfectly sound and still leak information this way.",
  },
  {
    id: "cns-14",
    text: "Differential cryptanalysis, as described in this unit, works by:",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "Trying every possible key until one produces intelligible plaintext" },
      { id: "b", text: "Observing how small changes to the input (plaintext) affect the output (ciphertext) of a block cipher, to expose weaknesses" },
      { id: "c", text: "Measuring the physical power consumption of the encryption device" },
      { id: "d", text: "Guessing the key length from repeated substrings in the ciphertext" },
    ],
    correctOptionId: "b",
    explanation:
      "Differential cryptanalysis studies how small, controlled changes in the plaintext propagate to changes in the ciphertext, looking for non-random patterns in a block cipher's behavior that reveal information about the key.",
  },
  {
    id: "cns-15",
    text: "If an attacker manages a 'total break' of a cryptosystem, what has been achieved?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "The attacker can distinguish ciphertexts of two messages slightly better than random guessing" },
      { id: "b", text: "The attacker has discovered the decryption key and can now decrypt all ciphertexts" },
      { id: "c", text: "The attacker can decrypt some ciphertexts some of the time, without knowing the key" },
      { id: "d", text: "The attacker has merely delayed the recipient's access to the message" },
    ],
    correctOptionId: "b",
    explanation:
      "A total break means Eve has recovered the actual decryption key, which completely compromises the system since she can now decrypt everything. A 'partial break' is decrypting some ciphertexts without the full key, and a 'distinguishing break' is only being able to tell two encryptions apart better than chance.",
  },
  {
    id: "cns-16",
    text: "A cryptosystem's security is described as 'unconditional' when:",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "It resists a brute-force attack for at least a few years" },
      { id: "b", text: "Breaking it can be mathematically reduced to a known hard problem like factoring" },
      { id: "c", text: "It remains secure even against an attacker with unlimited computational resources" },
      { id: "d", text: "Its algorithm has never been published or peer-reviewed" },
    ],
    correctOptionId: "c",
    explanation:
      "Unconditional security holds regardless of how much computational power the attacker has -- the One-Time Pad, used correctly, is the classic example. This is stronger than computational security (secure only because breaking it needs infeasibly many operations) and provable security (security tied to the hardness of a specific mathematical problem).",
  },
  {
    id: "cns-17",
    text: "RSA's security is generally described as 'computational' rather than 'unconditional'. What does that mean?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "RSA can never be broken under any circumstances" },
      { id: "b", text: "RSA is secure only as long as breaking it requires more operations than an attacker can feasibly perform -- it isn't immune to unlimited resources" },
      { id: "c", text: "RSA's security depends on keeping the algorithm itself secret" },
      { id: "d", text: "RSA becomes unconditionally secure once the key exceeds 56 bits" },
    ],
    correctOptionId: "b",
    explanation:
      "Computational security means the scheme is only as safe as the attacker's practical resource limits: given large enough numbers, factoring the modulus is infeasible today, but the system isn't immune the way a One-Time Pad is to an attacker with truly unlimited computation.",
  },
  {
    id: "cns-18",
    text: "According to the classic brute-force time table, roughly how long would a super-computer-class attacker (10^6 decryptions/microsecond) take to exhaustively search a 56-bit key space?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "About 2.15 milliseconds" },
      { id: "b", text: "About 35.8 minutes" },
      { id: "c", text: "About 10.01 hours" },
      { id: "d", text: "Longer than the age of the universe" },
    ],
    correctOptionId: "c",
    explanation:
      "At 10^6 decryptions per microsecond, a 56-bit key space (2^56 keys) takes roughly 10.01 hours to exhaustively search on average. The other figures in that table correspond to different key sizes or attacker speeds: 2.15 ms is 32-bit keys at the faster rate, and 'longer than the age of the universe' describes 128-bit and larger keys even at that same high speed.",
  },
  {
    id: "cns-19",
    text: "In English text, which letter appears with the highest frequency -- the fact that makes monoalphabetic substitution ciphers vulnerable to frequency analysis?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "E" },
      { id: "b", text: "T" },
      { id: "c", text: "A" },
      { id: "d", text: "Q" },
    ],
    correctOptionId: "a",
    explanation:
      "E is by far the most common letter in English, followed by T, R, N, I, O, A, S, while letters like Z, J, K, Q, X are rare. Because a monoalphabetic substitution cipher maps each plaintext letter to one fixed ciphertext letter, this frequency pattern carries straight through to the ciphertext -- which is exactly what a frequency-analysis attack exploits.",
  },
  {
    id: "cns-20",
    text: "Why does frequency analysis work against monoalphabetic substitution ciphers but not against a properly used One-Time Pad?",
    topic: "Cryptanalysis Theory",
    options: [
      { id: "a", text: "Monoalphabetic ciphers use a fixed mapping, so plaintext letter frequencies carry through to the ciphertext; a true One-Time Pad key is random and used only once, so its ciphertext bears no statistical relationship to the plaintext" },
      { id: "b", text: "Frequency analysis only works on numbers, and the One-Time Pad only encrypts letters" },
      { id: "c", text: "Monoalphabetic ciphers use a longer key than the One-Time Pad" },
      { id: "d", text: "The One-Time Pad is actually just as vulnerable to frequency analysis" },
    ],
    correctOptionId: "a",
    explanation:
      "Because a monoalphabetic cipher always maps a given plaintext letter to the same ciphertext letter, the ciphertext inherits the plaintext language's letter-frequency pattern. A One-Time Pad's key is truly random and never reused, so for any ciphertext there's an equally likely key mapping to any plaintext -- there's no statistical fingerprint left to analyze.",
  },
  {
    id: "cns-21",
    text: "The Caesar cipher can be written mathematically as C = E(p) = (p + k) mod 26. What role does k play?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "The position of the letter in the plaintext" },
      { id: "b", text: "The shift amount (the key)" },
      { id: "c", text: "The length of the message" },
      { id: "d", text: "The ciphertext letter itself" },
    ],
    correctOptionId: "b",
    explanation:
      "k is the key -- the fixed number of positions each plaintext letter is shifted by by. The classic Caesar cipher itself uses k = 3, but the formula works for any shift amount.",
  },
  {
    id: "cns-22",
    text: "Using a Caesar cipher with a shift key of 5 (a=0, b=1, ..., z=25), what does 'HELLO' encrypt to?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "MJQQT" },
      { id: "b", text: "LDKKS" },
      { id: "c", text: "MJQQS" },
      { id: "d", text: "NKRRU" },
    ],
    correctOptionId: "a",
    explanation:
      "Shifting each letter by 5: H(7)->M(12), E(4)->J(9), L(11)->Q(16), L(11)->Q(16), O(14)->T(19). That gives MJQQT.",
  },
  {
    id: "cns-23",
    text: "Why does a monoalphabetic substitution cipher (where any letter can map to any other letter, not just a fixed shift) resist a simple brute-force key search?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "It doesn't -- it's exactly as easy to brute-force as the Caesar cipher" },
      { id: "b", text: "There are 26! (roughly 4x10^26) possible letter-to-letter mappings, far too many to try exhaustively" },
      { id: "c", text: "It uses two keys instead of one" },
      { id: "d", text: "The key changes automatically every few letters" },
    ],
    correctOptionId: "b",
    explanation:
      "A monoalphabetic cipher's key is any permutation of the 26-letter alphabet, and there are 26! such permutations -- an astronomically larger space than the 26 possible Caesar shifts. That's why attackers turn to statistical/frequency analysis instead of brute force.",
  },
  {
    id: "cns-24",
    text: "In the Additive (Shift) Cipher, encryption is defined as C = (P + K) mod 26. Given plaintext 'CIPHER' and key K = 9, what is the ciphertext?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "LRYQNA" },
      { id: "b", text: "LQXPMZ" },
      { id: "c", text: "KQXOMY" },
      { id: "d", text: "MSZRNB" },
    ],
    correctOptionId: "a",
    explanation:
      "Converting each letter (C=2,I=8,P=15,H=7,E=4,R=17) and adding 9 mod 26: C->L(11), I->R(17), P->Y(24), H->Q(16), E->N(13), R->A(0). That spells LRYQNA.",
  },
  {
    id: "cns-25",
    text: "The Multiplicative Cipher encrypts as C = (P x K) mod 26. Why must the key K be chosen such that gcd(K, 26) = 1?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "It's just a stylistic convention, not a real requirement" },
      { id: "b", text: "So that K has a multiplicative inverse mod 26, which is required to decrypt (recover P from C)" },
      { id: "c", text: "So that the ciphertext is always longer than the plaintext" },
      { id: "d", text: "So that the key can also be used as an additive-cipher key" },
    ],
    correctOptionId: "b",
    explanation:
      "Decryption needs P = (C x K^-1) mod 26, which only exists if K has a multiplicative inverse modulo 26 -- and that's only guaranteed when gcd(K, 26) = 1. If K shared a common factor with 26, multiple plaintext letters could map to the same ciphertext letter, making decryption ambiguous or impossible.",
  },
  {
    id: "cns-26",
    text: "Using the Multiplicative Cipher with key K = 3 on plaintext 'VMH' (V=21, M=12, H=7), the worked example gives ciphertext 'LKV'. What key is used to decrypt 'LKV' back to 'VMH'?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "3, the same key used for encryption" },
      { id: "b", text: "9, the multiplicative inverse of 3 mod 26" },
      { id: "c", text: "23, the additive inverse of 3 mod 26" },
      { id: "d", text: "26, the modulus itself" },
    ],
    correctOptionId: "b",
    explanation:
      "Decryption uses K^-1 mod 26, not K itself. Since 3 x 9 = 27 = 1 mod 26, the inverse of 3 is 9: applying P = (C x 9) mod 26 to L(11), K(10), V(21) gives back 21, 12, 7 -- V, M, H.",
  },
  {
    id: "cns-27",
    text: "The Affine Cipher combines a multiplicative and an additive key: C = (P x K1 + K2) mod 26. What is required of K1, and what does K2 represent?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "K1 must be coprime with 26 (so it's invertible); K2 is the additive shift applied after multiplying" },
      { id: "b", text: "K1 must equal K2; both represent the same shift" },
      { id: "c", text: "K1 must be a letter; K2 must be a number" },
      { id: "d", text: "K1 has no restriction; K2 must be coprime with 26" },
    ],
    correctOptionId: "a",
    explanation:
      "K1 plays the role of a multiplicative-cipher key, so it must be coprime with 26 for the cipher to be invertible; K2 is then added on top, acting like an additive-cipher shift. Decryption reverses both steps: P = K1^-1 x (C - K2) mod 26.",
  },
  {
    id: "cns-28",
    text: "Using the Affine Cipher with K1 = 5 and K2 = 8 (both valid, since gcd(5,26)=1), what does plaintext 'CAB' encrypt to?",
    topic: "Classical Substitution Ciphers",
    options: [
      { id: "a", text: "SIN" },
      { id: "b", text: "HGX" },
      { id: "c", text: "RIM" },
      { id: "d", text: "TJO" },
    ],
    correctOptionId: "a",
    explanation:
      "C=2, A=0, B=1. Applying (P x 5 + 8) mod 26: C -> (10+8)=18 -> S; A -> (0+8)=8 -> I; B -> (5+8)=13 -> N. So CAB encrypts to SIN. (Decrypting SIN with K1^-1 = 21 correctly recovers CAB, confirming the round trip.)",
  },
  {
    id: "cns-29",
    text: "The Playfair cipher is notable for being the first practical cipher of what kind?",
    topic: "Playfair Cipher",
    options: [
      { id: "a", text: "A digraph (pair-of-letters) substitution cipher" },
      { id: "b", text: "A public-key cipher" },
      { id: "c", text: "A stream cipher" },
      { id: "d", text: "A cipher that uses no key at all" },
    ],
    correctOptionId: "a",
    explanation:
      "Playfair encrypts pairs of letters (digraphs) together rather than one letter at a time, making it the first practical digraph substitution cipher. It was invented by Charles Wheatstone in 1854 but is named after Lord Playfair, who promoted its use.",
  },
  {
    id: "cns-30",
    text: "When building a Playfair 5x5 key square from a keyword, what happens to the letter J?",
    topic: "Playfair Cipher",
    options: [
      { id: "a", text: "J gets its own dedicated cell, making the grid 5x6" },
      { id: "b", text: "J is omitted; if the plaintext contains J, it's treated as I" },
      { id: "c", text: "J always occupies the center cell of the grid" },
      { id: "d", text: "J replaces whichever letter appears last in the keyword" },
    ],
    correctOptionId: "b",
    explanation:
      "Since a 5x5 grid can only hold 25 distinct letters, one letter has to be dropped -- conventionally J, which is merged with I. Any J in the plaintext is treated as an I before encryption.",
  },
  {
    id: "cns-31",
    text: "In Playfair encryption, if the two letters of a digraph fall in the same row of the key square, how are they encrypted?",
    topic: "Playfair Cipher",
    options: [
      { id: "a", text: "Each is replaced by the letter directly below it, wrapping to the top if needed" },
      { id: "b", text: "Each is replaced by the letter to its right, wrapping to the start of the row if needed" },
      { id: "c", text: "The two letters are simply swapped with each other" },
      { id: "d", text: "Each is replaced by the letter diagonally opposite it in the grid" },
    ],
    correctOptionId: "b",
    explanation:
      "The same-row rule replaces each letter with the one immediately to its right, wrapping around to the beginning of the row if the letter is at the row's end. (The same-column rule works the same way but shifts downward instead.)",
  },
  {
    id: "cns-32",
    text: "Using the Playfair key square built from the keyword MONARCHY, what does the digraph pair 'IN' encrypt to?",
    topic: "Playfair Cipher",
    options: [
      { id: "a", text: "GA" },
      { id: "b", text: "MO" },
      { id: "c", text: "EF" },
      { id: "d", text: "LP" },
    ],
    correctOptionId: "a",
    explanation:
      "With the MONARCHY key square, I and N don't share a row or column, so each is replaced by the letter in its own row but the other's column: I is in row {E,F,G,I/J,K}, N's column is column 3 (N,Y,G,Q,W) -> G; N is in row {M,O,N,A,R}, I's column is column 4 (A,B,I/J,S,X) -> A. So IN -> GA, matching the worked example where 'instrumentsz' encrypts to 'gatlmzclrqtx'.",
  },
  {
    id: "cns-33",
    text: "The Hill cipher, developed by Lester Hill in 1929, encrypts a block of n letters by:",
    topic: "Hill Cipher",
    options: [
      { id: "a", text: "Shifting each letter by a different fixed amount" },
      { id: "b", text: "Treating the block as an n-component vector and multiplying it by an invertible n x n key matrix, modulo 26" },
      { id: "c", text: "Reversing the order of the letters in the block" },
      { id: "d", text: "Looking each letter up in a 5x5 grid" },
    ],
    correctOptionId: "b",
    explanation:
      "Hill cipher treats each block of n letters as a vector and multiplies it by an n x n key matrix (mod 26) to get the ciphertext vector. Decryption multiplies by the matrix's inverse (mod 26) -- which is exactly why the key matrix must be invertible modulo 26.",
  },
  {
    id: "cns-34",
    text: "Using the 3x3 Hill cipher key matrix built from 'GYBNQKURP' (rows [6,24,1], [13,16,10], [20,17,15]), the plaintext 'ACT' (A=0, C=2, T=19) encrypts to which ciphertext?",
    topic: "Hill Cipher",
    options: [
      { id: "a", text: "POH" },
      { id: "b", text: "OPH" },
      { id: "c", text: "HOP" },
      { id: "d", text: "QOI" },
    ],
    correctOptionId: "a",
    explanation:
      "Multiplying the key matrix by the vector [0, 2, 19] mod 26 gives [15, 14, 7], which is P, O, H -- matching the worked example in the slides exactly.",
  },
  {
    id: "cns-35",
    text: "To decrypt a Hill cipher ciphertext, what must be computed first?",
    topic: "Hill Cipher",
    options: [
      { id: "a", text: "The determinant of the plaintext" },
      { id: "b", text: "The inverse of the key matrix, modulo 26" },
      { id: "c", text: "The frequency distribution of the ciphertext letters" },
      { id: "d", text: "Nothing extra -- the same matrix multiplication as encryption is used directly" },
    ],
    correctOptionId: "b",
    explanation:
      "Decryption multiplies the ciphertext vector by the inverse of the key matrix (mod 26) to recover the plaintext vector. This is only possible because the key matrix was chosen to be invertible modulo 26 in the first place.",
  },
  {
    id: "cns-36",
    text: "The Vigenere cipher improves on simple substitution by:",
    topic: "Polyalphabetic Ciphers & OTP",
    options: [
      { id: "a", text: "Using a sequence of different monoalphabetic (Caesar-like) ciphers in tandem, selected by a repeating keyword" },
      { id: "b", text: "Encrypting two letters at a time in a 5x5 grid" },
      { id: "c", text: "Using a matrix multiplication instead of letter shifts" },
      { id: "d", text: "Never using a key at all" },
    ],
    correctOptionId: "a",
    explanation:
      "Vigenere applies a different Caesar-style shift to each letter, cycling through a sequence of shifts determined by a repeating keyword. This flattens the letter-frequency distribution, since a given plaintext letter no longer always maps to the same ciphertext letter.",
  },
  {
    id: "cns-37",
    text: "Encrypting the plaintext 'WEAREDISCOVERED' with the Vigenere cipher using the repeating key 'DECEPTIVE' begins with which ciphertext letters?",
    topic: "Polyalphabetic Ciphers & OTP",
    options: [
      { id: "a", text: "ZICVTWQNG" },
      { id: "b", text: "XHBUSVPMF" },
      { id: "c", text: "ZIDWUXRPH" },
      { id: "d", text: "YHBTSVPLF" },
    ],
    correctOptionId: "a",
    explanation:
      "Lining up key letters DECEPTIVE under WEAREDISC and adding each pair mod 26 (e.g. W+D->Z, E+E->I, A+C->C, R+E->V, E+P->T, D+T->W, I+I->Q, S+V->N, C+E->G) gives ZICVTWQNG -- matching the classic worked example, which continues ...GRZGVTWAVZHCQYGLMGJ for the rest of the message.",
  },
  {
    id: "cns-38",
    text: "What is the core weakness the Kasiski method exploits to break the Vigenere cipher?",
    topic: "Polyalphabetic Ciphers & OTP",
    options: [
      { id: "a", text: "Vigenere never actually changes the plaintext letters" },
      { id: "b", text: "A repeating keyword causes repeated plaintext fragments to sometimes be encrypted with the same part of the key, producing repeated sequences in the ciphertext whose spacing reveals the key length" },
      { id: "c", text: "Vigenere ciphertext always has the same length as the key" },
      { id: "d", text: "The keyword is always printed at the start of the ciphertext" },
    ],
    correctOptionId: "b",
    explanation:
      "Because the key repeats, identical plaintext fragments that happen to align with the same key offset produce identical ciphertext fragments. Measuring the distances between these repeats and finding their common factors reveals the likely key length -- once that's known, the cipher reduces to several independent, breakable Caesar ciphers.",
  },
  {
    id: "cns-39",
    text: "The Autokey cipher tries to fix a weakness of Vigenere by:",
    topic: "Polyalphabetic Ciphers & OTP",
    options: [
      { id: "a", text: "Prefixing the message itself with the keyword to extend the key to the full length of the message" },
      { id: "b", text: "Using no key whatsoever" },
      { id: "c", text: "Encrypting each letter twice" },
      { id: "d", text: "Only ever using single-letter keys" },
    ],
    correctOptionId: "a",
    explanation:
      "Autokey uses the keyword to start the key stream, then continues the key using the plaintext itself (prefixed by the keyword) -- so the key is as long as the message. It still leaves some frequency characteristics an attacker can exploit, though, since the plaintext-derived part of the key isn't random.",
  },
  {
    id: "cns-40",
    text: "A One-Time Pad is described as unbreakable when used correctly, mainly because:",
    topic: "Polyalphabetic Ciphers & OTP",
    options: [
      { id: "a", text: "It uses a very long keyword that repeats only once" },
      { id: "b", text: "For any given ciphertext, there exists an equally valid key mapping it to any possible plaintext, so the ciphertext carries no statistical link to the actual plaintext" },
      { id: "c", text: "It always encrypts using the Playfair 5x5 grid" },
      { id: "d", text: "It uses AES internally" },
    ],
    correctOptionId: "b",
    explanation:
      "Because the pad's key is truly random, as long as the message, and used only once, every possible plaintext is equally consistent with a given ciphertext under some key. That eliminates any statistical foothold for cryptanalysis -- at the cost of the serious practical problem of generating and safely distributing a huge, one-use-only key.",
  },
  {
    id: "cns-41",
    text: "What distinguishes a transposition cipher from a substitution cipher in terms of what an attacker can observe?",
    topic: "Transposition & Product Ciphers",
    options: [
      { id: "a", text: "Transposition ciphertext has the same letter-frequency distribution as the original plaintext, since only the order of letters changes, not the letters themselves" },
      { id: "b", text: "Transposition ciphers can't be broken under any circumstances" },
      { id: "c", text: "Transposition always produces shorter ciphertext than the plaintext" },
      { id: "d", text: "Substitution never changes letter frequencies, but transposition does" },
    ],
    correctOptionId: "a",
    explanation:
      "Because transposition only rearranges the plaintext's letters without changing them, the ciphertext keeps exactly the same letter-frequency distribution as the original plaintext -- a giveaway that lets an analyst recognize a transposition cipher is in use.",
  },
  {
    id: "cns-42",
    text: "In a Row Transposition cipher using key '4312567', the plaintext is written into rows of 7 columns, and the columns are then read off in an order given by the key digits. What determines that reading order?",
    topic: "Transposition & Product Ciphers",
    options: [
      { id: "a", text: "The columns are read left to right, ignoring the key" },
      { id: "b", text: "Column reading order follows the numeric rank of each key digit -- e.g., the column under key digit '1' is read first, then '2', and so on" },
      { id: "c", text: "The columns are read in reverse alphabetical order of their first letter" },
      { id: "d", text: "Only the first and last columns are ever read" },
    ],
    correctOptionId: "b",
    explanation:
      "Each column is labeled with its corresponding key digit, and columns are read off in ascending numeric order of that digit (column under '1' first, then '2', etc.) rather than in their original left-to-right position -- that reordering is what makes it a transposition cipher.",
  },
  {
    id: "cns-43",
    text: "In the Rail Fence cipher, the plaintext is written diagonally across a set number of rows and then read off:",
    topic: "Transposition & Product Ciphers",
    options: [
      { id: "a", text: "Column by column" },
      { id: "b", text: "Row by row" },
      { id: "c", text: "In reverse order" },
      { id: "d", text: "Only the last row is kept" },
    ],
    correctOptionId: "b",
    explanation:
      "Rail Fence writes the message diagonally down and up across the chosen number of rows, then reads the result off row by row to produce the ciphertext -- a simple, historically early transposition technique.",
  },
  {
    id: "cns-44",
    text: "Why are Product Ciphers -- combining a substitution step with a transposition step -- considered a meaningful step up from using either technique alone?",
    topic: "Transposition & Product Ciphers",
    options: [
      { id: "a", text: "Two substitutions chained together, or two transpositions chained together, mostly just produce a single more complex substitution or transposition -- but a substitution followed by a transposition creates a genuinely new, harder cipher" },
      { id: "b", text: "Product ciphers eliminate the need for any key" },
      { id: "c", text: "Product ciphers are always faster to compute than either technique alone" },
      { id: "d", text: "Product ciphers were only ever theoretical and were never actually built" },
    ],
    correctOptionId: "a",
    explanation:
      "Chaining two ciphers of the same type doesn't add much: two substitutions still reduce to one substitution, and two transpositions still reduce to one transposition. But alternating substitution and transposition genuinely compounds the difficulty, which is why product ciphers are described as the bridge from classical to modern ciphers (rotor machines and later block ciphers both build on this idea).",
  },
  {
    id: "cns-45",
    text: "Public-key cryptography was developed specifically to address which two problems?",
    topic: "Public-Key Cryptography",
    options: [
      { id: "a", text: "Key distribution without trusting a key-distribution center, and verifiable digital signatures" },
      { id: "b", text: "Making encryption faster and reducing key length" },
      { id: "c", text: "Eliminating the need for any cryptanalysis research" },
      { id: "d", text: "Replacing all uses of symmetric/private-key cryptography" },
    ],
    correctOptionId: "a",
    explanation:
      "Whitfield Diffie and Martin Hellman introduced public-key cryptography in 1976 to solve two specific problems: enabling secure communication without both parties having to trust a key distribution center with a shared secret, and allowing digital signatures that verify a message truly came from its claimed sender. It complements private-key cryptography rather than replacing it.",
  },
  {
    id: "cns-46",
    text: "Public-key cryptography is described as 'asymmetric.' What makes it asymmetric?",
    topic: "Public-Key Cryptography",
    options: [
      { id: "a", text: "It uses a longer key for encryption than for decryption" },
      { id: "b", text: "The two parties involved use two different, non-interchangeable keys -- a public key anyone can know, and a private key known only to the recipient" },
      { id: "c", text: "Only the sender needs a computer; the receiver does not" },
      { id: "d", text: "It can only send messages in one direction, never receive replies" },
    ],
    correctOptionId: "b",
    explanation:
      "Unlike symmetric cryptography where both parties hold the same secret key, public-key cryptography gives each user a key pair: a public key that can be freely shared (used to encrypt messages to them or verify their signatures) and a private key kept secret (used to decrypt or to sign). Whoever can encrypt or verify cannot themselves decrypt or create signatures -- that asymmetry of capability is the point.",
  },
  {
    id: "cns-47",
    text: "What makes public-key algorithms computationally practical to use securely, according to the 'Public-Key Characteristics' principle?",
    topic: "Public-Key Cryptography",
    options: [
      { id: "a", text: "It must be easy to find the decryption key just from the algorithm and the encryption key" },
      { id: "b", text: "It must be computationally infeasible to determine the decryption key from the algorithm and encryption key alone, yet computationally easy to encrypt/decrypt when the relevant key is actually known" },
      { id: "c", text: "Both keys must always be kept secret" },
      { id: "d", text: "The encryption and decryption keys must always be identical" },
    ],
    correctOptionId: "b",
    explanation:
      "The security of public-key schemes rests on an asymmetry of difficulty: with the right key, encryption and decryption are easy; without it, deriving the decryption key from the public information alone is computationally infeasible. That gap -- not secrecy of the algorithm -- is what keeps the system secure.",
  },
  {
    id: "cns-48",
    text: "In RSA key setup with p=11 and q=13, the modulus is n=143 and phi(n)=(p-1)(q-1)=120. If the public exponent e=7 is chosen, what is the private exponent d, and what does it satisfy?",
    topic: "RSA",
    options: [
      { id: "a", text: "d=103, satisfying e.d = 1 mod phi(n)" },
      { id: "b", text: "d=13, satisfying e+d = phi(n)" },
      { id: "c", text: "d=17, satisfying e.d = n" },
      { id: "d", text: "d=7, since e and d are always equal" },
    ],
    correctOptionId: "a",
    explanation:
      "d is chosen so that e.d = 1 mod 120 with 0 <= d < 120. Since 7 x 103 = 721 = 6x120 + 1, d=103 satisfies this exactly -- giving public key (e,n)=(7,143) and private key (d,n)=(103,143).",
  },
  {
    id: "cns-49",
    text: "Using the RSA public key (e,n)=(7,143) from p=11, q=13, what ciphertext results from encrypting the message M=9?",
    topic: "RSA",
    options: [
      { id: "a", text: "C=48" },
      { id: "b", text: "C=9" },
      { id: "c", text: "C=103" },
      { id: "d", text: "C=63" },
    ],
    correctOptionId: "a",
    explanation:
      "C = M^e mod n = 9^7 mod 143. Computing step by step (9^2=81, 9^4=81^2 mod 143=112, 9^7=9^4 x 9^2 x 9 = 112x81x9 mod 143), the result is C=48 -- and decrypting 48^103 mod 143 correctly recovers M=9.",
  },
  {
    id: "cns-50",
    text: "RSA's security against a direct mathematical attack is generally considered equivalent to the difficulty of which underlying problem?",
    topic: "RSA",
    options: [
      { id: "a", text: "Sorting a large list of numbers" },
      { id: "b", text: "Factoring the large modulus n into its prime factors p and q (or equivalently computing phi(n) directly)" },
      { id: "c", text: "Finding the shortest path in a graph" },
      { id: "d", text: "Solving a system of linear equations" },
    ],
    correctOptionId: "b",
    explanation:
      "All three mathematical approaches to attacking RSA -- factoring n directly, determining phi(n) some other way, or finding d directly -- are currently believed to be computationally equivalent to factoring n. That's why RSA's key sizes (1024-2048+ bits) are chosen based on how hard factoring numbers of that size is believed to be.",
  },
];

export default questions;
