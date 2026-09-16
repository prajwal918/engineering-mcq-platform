import type { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: "toc-u1-q1",
    text: "The transitional function of a DFA is",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Q \u00d7 \u03a3 \u2192 Q" },
      { id: "b", text: "Q \u00d7 \u03a3 \u2192 2Q" },
      { id: "c", text: "Q \u00d7 \u03a3 \u2192 2n" },
      { id: "d", text: "Q \u00d7 \u03a3 \u2192 Qn" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q2",
    text: "Which of the following is an application of Finite Automaton?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Compiler Design" },
      { id: "b", text: "Grammar Parsers" },
      { id: "c", text: "Text Search" },
      { id: "d", text: "All of the mentioned" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q3",
    text: "Predict the number of transitions required to automate the following language using only 3 states: L = {w | w ends with 00}",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "6" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q4",
    text: "If L is a regular language, Lc and Lr both will be:",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Accepted by NFA" },
      { id: "b", text: "Rejected by NFA" },
      { id: "c", text: "One of them will be accepted" },
      { id: "d", text: "Cannot be said" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q5",
    text: "In NFA, this very state is like dead-end non final state:",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "ACCEPT" },
      { id: "b", text: "REJECT" },
      { id: "c", text: "DISNTICT" },
      { id: "d", text: "START" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q6",
    text: "Which among the following can be an example of application of finite state machine (FSM)?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Communication Link" },
      { id: "b", text: "Adder" },
      { id: "c", text: "Stack" },
      { id: "d", text: "None of the mentioned" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q7",
    text: "The number of tuples in an extended Non-Deterministic Finite Automaton:",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "4" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q8",
    text: "A finite automaton recognizes",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Any language" },
      { id: "b", text: "Context sensitive language" },
      { id: "c", text: "Context-free language" },
      { id: "d", text: "Regular language" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q9",
    text: "NFA, in its name has \u2019non-deterministic\u2019 because of :",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "The result is undetermined" },
      { id: "b", text: "The choice of path is non-deterministic" },
      { id: "c", text: "The state to be transited next is non-deterministic" },
      { id: "d", text: "All of the mentioned" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q10",
    text: "The given DFA accepts the set of all strings over {0, 1} that",
    diagramUrl: "/diagrams/toc_u1/toc_q10_0.png",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "begin either with 0 or 1" },
      { id: "b", text: "end with 00" },
      { id: "c", text: "contain the substring 00" },
      { id: "d", text: "end with 0" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q11",
    text: "A language is regular if and only if",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "accepted by DFA" },
      { id: "b", text: "accepted by PDA" },
      { id: "c", text: "accepted by LBA" },
      { id: "d", text: "accepted by Turing machine" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q12",
    text: "In the context of a finite automaton, the extended transition function is denoted by:",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "\u03b4q, a)" },
      { id: "b", text: "\u03b4^(q, a)q, w)" },
      { id: "c", text: "q0" },
      { id: "d", text: "Q'" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q14",
    text: "How is the extended transition function \u03b4 defined recursively in terms of the standard transition function \u03b4 for a non-empty string w = xa (where x is a string and a is a symbol)?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "\u03b4^(q, a)q, w) = \u03b4q, a)" },
      { id: "b", text: "\u03b4^(q, a)q, w) = \u03b4^(q, a)\u03b4q, a), x)" },
      { id: "c", text: "\u03b4^(q, a)q, w) = \u03b4\u03b4^(q, a)q, x), a)" },
      { id: "d", text: "\u03b4^(q, a)q, w) = \u03b4q, w)" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q15",
    text: "The maximum number of states of a DFA converted from an NFA with n states is",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "n" },
      { id: "b", text: "n2" },
      { id: "c", text: "2n" },
      { id: "d", text: "n*n*n" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q16",
    text: "\u03b5 + RR* = ?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "R" },
      { id: "b", text: "R+" },
      { id: "c", text: "R*" },
      { id: "d", text: "\u03b5" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q17",
    text: "Which regular expression best describes the language accepted by the following non- deterministic automation?",
    diagramUrl: "/diagrams/toc_u1/toc_q17_1.png",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "(q, a)abb)*" },
      { id: "b", text: "(q, a)a + b)*" },
      { id: "c", text: "(q, a)a + b)* a(q, a)a + b)b" },
      { id: "d", text: "(q, a)a + b)*a(q, a)a + b)*b(q, a)a + b)*" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q18",
    text: "Which type of string is accepted by the following finite automata?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "All string" },
      { id: "b", text: "Null string" },
      { id: "c", text: "String with only a\u2019s" },
      { id: "d", text: "String with only b\u2019s" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q19",
    text: "The string 1101 does not belong to the set represented by",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "(q, a)00 + (q, a)11)*01)*" },
      { id: "b", text: "(q, a)10)*(q, a)01)*(q, a)00 + 11)*" },
      { id: "c", text: "1(q, a)0 + 1)*101" },
      { id: "d", text: "110*(q, a)0 + 1)" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q20",
    text: "The transition function of an NFA is",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Q \u00d7 \u03a3 \u2192 Q" },
      { id: "b", text: "Q \u00d7 \u03a3 \u2192 2Q" },
      { id: "c", text: "Q \u00d7 \u03a3 \u2192 2n" },
      { id: "d", text: "Q \u00d7 \u03a3 \u2192 Qn" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q21",
    text: "Which of the following languages is not regular?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "{anbn\u2223n\u22650}" },
      { id: "b", text: "{anbm\u2223n\u22650 and m\u22650}" },
      { id: "c", text: "{w\u2223w contains an even number of 0\u2019s}" },
      { id: "d", text: "{w\u2223w is a string of 0\u2019s and 1\u2019s}" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q22",
    text: "Which of the following regular expression indicates set of strings consisting of any number of a\u2019s (may be empty string also) followed by any number of b\u2019s(may be empty string also)",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "**a*b" },
      { id: "b", text: "a*a*b*" },
      { id: "c", text: "a*b*" },
      { id: "d", text: "ab*" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q23",
    text: "The Pumping Lemma for Regular Languages is used to prove that a language is not regular",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "False" },
      { id: "b", text: "True" },
      { id: "c", text: "Partially false" },
      { id: "d", text: "May be true or false" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q24",
    text: "The basic limitations of a finite state machine is",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "It cannot remember arbitrarily large amount of information" },
      { id: "b", text: "It cannot remember state transitions" },
      { id: "c", text: "It cannot remember grammar for a language" },
      { id: "d", text: "It cannot remember language generated from a grammar" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q25",
    text: "Which is true for a dead state?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "It cannot be reached anytime" },
      { id: "b", text: "There is no necessity of the state" },
      { id: "c", text: "If control enters, there is no way to come out from the state" },
      { id: "d", text: "If control enters, FA is dead" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q26",
    text: "The language accepted by the given FA is",
    diagramUrl: "/diagrams/toc_u1/toc_q26_3.jpeg",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "(q, a)ab)*" },
      { id: "b", text: "bb*a" },
      { id: "c", text: "b(q, a)ba)*a" },
      { id: "d", text: "Null" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q27",
    text: "The language of all words with at least 2 a\u2019s can be described by the regular expression",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "(q, a)ab)*a" },
      { id: "b", text: "(q, a)a + b)*ab*(q, a)a + b)*" },
      { id: "c", text: "b*ab*(q, a)a + b)*" },
      { id: "d", text: "(q, a)a+b)*a(q, a)a+b)*a(q, a)a+b)*" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q28",
    text: "The set of all strings of {0, 1} having exactly two 0\u2019s is",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "1*01*01*" },
      { id: "b", text: "{0 + 1)*1" },
      { id: "c", text: "{11 + 0}*" },
      { id: "d", text: "{00 + 11}*" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q29",
    text: "After applying the State Elimination Method to a finite automaton, what is the result?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "A minimized deterministic finite automaton" },
      { id: "b", text: "A regular expression" },
      { id: "c", text: "A regular grammar" },
      { id: "d", text: "A non-deterministic pushdown automaton" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q30",
    text: "Which of the strings do not belong to the regular expression (ba + baa)*aaba",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "baaaba" },
      { id: "b", text: "babaabaaaba" },
      { id: "c", text: "babababa" },
      { id: "d", text: "baaaaba" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q31",
    text: "Which of the languages is accepted by the following FA?",
    diagramUrl: "/diagrams/toc_u1/toc_q31_4.png",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "b(q, a)a + bba*)*a* b" },
      { id: "b", text: "a(q, a)a + bba*)*b*" },
      { id: "c", text: "a(q, a)a + bb*a*)*b*d" },
      { id: "d", text: "a*(q, a)ba*b)*" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q32",
    text: "The pumping lemma for regular language is used to prove that",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Certain sets are regular" },
      { id: "b", text: "Certain sets are not regular" },
      { id: "c", text: "Certain regular grammar produce RE" },
      { id: "d", text: "Certain regular grammar does not produce RE" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q33",
    text: "Regular languages are closed under",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Union" },
      { id: "b", text: "Concatenation" },
      { id: "c", text: "Kleene closure" },
      { id: "d", text: "All of the above" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q34",
    text: "Consider the strings u = abbaba, v = bab, and w = aabb. Which of the following statement is true for the given transitional system?",
    diagramUrl: "/diagrams/toc_u1/toc_q34_5.png",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "The automaton accepts u and v but not w." },
      { id: "b", text: "The automaton accepts each of u, v, and w." },
      { id: "c", text: "The automaton rejects each of u, v, and w." },
      { id: "d", text: "The automaton accepts u but rejects v and w." }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q35",
    text: "What is the primary purpose of the State Elimination Method?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "To minimize the number of states in a finite automaton" },
      { id: "b", text: "To convert a finite automaton into a regular expression" },
      { id: "c", text: "To convert a regular expression into a finite automaton" },
      { id: "d", text: "To remove unreachable states from the finite automaton" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q36",
    text: "Which of the following is true for the epsilon closure of a state q in a Non-deterministic Finite Automaton (NFA)?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "It includes only the state q itself." },
      { id: "b", text: "It includes all states that can be reached from q via epsilon transitions." },
      { id: "c", text: "It includes all states that can be reached from q via any input symbol." },
      { id: "d", text: "It includes no states." }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q38",
    text: "Consider the transitional system  Which of the states are to be marked as starting state and final state, respectively, so as to turn the above system into a DFA that accepts all strings having odd number of zeros and even number of 1\u2019s?",
    diagramUrl: "/diagrams/toc_u1/toc_q38_6.png",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "q0, q2" },
      { id: "b", text: "q0, q1" },
      { id: "c", text: "q1, q2" },
      { id: "d", text: "q2, q3" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q39",
    text: "Consider the following DFA in which S0 is the start state and S1 and S4 are the final states.  Which one is true?",
    diagramUrl: "/diagrams/toc_u1/toc_q39_7.png",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "All strings of x and y." },
      { id: "b", text: "All strings of x and y which have either an even number of x and even number of y or an oddnumber of x and odd number of y." },
      { id: "c", text: "All strings of x and y which have an equal number of x and y." },
      { id: "d", text: "All strings of x and y which have either an even number of x and odd number of y or an oddnumber of x and even number of y." }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q40",
    text: "Let N be an NFA with n states and let M be the minimized DFA with m states recognizing the same language. Which of the following is NECESSARILY true?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "m \u2264 2n" },
      { id: "b", text: "n \u2264 m" },
      { id: "c", text: "M has one accept state" },
      { id: "d", text: "m = 2n" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q41",
    text: "The smallest FA which accepts the language {x | length of x is divisible by 3} has",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "2 states" },
      { id: "b", text: "3 states" },
      { id: "c", text: "4 states" },
      { id: "d", text: "5 states" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q42",
    text: "Which of the following is true about the extended transition function \u03b4^(q0, \u03b5) for any state q0, where \u03b5 is the empty string?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "\u03b4^(q, a)q0, \u03b5) = qF" },
      { id: "b", text: "\u03b4^(q, a)q0, \u03b5) = q0" },
      { id: "c", text: "\u03b4^(q, a)q0, \u03b5) = F" },
      { id: "d", text: "\u03b4^(q, a)q0, \u03b5) = undefined" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q43",
    text: "There exists a language L. We define a string w such that w\u2208L and w=xyz and |w| >=n for some constant integer n. What can be the maximum length of the substring xy i.e. |xy|<=?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "n" },
      { id: "b", text: "|y|" },
      { id: "c", text: "|x|" },
      { id: "d", text: "None of the mentioned" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q44",
    text: "What does the regular expression a*ba* represent?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Strings with exactly one 'b' and any number of 'a's" },
      { id: "b", text: "Strings that start and end with 'a'" },
      { id: "c", text: "Strings with no 'b'" },
      { id: "d", text: "Strings with one or more 'b's" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q45",
    text: "The regular expression \u03b5 represents which of the following?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "The set containing only the empty string" },
      { id: "b", text: "The empty set" },
      { id: "c", text: "The set containing all strings" },
      { id: "d", text: "A string of length 1" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q46",
    text: "The following finite state machine accepts all those binary strings in which the number of  1\u2019s and 0\u2019s are, respectively,",
    diagramUrl: "/diagrams/toc_u1/toc_q46_8.png",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "divisible by 3 and 2" },
      { id: "b", text: "odd and even" },
      { id: "c", text: "even and odd" },
      { id: "d", text: "divisible by 2 and 3" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q47",
    text: "When converting an NFA to a regular expression using the State Elimination Method, which of the following states are typically preserved?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Intermediate states" },
      { id: "b", text: "Start and final states" },
      { id: "c", text: "Only the state with the fewest transitions" },
      { id: "d", text: "All states except the start state" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q48",
    text: "Answer in  accordance  to  the  third  and  last  statement  in  pumping  lemma:  For all _______ xykz \u20ac L.",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "k<0" },
      { id: "b", text: "k>0" },
      { id: "c", text: "k\u22650" },
      { id: "d", text: "k\u22640" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q49",
    text: "Which of the following regular expressions describe the language over {0, 1} consisting of strings that contain exactly two 1\u2019s?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "(q, a)0 + 1)*11(q, a)0 + 1)*" },
      { id: "b", text: "0*110*" },
      { id: "c", text: "0*10*10*" },
      { id: "d", text: "(q, a)0 + 1)*1(q, a)0 + 1)*1(q, a)0 + 1)*" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q50",
    text: "Which of the following regular expressions denotes the set of all strings over the alphabet {0, 1} that begin and end with 1?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "1(q, a)0+1)*1" },
      { id: "b", text: "(q, a)1(q, a)0+1))*1" },
      { id: "c", text: "1(q, a)0+1)1*" },
      { id: "d", text: "1(q, a)1*0)*0" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q51",
    text: "A Language for which no DFA exist is a________",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Regular Language" },
      { id: "b", text: "Non-Regular Language" },
      { id: "c", text: "May be Regular" },
      { id: "d", text: "Cannot be said" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q52",
    text: "Which of the following best describes a regular expression?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "A formal description of a language" },
      { id: "b", text: "A graphical representation of a finite automaton" },
      { id: "c", text: "A method to calculate the shortest path in a graph" },
      { id: "d", text: "A sequence of symbols and operators to define a set of strings" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q53",
    text: "Find the false statement if S = (a, b)",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "L = {anbm, m, n \u2265 1} is regular" },
      { id: "b", text: "L = {X, where na(q, a)X) > nb(q, a)X)} is not regular" },
      { id: "c", text: "L = {anbn, n \u2265 1} is regular" },
      { id: "d", text: "L = {X, where na(q, a)X) = nb(q, a)X)} is not regular" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q54",
    text: "The string 1101 does not belong to the set represented by",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "110*(q, a)0 + 1)" },
      { id: "b", text: "1(q, a)0 + 1)*101" },
      { id: "c", text: "(q, a)10)*(q, a)01)*(q, a)00 + 11)*" },
      { id: "d", text: "(q, a)00 + (q, a)11)*01)*" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q55",
    text: "What is the purpose of the + symbol in regular expressions?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "It matches zero or more occurrences of the preceding element." },
      { id: "b", text: "It matches exactly one occurrence of the preceding element." },
      { id: "c", text: "It matches one or more occurrences of the preceding element." },
      { id: "d", text: "It matches any single character." }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q56",
    text: "Which one of the following languages over the alphabet {0, 1} is described by the  regular expression:  (0 + 1)*0(0 + l)*0(0 + 1)* ?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "The set of all strings containing the substring 00." },
      { id: "b", text: "The set of all strings containing at most two 0\u2019s." },
      { id: "c", text: "The set of all strings containing at least two 0\u2019s." },
      { id: "d", text: "The set of all strings that begin and end with either 0 or 1" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q57",
    text: "What does the regular expression a*b represent?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Zero or more occurrences of b followed by one a" },
      { id: "b", text: "Exactly one occurrence of a followed by zero or more occurrences of b" },
      { id: "c", text: "Zero or more occurrences of a followed by one b" },
      { id: "d", text: "Exactly one occurrence of b followed by zero or more occurrences of a" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q58",
    text: "In  a  Non-deterministic  Finite  Automaton  (NFA)  with  \u03b5-transitions,  which  of  the following statements is true?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "An \u03b5-transition allows the automaton to change states without consuming any inputsymbol." },
      { id: "b", text: "\u03b5-transitions are not allowed in Deterministic Finite Automata (q, a)DFA)." },
      { id: "c", text: "\u03b5-transitions can only be used to transition between states that have the same symbol intheir transition function." },
      { id: "d", text: "An NFA with \u03b5-transitions can always be converted to an equivalent DFA without \u03b5-transitions." }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q60",
    text: "\u03b4^(q,ya) is equivalent to:",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "\u03b4(q, a)q,y),a)" },
      { id: "b", text: "\u03b4q,ya)" },
      { id: "c", text: "\u03b4\u03b4^(q, a)q,y),a)" },
      { id: "d", text: "independent from \u03b4 notation" }
    ],
    correctOptionId: "c",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q61",
    text: "\u0278 in minimal finite automata need _____________ no. of final states.",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "None" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q62",
    text: "Subset Construction method used for:",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "Conversion of NFA to DFA" },
      { id: "b", text: "DFA minimization" },
      { id: "c", text: "Eliminating Null references" },
      { id: "d", text: "\u03b5-NFA to NFA" }
    ],
    correctOptionId: "a",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q63",
    text: "An NFA\u2019s transition function returns",
    diagramUrl: "/diagrams/toc_u1/toc_q63_13.jpeg",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "A state" },
      { id: "b", text: "A Boolean value" },
      { id: "c", text: "An edge" },
      { id: "d", text: "A set of states" }
    ],
    correctOptionId: "d",
    explanation: "Answer provided by question bank."
  },
  {
    id: "toc-u1-q64",
    text: "If we select a string w such that w\u2208L, and w=xyz. Which of the following portions cannot be an empty string?",
    topic: "Finite Automata",
    options: [
      { id: "a", text: "x" },
      { id: "b", text: "y" },
      { id: "c", text: "z" },
      { id: "d", text: "x and z" }
    ],
    correctOptionId: "b",
    explanation: "Answer provided by question bank."
  },
];
