import DownloadCv from "./DownloadCv";
import Infos from "./Infos";
import PersonalInfos from "./PersonalInfos";

function Details() {
  return (
    <div className="details">
      <PersonalInfos />
      <Infos />
      <DownloadCv />
    </div>
  );
}

export default Details;
