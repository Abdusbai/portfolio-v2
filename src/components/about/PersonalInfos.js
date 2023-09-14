function PersonalInfos({ t }) {
  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: t("descTitle") }} />
      <p>{t("description")}</p>
    </>
  );
}

export default PersonalInfos;
