function DownloadCv({ t }) {
  return (
    <a href="./files/SBAI ABDESSAMAD - CV.pdf" download>
      <button className="btn" id="scrollToTopButton">
        {t("downloadCv")}
      </button>
    </a>
  );
}

export default DownloadCv;
