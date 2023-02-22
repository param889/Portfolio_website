import Project from "./Project";
import loopit from "../assets/loopit.png";
import dashboard from "../assets/dashboard.png";
import chat from "../assets/chat.png";

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center py-14 px-4 sm:py-20 sm:px-6">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold mb-20">
        Here are some of my<span className="text-violet-700"> projects</span>
      </h1>

      <div className="flex flex-col space-y-14 sm:space-y-28">
        <Project
          image={loopit}
          projectName="
        Car sales project"
          languageUse="
        Html, CSS, JavaScript, Vue, Vuex"
          projectDes="
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quod,
        id doloremque minus nam quaerat esse nemo. Ex nesciunt culpa
        necessitatibus rem delectus. Sapiente laboriosam eius dolor saepe
        molestiae facere eos. Numquam, expedita? Magnam, exercitationem
        aliquam omnis eius repudiandae tempore?
        "
        />
        <Project
          image={dashboard}
          projectName="
          Dashboard"
          languageUse="
                  Html, CSS, JavaScript, Vue, Vuex"
          projectDes="
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quod,
                  id doloremque minus nam quaerat esse nemo. Ex nesciunt culpa
                  necessitatibus rem delectus. Sapiente laboriosam eius dolor saepe
                  molestiae facere eos. Numquam, expedita? Magnam, exercitationem
                  aliquam omnis eius repudiandae tempore?
                  "
        />
        <Project
          image={chat}
          projectName="
                  ChatApp"
          languageUse="
                          Html, CSS, JavaScript, React"
          projectDes="
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quod,
                          id doloremque minus nam quaerat esse nemo. Ex nesciunt culpa
                          necessitatibus rem delectus. Sapiente laboriosam eius dolor saepe
                          molestiae facere eos. Numquam, expedita? Magnam, exercitationem
                          aliquam omnis eius repudiandae tempore?
                          "
        />
      </div>
    </section>
  );
};
