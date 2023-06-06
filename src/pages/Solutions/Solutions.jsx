import { useTheme } from "../../hooks/useTheme";
import styles, { layout } from "../../constants/style.js";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SolucesIcons from "../../components/SolucesIcons.jsx";
import {
  chevronDown,
  chevronUp,
  drugs,
  econsentVector,
  groupes,
  kit,
  loupe,
  randomisationVector,
} from "../../assets/index.js";
import { useState } from "react";

const Solutions = () => {
  const { theme } = useTheme();

  const [showStates, setShowStates] = useState({
    loupe: true,
    drugs: false,
    groupes: false,
    kit: false,

    list: true,
    list2: false,
  });

  const toggleShow = (key) => {
    setShowStates((prevState) => {
      const updatedStates = {};
      Object.keys(prevState).forEach((stateKey) => {
        updatedStates[stateKey] =
          stateKey === key ? !prevState[stateKey] : false;
      });
      return updatedStates;
    });
  };

  return (
    <div className={`${theme} overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <section className={` ${styles.paddingX} ${styles.flexStart} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className={styles.heading}>Nos solutions</h2>
          <p
            className={`${styles.paragraph1} font-poppins font-semibold text-[18px] leading-[23.4px] mb-1 `}
          >
            une société adaptée à votre profil
          </p>
          <div className={`${layout.section}`}>
            <div
              id="solutionsIconsSection"
              className={` w-1/2  flex xs:flex-wrap flex-row`}
            >
              <SolucesIcons
                onClick={() => toggleShow("loupe")}
                src={loupe}
                alt={"loupe icon"}
                title={"CRO"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4 border-indigo-500 w-[250px] h-[250px] hover:border-yellow-500`}
              ></SolucesIcons>
              <SolucesIcons
                onClick={() => toggleShow("drugs")}
                src={drugs}
                alt={"laboratoire icon"}
                title={"Laboratoires"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4 border-indigo-500 w-[250px] h-[250px] hover:border-yellow-500`}
              ></SolucesIcons>
              <SolucesIcons
                onClick={() => toggleShow("groupes")}
                src={groupes}
                alt={"groupes icon"}
                title={"Groupes de recherche"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4 border-indigo-500 w-[250px] h-[250px] hover:border-yellow-500`}
              ></SolucesIcons>
              <SolucesIcons
                onClick={() => toggleShow("kit")}
                src={kit}
                alt={"kit icon"}
                title={"Institutions publiques"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4 border-indigo-500 w-[250px] h-[250px] hover:border-yellow-500`}
              ></SolucesIcons>
            </div>

            <div
              className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[700px] ${
                showStates.loupe ? "block" : "hidden"
              }`}
            >
              <p>
                De nombreux groupes d'experts médicaux, tels que des
                associations à but non lucratif, des sociétés savantes et des
                associations de médecins indépendants, mènent des études
                médicales. Malgré le parrainage de laboratoires et de
                fondations, ces groupes ont souvent des ressources limitées pour
                mener une étude clinique de bout en bout.
              </p>
              <p>
                C'est ici qu'intervient EOL©, une application de CRF
                électronique orientée vers l'investigateur, qui se révèle être
                la solution idéale pour ces organisations.
              </p>
              <p>
                <b>
                  Les avantages d'EOL© pour les groupes de recherche comprennent
                  :
                </b>
                <br />
                <br />
                <ul>
                  <li>
                    <span>👉 </span>Une solution 100% par internet
                  </li>
                  <li>Un coût forfaitaire sans surprise</li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Une interface conviviale et intuitive qui ne requiert aucune
                    formation préalable
                  </li>
                  <li>
                    <span>👉 </span>Des écrans simples et ergonomiques avec des
                    aides à la saisie
                  </li>
                  <li>
                    <span>👉 </span>Un accompagnement fort de la mise en place
                    jusqu'à la livraison finale des résultats
                  </li>
                  <li>
                    <span>👉 </span>Une solution rapidement adaptable en cours
                    d'étude, même pour des besoins spécifiques
                  </li>
                  <li>
                    <span>👉 </span>La possibilité pour chaque médecin
                    d'exporter ses propres données
                  </li>
                  <li>
                    <span>👉 </span>Un support personnalisé
                  </li>
                </ul>
              </p>
            </div>

            <div
              className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[700px] ${
                showStates.drugs ? "block" : "hidden"
              }`}
            >
              <p>
                Biotech, Startup, découvrez un outil simple et intuitif pour vos
                études cliniques : un système de gestion automatisé adapté aux
                petites équipes de R&D. Il est parfait pour les études de suivi
                Post-Marketing (PMCF) ou pour la validation de vos objets
                connectés.
              </p>
              <p>
                Nous avons développé EOL©, une solution sécurisée d'e-CRF
                éprouvée et validée, adaptable à tout type d'études et efficace
                aussi bien pour le médicament que pour les dispositifs médicaux.
              </p>
              <p>
                <b>Les avantages d'EOL© comprennent :</b>
                <br />
                <ul>
                  <li>
                    <span>👉 </span>Une mise en place simple et rapide
                  </li>
                  <li>
                    <span>👉 </span>
                    Une interface conviviale et intuitive qui ne requiert aucune
                    formation préalable
                  </li>
                  <li>
                    <span>👉 </span>Une disponibilité immédiate de vos données
                  </li>
                  <li>
                    <span>👉 </span>
                    Aucun problème lors du recueil des données par les
                    utilisateurs (Médecins, TEC...)
                  </li>
                  <li>
                    <span>👉 </span>
                    Une autonomie totale dans le suivi et l'administration de
                    votre étude
                  </li>
                  <li>
                    <span>👉 </span>
                    Un accompagnement fort de la mise en place jusqu'à la
                    livraison finale des résultats
                  </li>
                  <li>
                    <span>👉 </span>
                    Une solution rapidement adaptable en cours d'étude, même
                    pour des besoins spécifiques
                  </li>
                  <li>
                    <span>👉 </span>
                    Une solution fiable, déjà éprouvée et validée FDA CFR PART
                    11
                  </li>
                </ul>
              </p>
            </div>
            <div
              className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[700px] ${
                showStates.groupes ? "block" : "hidden"
              }`}
            >
              <p>
                De nombreuses associations, sociétés savantes et groupes de
                médecins indépendants dans le domaine médical promeuvent la
                recherche à travers des études médicales. Malgré le soutien des
                laboratoires, fondations et structures professionnelles, ces
                groupes de recherche sont souvent limités en termes de moyens
                matériels et de personnel.
              </p>
              <p>
                C'est pourquoi EOL©, une application internet orientée vers
                l'investigateur, est la solution idéale pour ce type
                d'organisation. EOL© est un CRF électronique qui facilite la
                réalisation des études cliniques.
              </p>
              <p>
                <b>Les avantages d'EOL© pour les groupes de recherche sont :</b>
                <br />
                <ul>
                  <li>
                    {" "}
                    <span>👉 </span>Une solution 100% en ligne
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>Un coût forfaitaire sans surprise
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Une interface conviviale et intuitive, ne nécessitant aucune
                    formation préalable
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Des écrans simples, ergonomiques et des aides à la saisie
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Un accompagnement solide depuis la mise en place jusqu'à la
                    livraison finale des résultats
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Une solution rapidement adaptable en cours d'étude, même
                    pour des besoins spécifiques
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    La possibilité pour chaque médecin d'exporter ses propres
                    données
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>Un support personnalisé
                  </li>
                </ul>
              </p>
            </div>
            <div
              className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[700px] ${
                showStates.kit ? "block" : "hidden"
              }`}
            >
              <p>
                Depuis sa création, MEDSHARING fournit au secteur public des
                solutions parfaitement adaptées à ses spécificités. EOL© est
                utilisé dans de très nombreuses études et registres dans des
                domaines et aires thérapeutiques variés.
              </p>
              <p>
                A ce jour, plus de 40 études ont été réalisées pour le secteur
                public, recrutant entre 300 et plus de 8000 patients dans des
                domaines comme la cancérologie, la chirurgie digestive, la
                cardiologie, et la neurologie.
              </p>
              <p>
                MEDSHARING est présent dans des CHU et unités de recherche en
                France, en Belgique et en Allemagne. Sur demande, nous pouvons
                organiser un échange avec nos clients publics pour vous
                permettre d'évaluer EOL© auprès de vos confrères.
              </p>
              <p>
                <b>Quelques études significatives :</b>
                <br />
                <ul>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Réseau national d’Etude des facteurs prédictifs et de la
                    Prévention des Morts Soudaines inattendues dans les
                    Epilepsies partielles pharmacorésistantes.
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Essai randomisé comparant le cathétérisme jugulaire interne
                    et fémoral en termes de complications iatrogènes,
                    nosocomiales et de qualité de dialyse dans l'EER en
                    réanimation.
                  </li>
                  <li>
                    {" "}
                    <span>👉 </span>
                    Comparaison lymphadénectomie pelvienne versus prélèvement
                    isolé du ganglion sentinelle dans les cancers précoces du
                    col utérin : étude multicentrique randomisée avec évaluation
                    des impacts médico-économiques.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={` ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <div>
            <h2 className={styles.heading}>L'eConsent</h2>
            <p
              className={`${styles.paragraph1} font-poppins font-semibold text-[18px] leading-[23.4px] mb-1 `}
            >
              <strong>L'eConsent</strong> est une fonctionnalité permettant à
              l'investigateur d'envoyer une demande de consentement électronique
              via l'eCRF avant d'inclure le patient dans l'étude.
            </p>
            <div className="font-poppins font-normal text-[18px] leading-[30.8px] max-w-[700px]">
              <p>
                La signature e-Consent dans EOL suit le niveau simple selon{" "}
                <strong>eIDAS</strong> et utilise le système OTP (One time
                Password).
              </p>
              <span>
                <img
                  className="cursor-pointer hover:bg-indigo-500 rounded-full p-1"
                  src={showStates.list ? chevronUp : chevronDown}
                  alt="icon arrow"
                  onClick={() => {
                    toggleShow("list");
                  }}
                />
              </span>
              <div className={`${showStates.list ? "block" : "hidden"}`}>
                <p>
                  <strong>L'eConsent</strong> peut fonctionner seul ou intégré à
                  l'eCRF, simplifiant le travail du moniteur tout en
                  garantissant la sécurité et la confidentialité des données :
                </p>
                <ul>
                  <li>
                    <span>✨ </span>
                    <strong>Respect des procédures :</strong> Un patient ne peut
                    pas être inclus avant la signature.
                  </li>
                  <li>
                    <span>✨ </span>
                    <strong>Simplicité :</strong> Un code unique lie le dossier
                    du patient au consentement.
                  </li>
                  <li>
                    <span>✨ </span>
                    <strong>Contrôle à distance :</strong> Le moniteur peut
                    contrôler la procédure sans se déplacer.
                  </li>
                  <li>
                    <span>✨ </span>
                    <strong>Confidentialité :</strong> Le moniteur n'a pas accès
                    aux données nominatives à distance.
                  </li>
                  <li>
                    <span>✨ </span>
                    <strong>Sécurité :</strong> Les données nominatives sont
                    chiffrées et les consentements sont protégés par un mot de
                    passe.
                  </li>
                  <li>
                    <span>✨ </span>
                    <strong>Traçabilité :</strong> Un audit-trail complet est
                    imprimé sur chaque document.
                  </li>
                </ul>
                <p>
                  L'eConsent est facile à utiliser et adaptable aux contraintes
                  de l'étude :
                </p>
                <ul>
                  <li>
                    <span>✨ </span>
                    Peut être utilisé en face-à-face ou à distance via SMS ou
                    e-mail.
                  </li>
                  <li>
                    <span>✨ </span>Option de signature tactile sur tablette ou
                    smartphone.
                  </li>
                  <li>
                    <span>✨ </span>Disponible sur PC ou smartphone.
                  </li>
                  <li>
                    <span>✨ </span>
                    Consentement pdf protégé par mot de passe et envoyé par
                    e-mail au médecin et au patient.
                  </li>
                  <li>
                    <span>✨ </span>
                    Option pour obtenir le consentement des parents pour les
                    mineurs.
                  </li>
                  <li>
                    <span>✨ </span>
                    Le circuit des signatures est respecté, avec la signature du
                    médecin en dernier.
                  </li>
                  <li>
                    <span>✨ </span>
                    Option mixte possible dans l'eCRF pour inclure des patients
                    avec consentement papier ou électronique.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.boxWidth}`}>
          <div className="">
            <img src={econsentVector} alt="e-consent" />
          </div>
        </div>
      </section>
      <section className={` ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <img src={randomisationVector} alt="IWRS" />
        </div>
        <div className={`${styles.boxWidth}`}>
          <div className="">
            <div>
              <h2 className={styles.heading}>
                Randomisation par internet IWRS
              </h2>
              <p
                className={`${styles.paragraph1} font-poppins font-semibold text-[18px] leading-[23.4px] mb-1 `}
              >
                <strong>EOL Random©</strong>est un outil de randomisation en
                ligne flexible, pouvant être utilisé indépendamment ou en
                association avec l'eCRF. Cet outil utilise un algorithme
                adaptatif pour s'ajuster parfaitement aux spécificités de votre
                étude.
              </p>
              <div className="font-poppins font-normal text-[18px] leading-[30.8px] max-w-[700px]">
                <p>
                  La signature e-Consent dans EOL suit le niveau simple selon{" "}
                  <strong>eIDAS</strong> et utilise le système OTP (One time
                  Password).
                </p>
                <span>
                  <img
                    className="cursor-pointer hover:bg-indigo-500 rounded-full p-1"
                    src={showStates.list2 ? chevronUp : chevronDown}
                    alt="icon arrow"
                    onClick={() => {
                      toggleShow("list2");
                    }}
                  />
                </span>
                <div className={`${showStates.list2 ? "block" : "hidden"}`}>
                  <p>
                    Grâce à son module d'administration, EOL Random© facilite la
                    gestion des comptes utilisateurs, l'ajout de nouveaux
                    centres et vous assure une autonomie totale dans la gestion
                    de vos centres.
                  </p> <br />

                  <p>Fonctionnalités Clés :</p> <br />

                  <ul>
                    <li><span>✨ </span>Randomisation en ouvert ou en aveugle</li>
                    <li><span>✨ </span>Prise en compte des stratifications</li>
                    <li><span>✨ </span>Allocation et gestion des unités de traitement</li>
                    <li><span>✨ </span>Vérification des critères d'inclusion</li>
                    <li><span>✨ </span>
                      Paramétrage de champs obligatoires avec contrôle de date
                    </li>
                    <li><span>✨ </span>Vérification avant validation par l'investigateur</li>
                    <li><span>✨ </span>
                      Signature électronique pour entériner la randomisation
                    </li>
                    <li><span>✨ </span>
                      Notification de randomisation par mail envoyée à
                      l'investigateur et à la coordination
                    </li>
                    <li><span>✨ </span>
                      Tableau de suivi avec liste des patients inclus, bras,
                      strate...
                    </li>
                    <li><span>✨ </span>Export des données de la randomisation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
