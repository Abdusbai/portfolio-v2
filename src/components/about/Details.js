import DownloadCv from "./DownloadCv";
import Infos from "./Infos";
import PersonalInfos from "./PersonalInfos";

function Details({ t }) {
  return (
    <div className="details">
      <PersonalInfos t={t} />
      <Infos t={t} />
      <DownloadCv t={t} />
    </div>
  );
}

export default Details;
