import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">

        <motion.img
          src="/profile.jpeg"
          alt="Ayush"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-blue-500 object-cover shadow-lg"
        />

        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Ayush Sahu
        </motion.h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          Future Software Engineer | Java + DSA
        </p>

        <a 
          href="https://drive.google.com/file/d/1IPGkvJmTxNBcPiGplBbzWMoDH2s_Z2SP/preview"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg hover:opacity-90 transition shadow-lg"
        >
          View Resume
        </a>

      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-300">
          I am a Computer Science student focused on Java and Data Structures & Algorithms.
          I enjoy solving problems and building efficient solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            {title:"Technical", text:"React, Tailwind, JavaScript, Python, C++, Node.js"},
            {title:"Tools", text:"Git, GitHub, Vite, PowerShell, MySQL"},
            {title:"Concepts", text:"DSA, OOPs, DBMS, Networking, Cybersecurity"},
            {title:"Soft Skills", text:"Communication, Teamwork, Problem Solving"}
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition">
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Java Banking System</h3>
            <p className="text-gray-300 text-sm">
              Console-based banking system with account and transaction features.
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-300 text-sm">
              Modern portfolio built using React and Tailwind CSS.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-xl">

            <h3 className="text-xl font-semibold mb-2">
              Cybersecurity Virtual Internship – Cisco Networking Academy
            </h3>

            <p className="text-gray-300 mb-2">
              AICTE-backed internship focused on cybersecurity fundamentals.
            </p>

            <ul className="text-gray-300 text-sm list-disc pl-5">
              <li>Learned cybersecurity concepts and threat analysis</li>
              <li>Worked on real-world scenarios</li>
              <li>Explored secure networking techniques</li>
            </ul>

            <p className="text-sm text-gray-400 mt-3">
              June – August 2025 • Online
            </p>

            <a 
              href="https://drive.google.com/file/d/1rsfE50C9VyHiJY2D5IgHM3S41vnwIelK/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg"
            >
              View Certificate
            </a>

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {[
            {title:"Ethical Hacking (NPTEL)", id:"15lhJUcIgf91w3MFNsNqDuexxqYCX4EEU"},
            {title:"Cryptography & Network Security", id:"1F_JiF6L6jsnNm7AWCyGap4sfrnYwnRRn"},
            {title:"TCS iON Career Edge – Young Professional", id:"1bKKGrBf8RnBUUAffdDCDHf-khMLIM5IP"},
            {title:"Cyber Security & Ethical Hacking (BECIL)", id:"13IqS927QNisJ6v0XPBPWJwwiH5RQm1Ts"},
            {title:"Cybersecurity Essentials (Cisco)", id:"1zvHReaAB5McOmL93geFt3W-KKLDLczQo"}
          ].map((cert, i) => (
            <a key={i}
              href={`https://drive.google.com/file/d/${cert.id}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400 mt-2">Click to view certificate</p>
            </a>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Contact
        </h2>

        <div className="flex justify-center gap-6 text-3xl">

          <a href="ayushsahurajmarg@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
          <a href="https://github.com/Ayush-7649" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ayushsahu28/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://x.com/Ayushsahu7649" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400">
        © 2026 Ayush Sahu
      </footer>

    </div>
  )
}

export default App