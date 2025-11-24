import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Me</h1>

      <div className="flex items-start gap-6">
        {/* Image */}
        <img
          src="./src/assets/Edith.jpg"
          alt="Edith's picture"
          className="w-40 h-40 rounded-full"
        />

        {/* All text next to the image */}
        <div>
          <h2 className="mb-2">Hi, I'm Edith.</h2>
          <p className="mb-2">I'm a software developer with a passion for creating web applications.</p>
          <p className="mb-2">I enjoy learning new technologies and improving my skills.</p>
          <p>In my free time, I like to read, travel, draw, and explore nature.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
