import type { QuizQuestion } from "@/types/quiz";

/**
 * CS3001 -- Unit 1: Data Communication Fundamentals
 *
 * Source: merged from the two uploaded files --
 *   - CS3001-1_CNC_UNIT_201_MCQs-30.docx (30 questions)
 *   - Unit_201_20MCQs.doc (17 questions actually present in the file,
 *     despite its filename -- see README.md "Data notes")
 *
 * Question and option text is extracted verbatim from those files. The
 * only normalization applied is: (1) stripping the leading "a)" / "1)"
 * enumerator from each option, since the UI renders its own labels, and
 * (2) collapsing inconsistent blank-line runs (____, ----, etc.) to a
 * single "_____" style. Three exact duplicate questions and one
 * near-duplicate (same stem and answer, one distractor swapped) that
 * appeared across the two files have been merged into one entry each --
 * full detail in README.md.
 *
 * Explanations are original, written for this platform: neither source
 * file included any rationale beyond an answer key.
 */
export const questions: QuizQuestion[] = [
  {
    id: "q01",
    text: "In a _____ communication, the media is dedicated.",
    options: [
      { id: "a", text: "point-to-point" },
      { id: "b", text: "multipoint" },
      { id: "c", text: "mesh" },
      { id: "d", text: "None of the choices are correct" },
    ],
    correctOptionId: "a",
    explanation:
      "A point-to-point connection uses a dedicated link between exactly two devices, and the link's entire capacity is reserved for that pair. That's different from a multipoint (multidrop) connection, where more than two devices share the same link.",
  },
  {
    id: "q02",
    text: "In a fully connected mesh topology with six computers, we need _____ links.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "36" },
      { id: "c", text: "15" },
      { id: "d", text: "30" },
    ],
    correctOptionId: "c",
    explanation:
      "A fully connected mesh needs one dedicated link between every pair of devices, which works out to n(n - 1) / 2 links for n devices. With n = 6, that's (6 x 5) / 2 = 15.",
  },
  {
    id: "q03",
    text: "Frequency and period are _____.",
    options: [
      { id: "a", text: "inverse of each other" },
      { id: "b", text: "proportional to each other" },
      { id: "c", text: "the same" },
      { id: "d", text: "are not related" },
    ],
    correctOptionId: "a",
    explanation:
      "Period (T) is the time to complete one cycle, and frequency (f) is the number of cycles per second, so f = 1/T. Since each is the reciprocal of the other, as frequency rises, period falls, and vice versa.",
  },
  {
    id: "q04",
    text: "_____ is a type of transmission impairment in which the signal loses strength due to the different propagation speeds of each frequency that makes up the signal.",
    options: [
      { id: "a", text: "Attenuation" },
      { id: "b", text: "Distortion" },
      { id: "c", text: "Noise" },
      { id: "d", text: "Decibel" },
    ],
    correctOptionId: "b",
    explanation:
      "Distortion happens when a composite signal's frequency components each travel at a slightly different speed through the medium. Because they arrive with different delays, the combined waveform no longer has the shape it started with.",
  },
  {
    id: "q05",
    text: "_____ conversion involves three techniques: line coding, block coding, and scrambling.",
    options: [
      { id: "a", text: "Analog-to-digital" },
      { id: "b", text: "Digital-to-analog" },
      { id: "c", text: "Analog-to-analog" },
      { id: "d", text: "Digital-to-digital" },
    ],
    correctOptionId: "d",
    explanation:
      "Digital-to-digital conversion represents digital data with a digital signal using three techniques: line coding (always required), block coding (adds redundancy for synchronization and error detection), and scrambling (avoids long runs of 0s or 1s).",
  },
  {
    id: "q06",
    text: "Which error detection method involves polynomials?",
    options: [
      { id: "a", text: "CRC" },
      { id: "b", text: "Simple parity check" },
      { id: "c", text: "Two-dimensional parity check" },
      { id: "d", text: "Checksum" },
    ],
    correctOptionId: "a",
    explanation:
      "Cyclic Redundancy Check (CRC) treats the data's bit pattern as a polynomial and divides it by a generator polynomial using modulo-2 binary division. The remainder of that division becomes the CRC bits appended to the data.",
  },
  {
    id: "q07",
    text: "The _____ sublayer is responsible for the operation of the CSMA/CD access method and framing.",
    options: [
      { id: "a", text: "LLC" },
      { id: "b", text: "MII" },
      { id: "c", text: "MAC" },
      { id: "d", text: "IP" },
    ],
    correctOptionId: "c",
    explanation:
      "The Media Access Control (MAC) sublayer, one of the two sublayers of the data link layer, defines how devices share the medium -- including access methods like CSMA/CD in classic Ethernet -- and handles framing.",
  },
  {
    id: "q08",
    text: "Which of the following best describes a single-bit error?",
    options: [
      { id: "a", text: "A single bit is inverted." },
      { id: "b", text: "A single bit per transmission is inverted." },
      { id: "c", text: "A single bit per data unit is inverted." },
      { id: "d", text: "All of the choices are correct" },
    ],
    correctOptionId: "c",
    explanation:
      "A single-bit error means exactly one bit within a given data unit (such as a byte or a frame) is flipped, while every other bit in that unit arrives correctly.",
  },
  {
    id: "q09",
    text: "A packet at the data-link layer is normally called a _____.",
    options: [
      { id: "a", text: "datagram" },
      { id: "b", text: "message" },
      { id: "c", text: "packet" },
      { id: "d", text: "frame" },
    ],
    correctOptionId: "d",
    explanation:
      "At the data-link layer, a unit of data is called a frame. The equivalent terms at other layers are datagram/packet at the network layer, and segment or message higher up the stack.",
  },
  {
    id: "q10",
    text: "In _____, the change or lack of change in the level of the voltage determines the value of the bit.",
    options: [
      { id: "a", text: "NRZ-I" },
      { id: "b", text: "NRZ-L" },
      { id: "c", text: "NRZ-I or NRZ-L" },
      { id: "d", text: "None of the choices are correct." },
    ],
    correctOptionId: "a",
    explanation:
      "NRZ-I (Non-Return-to-Zero, Invert on ones) encodes each bit using change: a transition at the start of the interval means 1, no transition means 0. That's different from NRZ-L, where the absolute voltage level -- not a change in it -- carries the bit value.",
  },
  {
    id: "q11",
    text: "What is the full form of OSI?",
    options: [
      { id: "a", text: "optical service implementation" },
      { id: "b", text: "open service Internet" },
      { id: "c", text: "open system interconnection" },
      { id: "d", text: "operating system interface" },
    ],
    correctOptionId: "c",
    explanation:
      "OSI stands for Open Systems Interconnection, the seven-layer reference model (physical, data link, network, transport, session, presentation, application) used to describe how network communication is organized.",
  },
  {
    id: "q12",
    text: "When a collection of various computers appears as a single coherent system to its clients, what is this called?",
    options: [
      { id: "a", text: "mail system" },
      { id: "b", text: "networking system" },
      { id: "c", text: "computer network" },
      { id: "d", text: "distributed system" },
    ],
    correctOptionId: "d",
    explanation:
      "When a group of independent computers presents itself to users as one unified system, that's a distributed system -- the coordination between the underlying machines is hidden from the client.",
  },
  {
    id: "q13",
    text: "Which one of the following is not a function of network layer?",
    options: [
      { id: "a", text: "congestion control" },
      { id: "b", text: "error control" },
      { id: "c", text: "routing" },
      { id: "d", text: "inter-networking" },
    ],
    correctOptionId: "b",
    explanation:
      "The network layer handles routing, logical (IP) addressing, congestion control, and internetworking. Error control -- checking that data arrived intact -- is handled by the data link and transport layers instead.",
  },
  {
    id: "q14",
    text: "Which topology requires a multipoint connection?",
    options: [
      { id: "a", text: "Ring" },
      { id: "b", text: "Bus" },
      { id: "c", text: "Star" },
      { id: "d", text: "Mesh" },
    ],
    correctOptionId: "b",
    explanation:
      "A bus topology connects every device to one shared backbone cable, so that single link serves more than two devices at once -- the definition of a multipoint (multidrop) connection. Ring, star, and mesh are all built from point-to-point links instead.",
  },
  {
    id: "q15",
    text: "Which layer is responsible for process to process delivery in a general network model?",
    options: [
      { id: "a", text: "session layer" },
      { id: "b", text: "data link layer" },
      { id: "c", text: "transport layer" },
      { id: "d", text: "network layer" },
    ],
    correctOptionId: "c",
    explanation:
      "The transport layer handles process-to-process delivery: getting data to the correct application on the destination host, typically using port numbers. The network layer, by comparison, only gets data as far as the correct host.",
  },
  {
    id: "q16",
    text: "What is the term for the data communication system within a building or campus?",
    options: [
      { id: "a", text: "MAN" },
      { id: "b", text: "LAN" },
      { id: "c", text: "PAN" },
      { id: "d", text: "WAN" },
    ],
    correctOptionId: "b",
    explanation:
      "A Local Area Network (LAN) connects devices within a single building or campus, usually owned and managed by one organization -- unlike a MAN (city-sized) or WAN (spanning countries or continents).",
  },
  {
    id: "q17",
    text: "Which layer provides the services to user?",
    options: [
      { id: "a", text: "physical layer" },
      { id: "b", text: "presentation layer" },
      { id: "c", text: "session layer" },
      { id: "d", text: "application layer" },
    ],
    correctOptionId: "d",
    explanation:
      "The application layer sits at the top of the OSI stack and is the layer that directly provides services to the end user -- email, file transfer, and web browsing are all application-layer services.",
  },
  {
    id: "q18",
    text: "Which connection is necessary for a computer to join the internet?",
    options: [
      { id: "a", text: "internet society" },
      { id: "b", text: "internet service provider" },
      { id: "c", text: "different computer" },
      { id: "d", text: "internet architecture board" },
    ],
    correctOptionId: "b",
    explanation:
      "Joining the internet requires a connection through an internet service provider (ISP) -- an organization with its own internet access that sells connectivity to individuals and other networks.",
  },
  {
    id: "q19",
    text: "Which transmission media provides the highest transmission speed in a network?",
    options: [
      { id: "a", text: "coaxial cable" },
      { id: "b", text: "twisted pair cable" },
      { id: "c", text: "optical fiber" },
      { id: "d", text: "electrical cable" },
    ],
    correctOptionId: "c",
    explanation:
      "Optical fiber carries data as light pulses rather than electrical signals, giving it far greater bandwidth and much lower signal loss over distance than copper media, making it the fastest option here.",
  },
  {
    id: "q20",
    text: "A single channel is shared by multiple signals by _____",
    options: [
      { id: "a", text: "analog modulation" },
      { id: "b", text: "digital modulation" },
      { id: "c", text: "multiplexing" },
      { id: "d", text: "phase modulation" },
    ],
    correctOptionId: "c",
    explanation:
      "Multiplexing is the technique that lets multiple signals share one physical channel at the same time, combining them at the sender and separating them again at the receiver.",
  },
  {
    id: "q21",
    text: "Identify the layer which is responsible for data translating.",
    options: [
      { id: "a", text: "Network Layer" },
      { id: "b", text: "Data Link Layer" },
      { id: "c", text: "Presentation Layer" },
      { id: "d", text: "Application Layer" },
    ],
    correctOptionId: "c",
    explanation:
      "The presentation layer handles translation, along with encryption and compression, converting data between an application's internal format and a common format suitable for transmission.",
  },
  {
    id: "q22",
    text: "Identify the layer which provides service to the user.",
    options: [
      { id: "a", text: "Session Layer" },
      { id: "b", text: "Application Layer" },
      { id: "c", text: "Network Layer" },
      { id: "d", text: "Physical Layer" },
    ],
    correctOptionId: "b",
    explanation:
      "As with the earlier question on this topic, it's the application layer that provides services directly to the user -- it's the interface between network software and the end-user's applications.",
  },
  {
    id: "q23",
    text: "What is the length of the MAC address?",
    options: [
      { id: "a", text: "8 bits" },
      { id: "b", text: "16 bits" },
      { id: "c", text: "32 bits" },
      { id: "d", text: "48 bits" },
    ],
    correctOptionId: "d",
    explanation:
      "A MAC (physical) address is 48 bits long, conventionally written as six groups of two hexadecimal digits -- for example, 43:7B:6C:DE:10:00.",
  },
  {
    id: "q24",
    text: "_____ is a type of transmission impairment in which the signal loses strength due to the resistance of the transmission medium.",
    options: [
      { id: "a", text: "Attenuation" },
      { id: "b", text: "Distortion" },
      { id: "c", text: "Noise" },
      { id: "d", text: "Decibel" },
    ],
    correctOptionId: "a",
    explanation:
      "Attenuation is the loss of signal strength as it travels through a medium, caused by the medium's own resistance. Amplifiers or repeaters periodically boost the signal to counteract it.",
  },
  {
    id: "q25",
    text: "The _____ of a composite signal is the difference between the highest and the lowest frequencies contained in that signal.",
    options: [
      { id: "a", text: "frequency" },
      { id: "b", text: "period" },
      { id: "c", text: "bandwidth" },
      { id: "d", text: "amplitude" },
    ],
    correctOptionId: "c",
    explanation:
      "Bandwidth is the range of frequencies a composite signal occupies -- specifically, the difference between its highest and lowest frequency components.",
  },
  {
    id: "q26",
    text: "Baseband transmission of a digital signal is possible only if we have a _____ channel.",
    options: [
      { id: "a", text: "low-pass" },
      { id: "b", text: "bandpass" },
      { id: "c", text: "low rate" },
      { id: "d", text: "high rate" },
    ],
    correctOptionId: "a",
    explanation:
      "Baseband (direct) transmission sends a digital signal without shifting it to another frequency range first. Since a digital signal's energy starts near 0 Hz, this only works over a low-pass channel -- one that passes frequencies from near zero up to some cutoff.",
  },
  {
    id: "q27",
    text: "The most common technique to change an analog signal to digital data is called _____.",
    options: [
      { id: "a", text: "PAL" },
      { id: "b", text: "PCM" },
      { id: "c", text: "sampling" },
      { id: "d", text: "none of the above" },
    ],
    correctOptionId: "b",
    explanation:
      "Pulse Code Modulation (PCM) -- which samples an analog signal, quantizes each sample, and encodes it as a binary code -- is the most widely used technique for converting an analog signal into digital data.",
  },
  {
    id: "q28",
    text: "In _____ transmission, the channel capacity is shared by both communicating devices at all times.",
    options: [
      { id: "a", text: "simplex" },
      { id: "b", text: "half-duplex" },
      { id: "c", text: "full-duplex" },
      { id: "d", text: "half-simplex" },
    ],
    correctOptionId: "c",
    explanation:
      "In full-duplex transmission, both ends can send and receive at the same time, so the channel's capacity is effectively used in both directions simultaneously -- unlike half-duplex, where only one direction is active at a time.",
  },
  {
    id: "q29",
    text: "To deliver a message to the correct application program running on a host, the _____ address must be consulted.",
    options: [
      { id: "a", text: "port" },
      { id: "b", text: "IP" },
      { id: "c", text: "physical" },
      { id: "d", text: "none of the above" },
    ],
    correctOptionId: "a",
    explanation:
      "The port address, used at the transport layer, identifies a specific process running on a host. A physical (MAC) address gets a frame to the right device and an IP address gets a packet to the right host, but only the port number identifies which running program should receive it.",
  },
  {
    id: "q30",
    text: "Currently _____ is responsible for the management of Internet domain names and addresses.",
    options: [
      { id: "a", text: "NIC" },
      { id: "b", text: "ICANN" },
      { id: "c", text: "ISOC" },
      { id: "d", text: "IEFE" },
    ],
    correctOptionId: "b",
    explanation:
      "ICANN (the Internet Corporation for Assigned Names and Numbers) is the nonprofit organization currently responsible for coordinating the domain name system and allocating IP address space.",
  },
  {
    id: "q31",
    text: "_____ describes the position of the waveform relative to time 0.",
    options: [
      { id: "a", text: "Amplitude" },
      { id: "b", text: "Time" },
      { id: "c", text: "Frequency" },
      { id: "d", text: "Phase" },
    ],
    correctOptionId: "d",
    explanation:
      "Phase describes a signal's position relative to time zero -- essentially, where in its cycle the wave starts. Two signals with the same frequency and amplitude can still differ if they're offset in phase.",
  },
  {
    id: "q32",
    text: "In Manchester and differential Manchester encoding, the transition at the middle of the bit is used for _____.",
    options: [
      { id: "a", text: "bit transfer" },
      { id: "b", text: "baud transfer" },
      { id: "c", text: "synchronization" },
      { id: "d", text: "None of the choices are correct." },
    ],
    correctOptionId: "c",
    explanation:
      "Every bit interval in Manchester and differential Manchester encoding contains a transition at its midpoint. Besides helping represent the bit value, that guaranteed transition also lets the receiver's clock stay synchronized with the sender's (self-clocking).",
  },
  {
    id: "q33",
    text: "If the ASCII character G is sent and the character D is received, what type of error is this?",
    options: [
      { id: "a", text: "Single bit" },
      { id: "b", text: "Multiple bit" },
      { id: "c", text: "Burst" },
      { id: "d", text: "Recoverable" },
    ],
    correctOptionId: "c",
    explanation:
      "ASCII 'G' (0100 0111) and 'D' (0100 0100) differ only in their two lowest-order bits, which sit right next to each other. Because the corrupted bits form one contiguous run rather than being scattered, this is a burst error rather than an isolated single-bit error.",
  },
  {
    id: "q34",
    text: "In CRC, the quotient at the sender _____.",
    options: [
      { id: "a", text: "becomes the dividend at the receiver" },
      { id: "b", text: "becomes the divisor at the receiver" },
      { id: "c", text: "is the remainder" },
      { id: "d", text: "is discarded" },
    ],
    correctOptionId: "d",
    explanation:
      "In CRC generation, the sender divides the zero-padded data by the generator (divisor) using binary division. Only the remainder is kept and appended as the CRC field -- the quotient produced along the way is simply discarded.",
  },
  {
    id: "q35",
    text: "Gigabit Ethernet has a data rate of _____ Mbps.",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "100" },
      { id: "c", text: "1000" },
      { id: "d", text: "10,000" },
    ],
    correctOptionId: "c",
    explanation:
      "Gigabit Ethernet is defined to run at 1 gigabit per second, which is 1000 Mbps.",
  },
  {
    id: "q36",
    text: "Which of the following be an Ethernet multicast address?",
    options: [
      { id: "a", text: "43:7B:6C:DE:10:00" },
      { id: "b", text: "44:AA:C1:23:45:32" },
      { id: "c", text: "46:56:21:1A:DE:F4" },
      { id: "d", text: "48:32:21:21:4D:34" },
    ],
    correctOptionId: "a",
    explanation:
      "An Ethernet address is a multicast (group) address when the least significant bit of its first byte is 1. In binary, 0x43 is 0100 0011, which ends in 1 -- so 43:7B:6C:DE:10:00 is the multicast address, while the other three all end in 0 (ordinary unicast addresses).",
  },
  {
    id: "q37",
    text: "Which of the following is not one of the network criteria?",
    options: [
      { id: "a", text: "Performance" },
      { id: "b", text: "Reliability" },
      { id: "c", text: "Security" },
      { id: "d", text: "Adaptability" },
    ],
    correctOptionId: "d",
    explanation:
      "The standard criteria used to judge a network are performance, reliability, and security. Adaptability isn't one of the three core criteria typically listed.",
  },
  {
    id: "q38",
    text: "UTP is commonly used in _____",
    options: [
      { id: "a", text: "DSL" },
      { id: "b", text: "FTTP" },
      { id: "c", text: "HTTP" },
      { id: "d", text: "None of the mentioned" },
    ],
    correctOptionId: "a",
    explanation:
      "Unshielded twisted-pair (UTP) cabling is the medium used for DSL (Digital Subscriber Line) connections, running over the same copper phone lines used for voice.",
  },
  {
    id: "q39",
    text: "As frequency increases, the period _____.",
    options: [
      { id: "a", text: "decreases" },
      { id: "b", text: "increases" },
      { id: "c", text: "remains the same" },
      { id: "d", text: "None of the choices are correct." },
    ],
    correctOptionId: "a",
    explanation:
      "Frequency and period are reciprocals of each other (f = 1/T), so as frequency increases, period must decrease proportionally.",
  },
  {
    id: "q40",
    text: "The idea of RZ and the idea of NRZ-L are combined into the _____ scheme.",
    options: [
      { id: "a", text: "Manchester" },
      { id: "b", text: "differential Manchester" },
      { id: "c", text: "Manchester or differential Manchester" },
      { id: "d", text: "None of the choices are correct." },
    ],
    correctOptionId: "a",
    explanation:
      "Manchester encoding combines the self-synchronizing mid-bit transition from RZ (Return-to-Zero) with the two-level signaling of NRZ-L (Non-Return-to-Zero, Level), giving a scheme that both represents bit values and keeps the receiver in sync.",
  },
  {
    id: "q41",
    text: "An ARP request is normally _____.",
    options: [
      { id: "a", text: "broadcast" },
      { id: "b", text: "multicast" },
      { id: "c", text: "unicast" },
      { id: "d", text: "None of the choices are correct" },
    ],
    correctOptionId: "a",
    explanation:
      "An ARP (Address Resolution Protocol) request asks 'who has this IP address?' without knowing which device holds it, so it's sent as a broadcast to every device on the local network. The matching device then replies directly (unicast) with its MAC address.",
  },
  {
    id: "q42",
    text: "In CRC, if the dataword is 111111, the divisor 1010, and the remainder 110, what is the codeword at the receiver?",
    options: [
      { id: "a", text: "111111011" },
      { id: "b", text: "1010110" },
      { id: "c", text: "111111110" },
      { id: "d", text: "110111111" },
    ],
    correctOptionId: "c",
    explanation:
      "The CRC codeword is the dataword with the remainder appended. Here that's dataword 111111 followed by the 3-bit remainder 110, giving the 9-bit codeword 111111110.",
  },
  {
    id: "q43",
    text: "In the Ethernet, the _____ field is actually added at the physical layer and is not (formally) part of the frame.",
    options: [
      { id: "a", text: "CRC" },
      { id: "b", text: "preamble" },
      { id: "c", text: "address" },
      { id: "d", text: "SFD" },
    ],
    correctOptionId: "b",
    explanation:
      "The preamble (7 bytes of alternating 1s and 0s, followed by the 1-byte start frame delimiter) is added at the physical layer purely so the receiver's clock can synchronize with the incoming signal. Since it's a physical-layer addition rather than data carried by the frame, it isn't formally considered part of the Ethernet frame.",
  },
];
