import { truncateText } from "@utils/helpers.js";

function About() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mt-5 flex flex-col">
          <h1 className="text-bold">{truncateText("This is Javascript")}</h1>
          About Page
        </div>
      </div>
    </>
  );
}

export default About;
