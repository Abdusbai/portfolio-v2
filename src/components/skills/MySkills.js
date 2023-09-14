import BackEnd from "./BackEnd";
import DataBase from "./DataBase";
import FrontEnd from "./FrontEnd";
import Tools from "./Tools";

function MySkills({ t }) {
  return (
    <div className="section-content-skills">
      <FrontEnd />
      <BackEnd />
      <DataBase t={t} />
      <Tools t={t} />
    </div>
  );
}

export default MySkills;
