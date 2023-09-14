import DownloadCv from "./DownloadCv";
import Infos from "./Infos";
import PersonalInfos from "./PersonalInfos";

function Details() {
  return (
    <div class="details">
      <PersonalInfos />
      <Infos />
      <DownloadCv />
    </div>
  );
}

export default Details;
