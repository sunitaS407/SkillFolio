import { useState } from "react";

const faqs = [
  {
    question: "Why should I use SkillFolio?",
    answer: [
      "SkillFolio is your all-in-one platform to build professional resumes and showcase your skills effectively.",
      "Easy-to-use interface for quick resume creation",
      "ATS-friendly templates that recruiters love",
      "Option to customize resumes for different jobs",
      "Completely free with premium add-ons",
    ],
  },
  {
    question: "Why do I need a resume builder's help to create a resume?",
    answer: [
      "It saves your valuable time with ready-to-use templates.",
      "Ensures your resume follows professional formatting.",
      "Highlights your key strengths effectively.",
    ],
  },
  {
    question: "How can SkillFolio increase my chances to get an interview?",
    answer: [
      "Provides ATS-friendly resumes recruiters prefer.",
      "Helps you tailor resumes for each job application.",
      "Makes your profile stand out in competitive job markets.",
    ],
  },
  {
    question: "Is SkillFolio Free?",
    answer: [
      "Yes, it has a completely free plan.",
      "Premium plans are also available for more features.",
      "You can upgrade anytime for advanced options.",
    ],
  },
  {
    question: "How can I create an account on SkillFolio?",
    answer: [
      "Click on the Sign Up button on the homepage.",
      "Fill in your details such as name, email, and password.",
      "Start building and customizing your resume instantly.",
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-4 py-16" id="faq">
      <h2 className="text-center text-3xl font-bold mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl shadow">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                <div className="space-y-2">
                  {faq.answer.map((point, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <span className="text-green-600">✔</span> {point}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-10 text-center">
        <p className="text-gray-700 font-medium">
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-blue-600 hover:underline font-semibold"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
