import privacyVector from "../../assets/images/privacyVector.svg";
import BadgeRounded from "../../components/badges/BadgeRounded.jsx";

import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import SectionParagraph from "../../components/texts/SectionParagraph.jsx";
import SectionTitle from "../../components/texts/SectionTitle.jsx";
import styles, { layout } from "../../constants/style.js";
import { useTheme } from "../../hooks/useTheme.jsx";

import validDoc from "../../assets/images/validDoc.png";
import cookies from "../../assets/images/cookies.svg";
import serviceAgreement from "../../assets/images/serviceAgreement.png";
import drone from "../../assets/images/drone.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Legacy = () => {
  const { theme } = useTheme();

  const [selectedBadge, setSelectedBadge] = useState("1");

  const handleBadgeClick = (badgeName) => {
    setSelectedBadge(badgeName);
  };

  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <SectionTitle size={"50%"}>Politique de confidentialité</SectionTitle>
          <div className={`${layout.section} justify-between`}>
            <div className="content flex flex-col align-center">
              <BadgeRounded
                src={validDoc}
                content={"RESPECT DE LA VIE PRIVEE"}
                onClick={() => handleBadgeClick("1")}
              />
              <BadgeRounded
                src={validDoc}
                content={"CREDIT"}
                onClick={() => handleBadgeClick("2")}
              />
              <BadgeRounded
                src={drone}
                content={"HEBERGEMENT"}
                onClick={() => handleBadgeClick("3")}
              />
              <BadgeRounded
                src={validDoc}
                content={"DROITS ET DEVOIRS DE L'UTILISATEUR"}
                onClick={() => handleBadgeClick("4")}
              />
              <BadgeRounded
                src={cookies}
                content={"DROIT D'AUTEUR"}
                onClick={() => handleBadgeClick("5")}
              />
              <BadgeRounded
                src={serviceAgreement}
                content={"LIENS HYPERTEXTES VERS CE SITE"}
                onClick={() => handleBadgeClick("6")}
              />
            </div>
            <div className="paragraphes mx-5">
              {selectedBadge === "1" && (
                <SectionParagraph
                  bold={"1. RESPECT DE LA VIE PRIVEE"}
                  content={`L'utilisateur est informé que les renseignements qu'il communique par le biais des formulaires présents sur le site sont nécessaires pour répondre à sa demande. Ils sont destinés exclusivement au site de MEDSHARING qui s'engage à ne pas les transmettre à des tiers. Aucune liste n'est créée ni diffusée ou revendue par MEDSHARING.`}
                ></SectionParagraph>
              )}
              {selectedBadge === "2" && (
                <SectionParagraph bold={"2. CREDIT"}>
                  Design et conception du site : Neuro-graph Développement et
                  réalisation de sites internet. Présentation de visites
                  virtuelles en ligne, conception d&apos;identités visuelles,
                  etc.
                  <Link to={"tel:+33(0)148226273"}>
                    {" "}
                    <br /> Téléphone : <b>+33 (0)1 48 22 62 73</b> 
                  </Link>{" "}
                  <br />
                  <Link to={"https://www.neuro-graph.com"}>
                    contact : <b>www.neuro-graph.com</b> 
                  </Link>
                </SectionParagraph>
              )}
              {selectedBadge === "3" && (
                <SectionParagraph bold={"3. HEBERGEMENT"}>
                  INFOMANIAK NETWORK SA 26, avenue de la Praille - 1227 Carouge
                  / Genève - SUISSE
                  <Link to={"tel:0970444611"}>
                    {" "}
                    <br /> Téléphone : <b>0970 444 611</b> (appel à tarif local)
                  </Link>{" "}
                  <Link to={"tel:+41228203546"}>
                    {" "}
                    <br /> Téléphone : <b>+41 22 820 35 46</b> (n°international)
                  </Link>{" "}
                  <br />
                  <Link to={"https://www.infomaniak.com"}>
                    contact : <b>www.infomaniak.com</b>
                  </Link>
                </SectionParagraph>
              )}
              {selectedBadge === "4" && (
                <SectionParagraph
                  bold={"4. DROITS ET DEVOIRS DE L'UTILISATEUR"}
                >
                  En conformité avec les dispositions de la loi du 6 janvier
                  1978 modifiée relative à l&apos;informatique, aux fichiers et
                  aux libertés, le traitement automatisé de données nominatives
                  réalisé à partir de ce site web a fait l&apos;objet d&apos;une
                  déclaration auprès de la Commission Nationale de
                  l&apos;Informatique et des Libertés (CNIL). L&apos;utilisateur
                  est notamment informé, conformément à cette loi, que les
                  informations qu&apos;il communique par le biais des
                  formulaires présents sur le site sont nécessaires pour
                  répondre à sa demande, et sont destinées à MEDSHARING,
                  responsable du traitement. L&apos;utilisateur est informé
                  qu&apos;il dispose d&apos;un droit d&apos;accès, de
                  rectification et de suppression portant sur les données le
                  concernant auprès de MEDSHARING, par l&apos;intermédiaire du
                  formulaire de contact du site. L&apos;utilisateur est informé
                  que, lors de ses visites sur le site, un cookie peut
                  s&apos;installer automatiquement sur son logiciel de
                  navigation. Le cookie est un bloc de données qui ne permet pas
                  de l&apos;identifier mais qui sert à enregistrer des
                  informations relatives à la navigation de celui-ci sur le
                  site. Le paramétrage du logiciel de navigation permet
                  d&apos;informer de la présence d&apos;un cookie, et notamment
                  de la refuser. L&apos;utilisateur du présent site reconnaît
                  disposer de la compétence et des moyens nécessaires pour
                  accéder à ce site. Il reconnaît également avoir vérifié que la
                  configuration informatique utilisée ne contient aucun virus et
                  qu&apos;elle est en parfait état de fonctionnement.
                </SectionParagraph>
              )}
              {selectedBadge === "5" && (
                <SectionParagraph bold={"5. DROIT D'AUTEUR"}>
                  En application du Code français de la propriété intellectuelle
                  (article L. 122-4) et, plus généralement, des traités et
                  accords internationaux comportant des dispositions relatives à
                  la protection des droits d&apos;auteurs, vous vous interdirez
                  de reproduire, pour un usage autre que privé, mais aussi de
                  vendre, distribuer, émettre, diffuser, adapter, modifier,
                  publier, communiquer intégralement ou partiellement, sous
                  quelque forme que ce soit, les données, la présentation ou
                  l&apos;organisation du site sans l&pos;autorisation écrite
                  préalable de MEDSHARING. Cette interdiction s’étend notamment,
                  sans que cette liste ne soit limitative, aux logos, images,
                  photos, graphismes, de quelque nature qu’ils soient. Toute
                  violation de cette interdiction expose le contrevenant aux
                  peines pénales et civiles prévues par la loi.
                </SectionParagraph>
              )}

              {selectedBadge === "6" && (
                <SectionParagraph bold={"6. LIENS HYPERTEXTES VERS CE SITE"}>
                  A l&apos;exception de sites diffusant des informations et/ou
                  contenus ayant un caractère illégal et/ou à caractère
                  politique, religieux, pornographique ou xénophobe, vous pouvez
                  créer sur votre site internet, un lien hypertexte vers le site
                  MEDSHARING. La mise en place de liens hypertextes n’autorise
                  en aucune façon la reproduction d’éléments du site ou la
                  présentation sur des sites tiers d’éléments du site sous forme
                  de <i>Frame</i> ou système apparenté. EN SAVOIR PLUS nous
                  contacter icone flux RSS icone Demande de devis +33 (0)1 48 75
                  39 14 par mail Raison sociale et dénomination MEDSHARING 44
                  rue Roger Salengro 94120 Fontenay Sous Bois France
                </SectionParagraph>
              )}
            </div>
            <img src={privacyVector} alt="icon privacy" />
          </div>
          <div className={layout.section}></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Legacy;
