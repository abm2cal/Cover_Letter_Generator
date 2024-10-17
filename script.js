// Hooks array
const hooks = [
    `With a proven track record of delivering innovative mechanical solutions in fast-paced, interdisciplinary environments, I excel at tackling ambiguous challenges. At Cummins, I resolved recurring sensor failures, saving $1.5 million by simplifying complex issues with thorough engineering analysis. My experience developing prototypes under evolving conditions fuels my passion for pushing boundaries, learning continuously, and making impactful decisions rooted in curiosity and precision.`,
    `When faced with fluid requirements and ambiguous problems, I thrive. At Cummins, I led cross-functional teams to design robust sensor solutions under ever-changing conditions, saving $1.5 million by streamlining processes and simplifying complex challenges. My passion for mechanical engineering is driven by my curiosity to innovate and the relentless pursuit of getting things right—a lot, and often. I'm excited to bring this mindset to new engineering challenges.`,
    `Having developed solutions for complex mechanical systems where requirements were constantly shifting, I understand the challenge of ambiguity. At Cummins, I engineered a resolution to sensor failures, cutting $1.5 million in warranty claims by leveraging data-driven decisions and iterative design. With a passion for hands-on innovation and continuous learning, I’m eager to bring this curiosity and efficiency-driven approach to your team, helping to simplify and accelerate product success.`
];

// Body paragraph
const body = `In my role as a Technical Project Lead at Cummins, I successfully addressed the challenge of ambiguity and evolving requirements while leading a cross-functional team. One of my key achievements was resolving persistent Particulate Matter sensor failures that had been costing the company $1.5 million in warranty claims. I developed a robust solution by crafting test protocols for thermal, vibration, and performance validation, ensuring a 30% design margin. Through this process, I collaborated closely with operations, supply chain, and manufacturing teams to ensure a seamless transition from design to field implementation.

Additionally, as a Graduate Research Assistant at the University of Washington’s Transformative Robotics Lab, I designed and prototyped an innovative 3D-printed soft robotic hand under fluid project goals. Using air-pressure control and servo-actuated tendons, I adapted the design to meet evolving functional requirements and validated the dexterous manipulation capabilities of the robotic hand. This experience honed my ability to navigate uncertainty while delivering a fully functional and tested solution.

Both experiences reflect my ability to work through complex, interdisciplinary challenges, whether by leveraging technical skills or fostering collaboration across teams—skills I am eager to bring to this position.`;

// Conclusion template
const conclusionTemplate = `I am eager to bring my expertise in mechanical design, cross-functional collaboration, and innovation to this role. The opportunity to solve complex, evolving challenges excites me, and I am confident that my skills and passion for engineering will make a meaningful impact on your team at <company>. Thank you for your consideration.`;

// Generate cover letter function
function generateCoverLetter() {
    const companyName = document.getElementById("company").value;
    
    if (!companyName) {
        alert("Please enter a company name.");
        return;
    }

    const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
    const conclusion = conclusionTemplate.replace("<company>", companyName);
    
    const coverLetter = `${randomHook}\n\n${body}\n\n${conclusion}`;
    
    document.getElementById("cover-letter").textContent = coverLetter;
}
