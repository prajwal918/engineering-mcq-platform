import type { QuizQuestion } from "@/types/quiz";

// Extracted verbatim from Unit1_MCQ.pdf (OS services & system calls,
// process management, and multithreading). Question/option wording is
// unchanged from the source; explanations were written to support
// Practice Mode and are not part of the original source text.
export const questions: QuizQuestion[] = [
  {
    id: "os-01",
    text: "Which of the following is NOT a service provided by an operating system?",
    options: [
      { id: "a", text: "Program execution" },
      { id: "b", text: "Error detection" },
      { id: "c", text: "Data warehousing" },
      { id: "d", text: "I/O operations" },
    ],
    correctOptionId: "c",
    explanation:
      "The operating system's core services include program execution, I/O operations, and error detection. Data warehousing is a large-scale data storage and analytics concept, not something the OS itself provides.",
  },
  {
    id: "os-02",
    text: "What does the user interface of an operating system primarily allow?",
    options: [
      { id: "a", text: "Direct access to hardware components" },
      { id: "b", text: "Communication between user and system" },
      { id: "c", text: "Compilation of programs" },
      { id: "d", text: "Direct execution of binary machine code" },
    ],
    correctOptionId: "b",
    explanation:
      "A user interface, whether CLI or GUI, exists to let the user issue commands and receive feedback from the OS. It doesn't grant direct hardware access, compile code, or run raw machine code by itself.",
  },
  {
    id: "os-03",
    text: "Which type of system call is used to terminate a process?",
    options: [
      { id: "a", text: "fork()" },
      { id: "b", text: "wait()" },
      { id: "c", text: "exit()" },
      { id: "d", text: "read()" },
    ],
    correctOptionId: "c",
    explanation:
      "exit() terminates the calling process and returns control to the OS, releasing its resources. fork() creates a new process, wait() blocks a parent until a child finishes, and read() performs input.",
  },
  {
    id: "os-04",
    text: "System services are provided by the operating system to:",
    options: [
      { id: "a", text: "Execute programs without user intervention" },
      { id: "b", text: "Manage database operations" },
      { id: "c", text: "Facilitate communication between processes" },
      { id: "d", text: "Allow direct hardware access" },
    ],
    correctOptionId: "c",
    explanation:
      "Among these options, inter-process communication is a genuine OS service that lets independent processes exchange data and coordinate — unlike managing databases or granting raw hardware access, which fall outside what an OS provides.",
  },
  {
    id: "os-05",
    text: "Which of the following is a system call used for file manipulation?",
    options: [
      { id: "a", text: "open()" },
      { id: "b", text: "malloc()" },
      { id: "c", text: "print()" },
      { id: "d", text: "shutdown()" },
    ],
    correctOptionId: "a",
    explanation:
      "open() is the system call used to access a file before a process can read from or write to it. malloc() manages heap memory rather than files, and print()/shutdown() aren't standard file-manipulation calls.",
  },
  {
    id: "os-06",
    text: "A linker is primarily used to:",
    options: [
      { id: "a", text: "Translate source code into machine code" },
      { id: "b", text: "Combine object code into a single executable" },
      { id: "c", text: "Execute programs on a CPU" },
      { id: "d", text: "Manage I/O operations" },
    ],
    correctOptionId: "b",
    explanation:
      "The linker takes one or more compiled object files, plus any needed libraries, and combines them into a single executable, resolving references between them.",
  },
  {
    id: "os-07",
    text: "What is the primary function of a loader in an operating system?",
    options: [
      { id: "a", text: "To load files from external drives" },
      { id: "b", text: "To allocate memory for programs" },
      { id: "c", text: "To load executable files into memory for execution" },
      { id: "d", text: "To translate high-level language into machine language" },
    ],
    correctOptionId: "c",
    explanation:
      "The loader takes the executable produced by the linker and brings it into main memory, setting it up so the CPU can begin executing it.",
  },
  {
    id: "os-08",
    text: "Which of the following is a type of user interface provided by an operating system?",
    options: [
      { id: "a", text: "Command Line Interface (CLI)" },
      { id: "b", text: "HTML Interface" },
      { id: "c", text: "Script Engine Interface" },
      { id: "d", text: "Media Player Interface" },
    ],
    correctOptionId: "a",
    explanation:
      "A Command Line Interface (CLI) is a recognized, text-based way of interacting with an operating system. The other options aren't standard categories of OS user interface.",
  },
  {
    id: "os-09",
    text: "Which of the following system calls is used for process control in an operating system?",
    options: [
      { id: "a", text: "shmget()" },
      { id: "b", text: "exec()" },
      { id: "c", text: "printf()" },
      { id: "d", text: "malloc()" },
    ],
    correctOptionId: "b",
    explanation:
      "exec() replaces a process's memory image with a new program, making it a classic process-control system call alongside fork() and exit().",
  },
  {
    id: "os-10",
    text: "What is the main purpose of system services in an operating system?",
    options: [
      { id: "a", text: "To enable user programs to directly interact with the hardware" },
      { id: "b", text: "To provide a layer of abstraction between user applications and the hardware" },
      { id: "c", text: "To compile user programs" },
      { id: "d", text: "To format the hard drive" },
    ],
    correctOptionId: "b",
    explanation:
      "System services sit between user applications and the hardware, giving programs a consistent, safe way to request resources without dealing with hardware details directly.",
  },
  {
    id: "os-11",
    text: "Which of the following defines a process?",
    options: [
      { id: "a", text: "A program in execution" },
      { id: "b", text: "A passive entity like a file" },
      { id: "c", text: "A memory management technique" },
      { id: "d", text: "A type of hardware" },
    ],
    correctOptionId: "a",
    explanation:
      "A process is commonly defined as a program in execution — the code plus its current activity (registers, program counter, stack) — as opposed to the program itself, which is just passive code sitting on disk.",
  },
  {
    id: "os-12",
    text: "What is the primary function of a Process Control Block (PCB)?",
    options: [
      { id: "a", text: "Manages file I/O operations" },
      { id: "b", text: "Stores information about a process" },
      { id: "c", text: "Controls memory allocation" },
      { id: "d", text: "Controls CPU scheduling" },
    ],
    correctOptionId: "b",
    explanation:
      "The Process Control Block holds the bookkeeping the OS needs for a process: its state, program counter, CPU registers, memory information, and more.",
  },
  {
    id: "os-13",
    text: "Which state does a process enter when it is waiting for an I/O operation to complete?",
    options: [
      { id: "a", text: "Ready" },
      { id: "b", text: "Waiting" },
      { id: "c", text: "Running" },
      { id: "d", text: "Terminated" },
    ],
    correctOptionId: "b",
    explanation:
      "A process moves to the Waiting (blocked) state whenever it must pause until an I/O operation or other event completes.",
  },
  {
    id: "os-14",
    text: "What is context switching in process management?",
    options: [
      { id: "a", text: "Switching from user mode to kernel mode" },
      { id: "b", text: "Saving and restoring the state of a process" },
      { id: "c", text: "Switching from one memory block to another" },
      { id: "d", text: "Changing scheduling algorithms" },
    ],
    correctOptionId: "b",
    explanation:
      "A context switch saves the CPU state of the currently running process into its PCB, then loads the saved state of the next process so execution can resume exactly where it left off later.",
  },
  {
    id: "os-15",
    text: "In which state does a process use the CPU for execution?",
    options: [
      { id: "a", text: "Ready" },
      { id: "b", text: "Running" },
      { id: "c", text: "Waiting" },
      { id: "d", text: "New" },
    ],
    correctOptionId: "b",
    explanation: "A process is in the Running state while its instructions are actively being executed by the CPU.",
  },
  {
    id: "os-16",
    text: "Which scheduling algorithm selects the process that arrives first?",
    options: [
      { id: "a", text: "First-Come, First-Served" },
      { id: "b", text: "Shortest Job First" },
      { id: "c", text: "Round Robin" },
      { id: "d", text: "Priority Scheduling" },
    ],
    correctOptionId: "a",
    explanation:
      "First-Come, First-Served schedules processes strictly in the order they arrive in the ready queue, regardless of burst time or priority.",
  },
  {
    id: "os-17",
    text: "What is the goal of process scheduling in a multiprogramming environment?",
    options: [
      { id: "a", text: "Maximizing CPU idle time" },
      { id: "b", text: "Maximizing process throughput" },
      { id: "c", text: "Minimizing process execution" },
      { id: "d", text: "Minimizing memory usage" },
    ],
    correctOptionId: "b",
    explanation:
      "In a multiprogramming system, scheduling aims to keep the CPU busy and complete as many processes as possible over time — maximizing throughput — rather than maximizing idle time or minimizing memory use.",
  },
  {
    id: "os-18",
    text: "Which of the following is a preemptive scheduling algorithm?",
    options: [
      { id: "a", text: "Shortest Job First" },
      { id: "b", text: "Round Robin" },
      { id: "c", text: "First-Come, First-Served" },
      { id: "d", text: "Priority Scheduling (non-preemptive)" },
    ],
    correctOptionId: "b",
    explanation:
      "Round Robin is preemptive because each process only runs for a fixed time quantum before being forced back into the ready queue. FCFS is non-preemptive, and the Priority Scheduling option here is explicitly marked non-preemptive.",
  },
  {
    id: "os-19",
    text: "What is the turnaround time of a process?",
    options: [
      { id: "a", text: "The total time taken by a process from submission to completion" },
      { id: "b", text: "The time spent in the ready queue" },
      { id: "c", text: "The time spent waiting for I/O" },
      { id: "d", text: "The time spent executing instructions" },
    ],
    correctOptionId: "a",
    explanation:
      "Turnaround time covers a process's full lifespan: from submission all the way through to completion, including any waiting and ready-queue time.",
  },
  {
    id: "os-20",
    text: "In Round Robin scheduling, if the time quantum is too small, the algorithm will:",
    options: [
      { id: "a", text: "Act like First-Come, First-Served" },
      { id: "b", text: "Cause high context switching overhead" },
      { id: "c", text: "Cause low CPU utilization" },
      { id: "d", text: "Minimize response time" },
    ],
    correctOptionId: "b",
    explanation:
      "When the time quantum is too small, the CPU spends a disproportionate share of its time switching between processes instead of doing useful work, driving up context-switching overhead.",
  },
  {
    id: "os-21",
    text: "Which of the following is the main objective of CPU scheduling?",
    options: [
      { id: "a", text: "Minimizing context switches" },
      { id: "b", text: "Maximizing CPU utilization" },
      { id: "c", text: "Reducing process memory usage" },
      { id: "d", text: "Minimizing process turnaround time" },
    ],
    correctOptionId: "b",
    explanation:
      "A core goal of CPU scheduling is to keep the CPU as busy as possible — maximizing utilization — while balancing that against throughput and response time.",
  },
  {
    id: "os-22",
    text: "What is a process state transition from running to waiting called?",
    options: [
      { id: "a", text: "I/O Burst" },
      { id: "b", text: "Preemption" },
      { id: "c", text: "Process Swap" },
      { id: "d", text: "Blocking" },
    ],
    correctOptionId: "d",
    explanation:
      "When a running process must wait on an event, such as I/O, it transitions into the waiting state. That transition is called blocking.",
  },
  {
    id: "os-23",
    text: "In a multiprocessor system, what is the benefit of load balancing in scheduling?",
    options: [
      { id: "a", text: "Increases the number of context switches" },
      { id: "b", text: "Ensures an even distribution of work among processors" },
      { id: "c", text: "Lowers memory consumption" },
      { id: "d", text: "Improves process priority" },
    ],
    correctOptionId: "b",
    explanation:
      "In multiprocessor scheduling, load balancing spreads ready processes evenly across CPUs so no processor sits idle while another is overloaded.",
  },
  {
    id: "os-24",
    text: "What is inter-process communication (IPC)?",
    options: [
      { id: "a", text: "The mechanism by which processes exchange data" },
      { id: "b", text: "The mechanism by which processes share the same PCB" },
      { id: "c", text: "The technique to switch between processes" },
      { id: "d", text: "A hardware interrupt signaling technique" },
    ],
    correctOptionId: "a",
    explanation:
      "Inter-process communication refers to the mechanisms — shared memory, message passing, pipes, and so on — that let separate processes exchange data and coordinate with each other.",
  },
  {
    id: "os-25",
    text: "Which of the following is an example of inter-process communication using shared memory?",
    options: [
      { id: "a", text: "Using semaphores" },
      { id: "b", text: "Using a message queue" },
      { id: "c", text: "Using pipes" },
      { id: "d", text: "Processes sharing a common memory segment" },
    ],
    correctOptionId: "d",
    explanation:
      "Shared-memory IPC works by mapping the same region of memory into multiple processes' address spaces so they can read and write it directly, without going through the kernel for every exchange.",
  },
  {
    id: "os-26",
    text: "What is the purpose of synchronization in inter-process communication?",
    options: [
      { id: "a", text: "To allocate CPU time to each process" },
      { id: "b", text: "To avoid race conditions when processes share resources" },
      { id: "c", text: "To stop processes from terminating" },
      { id: "d", text: "To allocate memory efficiently" },
    ],
    correctOptionId: "b",
    explanation:
      "Synchronization primitives such as locks and semaphores coordinate access to shared resources, preventing the race conditions that occur when concurrent processes read and write the same data unpredictably.",
  },
  {
    id: "os-27",
    text: "Which of the following IPC methods allows two processes to send messages to each other?",
    options: [
      { id: "a", text: "Shared Memory" },
      { id: "b", text: "Message Passing" },
      { id: "c", text: "Paging" },
      { id: "d", text: "Swapping" },
    ],
    correctOptionId: "b",
    explanation:
      "Message passing lets processes communicate by explicitly sending and receiving messages through the OS, without needing to share a region of memory.",
  },
  {
    id: "os-28",
    text: "In message-passing IPC, what is the key characteristic?",
    options: [
      { id: "a", text: "No shared memory between processes" },
      { id: "b", text: "Processes must share memory" },
      { id: "c", text: "It only works for I/O-bound processes" },
      { id: "d", text: "Messages cannot be stored in queues" },
    ],
    correctOptionId: "a",
    explanation:
      "Unlike shared-memory IPC, message passing doesn't require processes to share an address space — the OS handles delivering messages between them directly.",
  },
  {
    id: "os-29",
    text: "What is a critical section in inter-process communication?",
    options: [
      { id: "a", text: "A section of code where processes access shared resources" },
      { id: "b", text: "The main program code executed by the OS" },
      { id: "c", text: "A memory segment allocated to one process" },
      { id: "d", text: "A function that executes I/O operations" },
    ],
    correctOptionId: "a",
    explanation:
      "A critical section is the part of a process's code that accesses shared data. Only one process should execute in its critical section for a given resource at a time, to prevent race conditions.",
  },
  {
    id: "os-30",
    text: "Which of the following is the purpose of a semaphore in IPC?",
    options: [
      { id: "a", text: "To signal process termination" },
      { id: "b", text: "To synchronize access to shared resources" },
      { id: "c", text: "To allocate memory to processes" },
      { id: "d", text: "To increase CPU utilization" },
    ],
    correctOptionId: "b",
    explanation:
      "A semaphore is a synchronization variable used to control access to shared resources, commonly used to implement mutual exclusion and coordinate cooperating processes.",
  },
  {
    id: "os-31",
    text: "Which of the following multithreading model maps many user threads to one kernel thread?",
    options: [
      { id: "a", text: "Many-to-One" },
      { id: "b", text: "One-to-One" },
      { id: "c", text: "Many-to-Many" },
      { id: "d", text: "Two-Level Model" },
    ],
    correctOptionId: "a",
    explanation:
      "In the Many-to-One model, many user-level threads are mapped onto a single kernel thread, so most thread management happens in user space rather than in the kernel.",
  },
  {
    id: "os-32",
    text: "In the One-to-One multithreading model, how are user threads mapped to kernel threads?",
    options: [
      { id: "a", text: "One user thread maps to many kernel threads" },
      { id: "b", text: "One user thread maps to one kernel thread" },
      { id: "c", text: "Many user threads map to one kernel thread" },
      { id: "d", text: "Many user threads map to many kernel threads" },
    ],
    correctOptionId: "b",
    explanation:
      "The One-to-One model gives each user thread its own kernel thread. This allows true parallelism, at the cost of the overhead of creating a kernel thread for every user thread.",
  },
  {
    id: "os-33",
    text: "What is a disadvantage of the Many-to-One multithreading model?",
    options: [
      { id: "a", text: "It uses too many kernel threads" },
      { id: "b", text: "A blocking call in one thread can block the entire process" },
      { id: "c", text: "It increases the overhead of context switching" },
      { id: "d", text: "It cannot support concurrency" },
    ],
    correctOptionId: "b",
    explanation:
      "Because all user threads share a single kernel thread in the Many-to-One model, a blocking system call made by any one of them blocks the entire process.",
  },
  {
    id: "os-34",
    text: "Which multithreading model allows multiple user threads to be mapped to multiple kernel threads?",
    options: [
      { id: "a", text: "Many-to-One" },
      { id: "b", text: "One-to-One" },
      { id: "c", text: "Many-to-Many" },
      { id: "d", text: "Single-to-Many" },
    ],
    correctOptionId: "c",
    explanation:
      "The Many-to-Many model multiplexes many user threads onto a smaller or equal number of kernel threads, combining the flexibility of user-level threads with real parallelism.",
  },
  {
    id: "os-35",
    text: "In the Two-Level Model, what can user-level threads do that kernel-level threads cannot?",
    options: [
      { id: "a", text: "Make system calls" },
      { id: "b", text: "Be created faster and with less overhead" },
      { id: "c", text: "Execute in the kernel mode" },
      { id: "d", text: "Access hardware directly" },
    ],
    correctOptionId: "b",
    explanation:
      "User-level threads can be created and managed without kernel involvement, which makes them cheaper and faster to create than kernel-level threads.",
  },
  {
    id: "os-36",
    text: "In which multithreading model does the operating system create a separate kernel thread for each user thread?",
    options: [
      { id: "a", text: "Many-to-One" },
      { id: "b", text: "One-to-One" },
      { id: "c", text: "Many-to-Many" },
      { id: "d", text: "Two-Level" },
    ],
    correctOptionId: "b",
    explanation:
      "This is the defining trait of the One-to-One model: the OS creates one dedicated kernel thread for every user thread that's requested.",
  },
  {
    id: "os-37",
    text: "What is a disadvantage of user-level threads?",
    options: [
      { id: "a", text: "They are slower to create than kernel-level threads" },
      { id: "b", text: "They require system calls for thread management" },
      { id: "c", text: "They cannot leverage multiprocessor systems efficiently" },
      { id: "d", text: "They can only be scheduled preemptively" },
    ],
    correctOptionId: "c",
    explanation:
      "Because the kernel isn't aware of individual user-level threads, it can't schedule them across multiple CPUs the way it can with kernel-level threads, which limits true parallelism.",
  },
  {
    id: "os-38",
    text: "What happens when a thread makes a blocking system call in a Many-to-One multithreading model?",
    options: [
      { id: "a", text: "Only the calling thread is blocked" },
      { id: "b", text: "The entire process is blocked" },
      { id: "c", text: "The OS creates a new thread to handle it" },
      { id: "d", text: "The thread continues execution" },
    ],
    correctOptionId: "b",
    explanation:
      "Since the kernel only sees a single underlying kernel thread in this model, a blocking call from any one user thread stalls the whole process.",
  },
  {
    id: "os-39",
    text: "What is the primary purpose of thread affinity in thread scheduling?",
    options: [
      { id: "a", text: "To bind a thread to a specific processor" },
      { id: "b", text: "To allow a thread to change priority" },
      { id: "c", text: "To enable a thread to move across processors" },
      { id: "d", text: "To lower the overhead of thread creation" },
    ],
    correctOptionId: "a",
    explanation:
      "Thread affinity ties a thread to a particular CPU or core, which can improve performance by keeping the thread's data warm in that processor's cache.",
  },
  {
    id: "os-40",
    text: "In thread scheduling, what is the main difference between user-level and kernel-level threads?",
    options: [
      { id: "a", text: "User-level threads are managed by the OS" },
      { id: "b", text: "Kernel-level threads have higher priority" },
      { id: "c", text: "User-level threads are managed without OS intervention" },
      { id: "d", text: "Kernel-level threads are slower to create and manage" },
    ],
    correctOptionId: "c",
    explanation:
      "User-level threads are created, scheduled, and managed entirely by a user-space thread library, while kernel-level threads are managed directly by the operating system.",
  },
  {
    id: "os-41",
    text: "What is the primary purpose of system calls in an operating system?",
    options: [
      { id: "a", text: "To design GUI of Operating System" },
      { id: "b", text: "To provide an interface for user-level applications to access OS services" },
      { id: "c", text: "To compile programs" },
      { id: "d", text: "To encrypt data" },
    ],
    correctOptionId: "b",
    explanation:
      "System calls are the controlled entry points that let user-level applications request services — file access, process control, and more — from the kernel.",
  },
  {
    id: "os-42",
    text: "In which state does a process wait for an event to occur?",
    options: [
      { id: "a", text: "Ready" },
      { id: "b", text: "Running" },
      { id: "c", text: "Waiting" },
      { id: "d", text: "New" },
    ],
    correctOptionId: "c",
    explanation:
      "A process enters the Waiting state whenever it needs to pause until some event, such as the completion of I/O, occurs.",
  },
  {
    id: "os-43",
    text: "The model in which one user-level thread is mapped to many kernel level threads is called ________.",
    options: [
      { id: "a", text: "Many to One model" },
      { id: "b", text: "One to Many model" },
      { id: "c", text: "Many to Many model" },
      { id: "d", text: "One to One model" },
    ],
    correctOptionId: "b",
    explanation:
      "This describes the reverse relationship of the Many-to-One model: a single user-level thread associated with multiple kernel-level threads.",
  },
  {
    id: "os-44",
    text: "Which scheduling algorithm assigns a fixed time slice to each process?",
    options: [
      { id: "a", text: "First-Come, First-Served" },
      { id: "b", text: "Shortest Job First" },
      { id: "c", text: "Round Robin" },
      { id: "d", text: "Priority Scheduling" },
    ],
    correctOptionId: "c",
    explanation:
      "Round Robin scheduling gives each process a fixed time slice (quantum) before moving on to the next process in the ready queue, which is what makes it both fair and preemptive.",
  },
];

export default questions;
