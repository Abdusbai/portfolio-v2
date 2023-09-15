function DownloadCv({ t }) {
  return (
    <a href={t("cvFile")} download>
      <button className="btn" id="scrollToTopButton">
        {t("downloadCv")}
      </button>
    </a>
  );
}

export default DownloadCv;
