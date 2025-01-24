import React from 'react';
import heroImg from '../../assets/bangkit.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-blue2 py-16">
      <div className="flex flex-col items-center justify-center space-y-10 w-[50%] mx-auto">
        <h1 className="text-4xl font-serif text-center">A Little Bit About Me</h1>
        <div className="rounded-full w-32 h-32 overflow-hidden shadow-2xl">
          <img src={heroImg} alt="Hero Illustration" className="w-full h-full object-cover" />
        </div>
        <p className="text-center font-serif text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aliquid, ipsa ex corrupti sed aut obcaecati cumque. Tempore perspiciatis nesciunt dignissimos voluptas autem suscipit, natus modi fugiat. Officia sint ipsum
          consequatur, similique quis iure excepturi temporibus a! Quae illo perspiciatis deleniti pariatur iste laudantium quo accusantium fuga repellat, recusandae dolore debitis aliquam mollitia? Quos debitis dolorum pariatur hic
          inventore laboriosam odio, sed nihil corrupti possimus, impedit qui reprehenderit earum cupiditate ad minus ipsam! Recusandae, facilis pariatur! Hic, perspiciatis sequi. Aperiam odio similique minima tempore, aliquid dolorem earum
          nihil voluptatem inventore magni? Quam dolor cumque numquam placeat fugit! Veniam, maiores quos!
        </p>
        <div className="border-2 border-black rounded-md p-2 font-semibold bg-light1 hover:bg-light1/60 transform duration-500 hover:scale-110">
          <a href="#">Check Out My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
