import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-indigo-600">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number>(0);

  const faqs = [
    {
      question: "What makes Brainly different from other note-taking apps?",
      answer: "Unlike traditional note-taking apps, Brainly focuses on connections between ideas. It automatically suggests relationships between your notes, helping you build a network of knowledge that mirrors how your brain naturally works. Think of it as a personal knowledge graph rather than just a collection of notes."
    },
    {
      question: "Can I import my notes from other apps?",
      answer: "Yes! Brainly supports importing from Evernote, Notion, Roam Research, and plain text files. Our smart import tool will even attempt to establish connections between your imported notes based on content similarity and references."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use end-to-end encryption to ensure that only you can access your notes. Your data is never analyzed for advertising purposes, and we don't sell your information to third parties. You can also export all your data at any time."
    },
    {
      question: "Can I use Brainly offline?",
      answer: "Yes, our desktop and mobile apps work offline. Any changes you make will sync automatically when you reconnect to the internet. This makes Brainly perfect for capturing ideas anywhere, even without an internet connection."
    },
    {
      question: "How does the connection feature work?",
      answer: "Brainly uses a combination of natural language processing and your own input to establish connections. When you create or edit a note, Brainly suggests potential connections based on similar content, shared tags, or explicit references. You can also manually create connections between any two notes."
    },
    {
      question: "Can I collaborate with others in Brainly?",
      answer: "Collaboration features are available on our Team plan. You can create shared workspaces, collaborate on notes in real-time, and build team knowledge graphs. Each team member can also maintain their private notes alongside collaborative ones."
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(index === openItem ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Brainly. Can't find the answer you're looking for? <a href="#" className="text-indigo-600 hover:underline">Contact our support team</a>.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto rounded-xl bg-white shadow-sm border border-gray-100 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openItem}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;