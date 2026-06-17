import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

const questions = [
  {
    question: "My stomach hurts after eating, what should I do?",
    description:
      "Get immediate advice on pain management, possible causes, and when to see a doctor urgently.",
    tags: ["Instant Response", "Pain Relief"],
  },
  {
    question: "How can I improve my sleep quality?",
    description:
      "Get expert advice on sleep hygiene, relaxation techniques, and when to seek professional help.",
    tags: ["Sleep Hygiene", "Relaxation Techniques"],
  },
  {
    question: "What are the warning signs of diabetes?",
    description:
      "Learn about the symptoms, risk factors, and when to seek medical attention.",
    tags: ["Preventive Care", "Early Detection"],
  },
];

function WhatToAsk() {
  return (
    <section className="relative overflow-hidden py-24">
      
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-cyan-500/5" />

      
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-md">
            <MessageCircleIcon className="h-4 w-4 text-cyan-500" />
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              AI-Powered Conversations
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block">Ask About</span>

            <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Anything Health
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            From simple questions to complex concerns, our AI delivers
            expert-level guidance trained on thousands of real healthcare cases.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
    
          <div>
            <h3 className="mb-8 text-2xl font-bold">
              Common questions our AI answers
            </h3>

            <div className="space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="group">
                  <div className="rounded-[2rem] border border-border/50 bg-background/60 p-6 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-500/10">
                    <div className="flex items-start gap-4">
                    
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                        <MessageSquareIcon className="h-5 w-5 text-cyan-500" />
                      </div>

                      <div className="flex-1 space-y-3">
                        
                        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                          <p className="font-semibold text-cyan-600 dark:text-cyan-400">
                            "{item.question}"
                          </p>
                        </div>

                        
                        <div className="rounded-2xl border border-border/30 bg-muted/20 p-4">
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="relative">
            
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />

            
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/60 p-8 backdrop-blur-xl shadow-xl">
              
              <div className="absolute left-6 top-6 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-600 backdrop-blur-md dark:text-cyan-400">
                AI Assistant Online
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/confused.png"
                  alt="AI Assistant"
                  width={500}
                  height={500}
                  priority
                  className="relative z-10 h-auto w-full max-w-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;