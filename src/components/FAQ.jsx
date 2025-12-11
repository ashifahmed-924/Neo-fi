import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "What is NexoFi, and how does it work?",
    answer:
      "NexoFi is a Web3 finance platform that lets you store, manage, and grow your digital assets securely using blockchain technology. You can connect your wallet, track assets, and interact with decentralized products in one place.",
  },
  {
    id: 2,
    question: "How is blockchain related to cryptocurrency?",
    answer:
      "Blockchain is the underlying technology, while cryptocurrencies are digital assets built on top of it. The blockchain records and verifies every transaction, making crypto transfers transparent and tamper-resistant.",
  },
  {
    id: 3,
    question: "Is blockchain technology secure?",
    answer:
      "Yes. Blockchain uses cryptography and distributed consensus, meaning transactions are verified by many nodes and stored immutably, which makes altering past data extremely difficult.",
  },
  {
    id: 4,
    question: "How does blockchain enhance security?",
    answer:
      "Blockchain removes single points of failure, uses strong encryption, and keeps a transparent audit trail of all activity. This combination greatly reduces fraud and unauthorized changes.",
  },
  {
    id: 5,
    question: "Can blockchain be hacked?",
    answer:
      "While individual apps or wallets can be compromised if misused, the core blockchain itself is very difficult to hack due to decentralization and the cost of gaining majority control of the network.",
  },
  {
    id: 6,
    question: "How can I implement blockchain in my industry?",
    answer:
      "Start by identifying processes that rely on trust, verification, or manual reconciliation. Then explore use cases like supply-chain tracking, identity, payments, or tokenization that can be built on blockchain rails.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-darkBg py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Top blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[300px] md:w-[450px] lg:w-[606px] h-[200px] md:h-[300px] lg:h-[425px] rounded-[606px]"
        style={{
          background: "rgba(74, 90, 236, 0.06)",
          filter: "blur(139.9px)",
        }}
      />

      <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
        {/* FAQ pill */}
        <div 
          className="flex items-center justify-center gap-2 rounded-[24px] border border-[#2E2E2E] backdrop-blur-[20px] py-2 px-4 md:py-3 md:px-5"
        >
          <span 
            className="font-alexandria text-[12px] md:text-[14px] font-normal"
            style={{ color: '#9DFF3A', lineHeight: 'normal' }}
          >
            FAQ
          </span>
        </div>

        {/* Heading + subtitle */}
        <div className="flex flex-col items-center gap-4 md:gap-5 text-center px-4">
          <h2 
            className="font-alexandria text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-normal leading-[100%] capitalize"
            style={{ color: '#E5E5E5' }}
          >
            Get Answers To Common Questions
          </h2>

          <p 
            className="font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[140%] text-center w-full max-w-[658px]"
            style={{ color: '#999' }}
          >
            From basics to advanced topics, find everything you need to know
            right here. Let us help you simplify the process and find the
            clarity you&apos;re looking for.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-6 md:mt-8 w-full space-y-3 flex flex-col items-center">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[#2E2E2E] bg-[#060606] rounded-[4px] overflow-hidden w-full max-w-[792px]"
                style={{ minHeight: '52px' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between px-4 sm:px-5 md:px-6 text-left"
                  style={{ minHeight: '52px' }}
                >
                  <span 
                    className="font-alexandria text-[14px] sm:text-[15px] md:text-[16px] font-normal pr-2"
                    style={{ 
                      color: '#E5E5E5', 
                      lineHeight: 'normal',
                      flex: '1 0 0'
                    }}
                  >
                    {item.question}
                  </span>
                  {isOpen ? (
                    <FiMinus className="text-neoWhite w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  ) : (
                    <FiPlus className="text-neoWhite w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 md:px-6 pb-4 pt-1">
                    <p className="text-neoGray font-alexandria text-[13px] sm:text-[14px] md:text-[15px] leading-[150%]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
