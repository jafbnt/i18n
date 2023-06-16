import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useCallback} from "react";
import { useTranslation } from "react-i18next";
import { menuData } from "~/features/data/menuData";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function useChangeLanguage() {
  let { i18n } = useTranslation();
  return useCallback((locale: string) => {
    i18n.changeLanguage(locale);
    localStorage.setItem('locale', locale)
  }, [i18n]);
}

export default function Index() {
  let { t } = useTranslation();
  let changeLanguage = useChangeLanguage();

  return (
      <>

      <button type="button" onClick={() => changeLanguage('en')}> 
        trocar en
      </button>
      <button type="button" onClick={() => changeLanguage('es')}> 
        trocar es
      </button>

      <ul>
        {menuData.map(m =>(
          <li key={m.id}>
            {t(`${m.label}`)}
            {m.dropdown && (
              <ul>
                {m.dropdownItems?.map((s)=>(
                  <li key={s.id}>
                      {t(`${s.label}`)}
                      {s.dropdown && (
                        <ul>
                          {s.dropdownItems?.map((ss)=>(
                            <li key={ss.id}>
                              {t(`${ss.label}`)}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}            
          </li>
        ))}
      </ul>
      <h1>{t("greeting")}</h1>
      <h1>{t("language")}</h1>   
      <Link to="/language">language</Link>
      </> 
  );
}
