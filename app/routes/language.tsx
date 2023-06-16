import { useTranslation } from "react-i18next";

export default function () {
    let { t } = useTranslation();
  return (
    <div>
        <h1>{t("language")}</h1>      
    </div>
  );
}