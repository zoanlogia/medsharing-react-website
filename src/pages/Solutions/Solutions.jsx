import { useTheme } from "../../hooks/useTheme";
import styles, { layout } from "../../constants/style.js";
import {Navbar, Footer, SolucesIcons, SectionTitle, Button, CardText} from "../../components/index";

import { 
  drugs,
  groupes,
  kit,
  loupe,
} from "../../assets/index.js";
import { useState } from "react";
import { Link } from "react-router-dom";


const Solutions = () => {
  const { theme } = useTheme();

  const [showStates, setShowStates] = useState({
    loupe: true,
    drugs: false,
    groupes: false,
    kit: false,
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
      {/* <div class="blobImgSolutionsRight xs:hidden md:block"></div> */}
      <div className="white__gradient left-0 bottom-[60%] w-[40%] h-[40%] absolute xxs:hidden md:block"></div>
      <section
        className={` ${styles.paddingX} ${styles.flexStart} ${styles.paddingY}`}
      >
        <div className={`${styles.boxWidth}`}>
          <SectionTitle>Nos solutions</SectionTitle>
          <div className={`flex flex-wrap flex-row justify-center mt-10`}>
            <div id="solutionsIconsSection" className="flex flex-wrap flex-row justify-center">
              <SolucesIcons
                onClick={() => toggleShow("loupe")}
                src={loupe}
                alt={"loupe icon"}
                title={"ePro"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4  w-[250px] h-[250px] hover:border-white border-third`}
              ></SolucesIcons>
              <SolucesIcons
                onClick={() => toggleShow("drugs")}
                src={drugs}
                alt={"laboratoire icon"}
                title={"eConsent"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4  w-[250px] h-[250px] hover:border-white border-third`}
              ></SolucesIcons>
              <SolucesIcons
                onClick={() => toggleShow("groupes")}
                src={groupes}
                alt={"groupes icon"}
                title={"eCRF"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4  w-[250px] h-[250px] hover:border-white border-third`}
              ></SolucesIcons>
              <SolucesIcons
                onClick={() => toggleShow("kit")}
                src={kit}
                alt={"kit icon"}
                title={"Randomisation"}
                className={`m-2 cursor-pointer ${styles.flexCenter} flex-col  bg-black-gradient-2 rounded-[20px] box-shadow p-2 text-center border-r-4 border-b-4  w-[250px] h-[250px] hover:border-white border-third`}
              ></SolucesIcons>
            </div>
            <div className={`${layout.section}`}>
              <div
                className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[800px] xs:mt-10 ${
                  showStates.loupe ? "block" : "hidden"
                }`}
              >
                <CardText>
                  <h2>
                    🏆 Transformez vos études cliniques avec notre solution{" "}
                    <b>eCRF et ePRO</b>
                  </h2>
                  <br />
                  <p>
                    Découvrez l&apos;avenir des études cliniques avec notre logiciel
                    unique conçu pour l&apos;<b>eCRF</b> et <b>l&apos;ePRO</b>. Grâce à
                    son <strong>ergonomie simplifiée</strong>, des{" "}
                    <strong>images interactives</strong>, et des{" "}
                    <strong>fenêtres pop-up contextuelles</strong>, nous vous
                    offrons une expérience utilisateur sans précédent, rendant
                    les processus complexes simples et intuitifs.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Formation minimale, Adhésion maximale</h2>
                  <br />
                  <p>
                    Nous avons réduit la{" "}
                    <strong>
                      formation nécessaire pour l&apos;utilisateur final
                    </strong>{" "}
                    à son strict minimum, rendant ainsi notre logiciel facile à
                    apprendre et à utiliser. Cette approche facilite l&apos;adhésion
                    des investigateurs et des patients, augmentant ainsi
                    l&apos;efficacité de vos études.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Accessibilité et Contrôle des coûts</h2>
                  <br />
                  <p>
                    Notre politique de{" "}
                    <strong>nombre illimité d&apos;utilisateurs finaux</strong>{" "}
                    inclus dans le prix de la licence vous permet de garder le
                    contrôle total de vos coûts, tout en bénéficiant d&apos;une
                    accessibilité sans restriction.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Responsive Design</h2>
                  <br />
                  <p>
                    Notre logiciel est conçu avec une approche{" "}
                    <strong>responsive</strong>, s&apos;adaptant parfaitement à tous
                    les appareils - ordinateurs, tablettes, et smartphones.
                    Ainsi, vous et votre équipe pouvez accéder à vos études à
                    tout moment, où que vous soyez.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Flexibilité inégalée</h2>
                  <p>
                    Notre solution vous permet d&apos;apporter des{" "}
                    <strong>amendements en temps réel</strong> pendant vos
                    études, comme l&apos;ajout d&apos;une page de CRF, vous donnant ainsi
                    la liberté de vous adapter aux changements et aux imprévus.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Expérience et Confiance</h2>
                  <br />
                  <p>
                    Avec plus de 80 études observationnelles réalisées depuis
                    2010, en France et à l&apos;étranger, vous pouvez nous faire
                    confiance pour votre prochaine étude clinique. Notre
                    expérience et notre expertise font de nous un partenaire de
                    confiance dans le domaine.
                  </p>
                </CardText>
              </div>

              <div
                className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[800px] xs:mt-10 ${
                  showStates.drugs ? "block" : "hidden"
                }`}
              >
                <CardText>
                  <h2>
                    🏆 Découvrez l&apos;eConsent : votre solution pour un
                    consentement électronique simplifié et sécurisé
                  </h2>
                  <br />
                  <p>
                    L&APOS;<strong>eConsent</strong> est un outil essentiel qui
                    permet au médecin investigateur d&apos;envoyer directement une
                    demande de consentement via l&apos;eCRF avant d&apos;inclure son
                    patient dans l&apos;étude. Cette technologie moderne et pratique
                    révolutionne le processus de consentement dans les études
                    cliniques.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Signature sécurisée</h2>
                  <br />
                  <p>
                    La signature e-Consent dans EOL est basée sur une signature
                    dite « de niveau simple » selon eIDAS (règlement n°
                    910/2014/UE, adopté le 23 juillet 2014) et utilise le
                    système OTP (One time Password). Ces fonctionnalités
                    garantissent la <strong>sécurité</strong> et l&apos;
                    <strong>authenticité</strong> de chaque signature.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Simplification du travail du moniteur</h2>
                  <br />
                  <p>
                    Que vous l&apos;utilisiez seul ou intégré à l&apos;eCRF, l&apos;eConsent
                    est conçu pour simplifier le travail du moniteur tout en
                    garantissant la <strong>sécurité</strong> et la{" "}
                    <strong>confidentialité</strong> des données. De plus, il
                    offre une flexibilité accrue avec des options de
                    consentement en face-à-face ou à distance par signature SMS
                    ou Mail.
                  </p>
                </CardText>

                <CardText>
                  <h3>🏆 Principaux avantages de l&apos;eConsent :</h3>
                  <br />

                  <ul>
                    <li>
                      👉 <strong>Respect des procédures :</strong> Il est
                      impossible d&apos;inclure un patient avant la signature du
                      consentement.
                    </li>
                    <li>
                      👉 <strong>Simplicité :</strong> Un code unique permet de
                      relier le dossier du patient au consentement.
                    </li>
                    <li>
                      👉 <strong>Contrôle à distance :</strong> Le moniteur peut
                      vérifier la procédure sans se déplacer sur le centre.
                    </li>
                    <li>
                      👉 <strong>Confidentialité :</strong> A distance, le
                      moniteur n&apos;a pas accès aux données nominatives.
                    </li>
                    <li>
                      👉 <strong>Sécurité :</strong> Les données nominatives
                      sont encryptées. Les consentements sont protégés par mot
                      de passe.
                    </li>
                    <li>
                      👉 <strong>Traçabilité :</strong> Un audit-trail complet
                      de la procédure est imprimé sur chaque document.
                    </li>
                  </ul>
                </CardText>

                <CardText>
                  <h2>🏆 Adapté à vos contraintes</h2>
                  <br />
                  <p>
                    L&APOS;eConsent a été conçu pour s&apos;adapter à toutes les
                    contraintes de votre étude. Il est{" "}
                    <strong>responsive</strong>, disponible indifféremment sur
                    PC ou smartphone, et offre une option de signature tactile
                    sur tablette ou smartphone. De plus, il respecte le circuit
                    des signatures, avec la signature du médecin en dernier, et
                    permet l&apos;obtention du consentement des parents dans le cas
                    d&apos;enfants mineurs.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 eCRF : Une option mixte possible</h2>
                  <p>
                    Avec l&apos;eCRF, une option mixte est disponible qui vous permet
                    d&apos;inclure à la fois des patients avec consentement papier ou
                    électronique. Cela vous offre une flexibilité maximale pour
                    répondre aux besoins de votre étude.
                  </p>
                </CardText>
              </div>
              <div
                className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[800px] xs:mt-10 ${
                  showStates.groupes ? "block" : "hidden"
                }`}
              >
                <CardText>
                  <h2>
                    🏆 Découvrez EOL© par MEDSHARING : Votre solution eCRF
                    simple, robuste et économique
                  </h2>
                  <br />

                  <p>
                    MEDSHARING a conçu <strong>EOL©</strong> pour répondre aux
                    projets d&apos;eCRF de la façon la plus simple, robuste et
                    économique possible. Nous avons utilisé les technologies
                    modernes pour créer une solution qui s&apos;adapte à vos besoins
                    tout en restant facile à utiliser et abordable.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 100% Internet pour une flexibilité maximale</h2>
                  <br />
                  <p>
                    EOL© est bâti sur un modèle 100% internet. Tous ses modules,
                    de la phase de conception à la livraison, en passant par la
                    randomisation, le monitoring, le Data-Management et
                    l&apos;administration, sont accessibles par internet. Peu importe
                    où vous êtes, tant que vous avez une connexion Internet,
                    vous avez accès à EOL©.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Sécurité et fiabilité</h2>
                  <br />

                  <p>
                    Nous stockons chaque nouvelle étude de façon indépendante et
                    sécurisée sur notre plateforme mutualisée d&apos;hébergement
                    d&apos;études cliniques, agréée Hébergement de données de santé
                    en France par notre partenaire OVH. Cette approche garantit
                    la <strong>confidentialité</strong> et la{" "}
                    <strong>sécurité</strong> de vos données.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Compatibilité complète</h2>
                  <p>
                    Notre application est 100% compatible avec tous les
                    navigateurs du marché et tous les types de postes clients.
                    Que vous utilisiez IE 6+, FireFox 2+, Chrome, Opéra 9+,
                    Safari 3+ sur un Mac, un PC, Windows, Linux, un Netbook, un
                    IPAD, ou un IPHONE, EOL© fonctionne parfaitement.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Disponibilité et sécurité optimales</h2>
                  <br />
                  <p>
                    Grâce à son modèle 100% internet, EOL© offre un niveau de
                    disponibilité et de sécurité optimum. Vous pouvez accéder à
                    vos données 24h/24 et 7j/7, en toute tranquillité.
                  </p>
                </CardText>

                <CardText>
                  <h2>🏆 Avantages pour vos études</h2>
                  <ul>
                    <li>
                      👉 <strong>Coûts réduits :</strong> Mutualisation des
                      coûts de maintenance et d&apos;hébergement.
                    </li>
                    <li>
                      👉 <strong>Disponibilité :</strong> Accès à vos données
                      24h/24 et 7j/7.
                    </li>
                    <li>
                      👉 <strong>Confidentialité et sécurité :</strong> Respect
                      des exigences de la santé.
                    </li>
                    <li>
                      👉 <strong>Simplicité et rapidité :</strong> Mise en place
                      facile et rapide.
                    </li>
                    <li>
                      👉 <strong>Agilité :</strong> Création et gestion facile
                      des centres et des investigateurs.
                    </li>
                    <li>
                      👉 <strong>Adaptabilité :</strong> Réactivité d&apos;adaptation
                      de votre eCRF aux exigences de vos études.
                    </li>
                    <li>
                      👉 <strong>Autonomie :</strong> Vos équipes sont
                      totalement autonomes pendant toute la durée de l&apos;étude.
                    </li>
                  </ul>
                </CardText>

                <CardText>
                  <h2>Notre choix : La parfaite adéquation</h2>
                  <br />
                  <p>
                    MEDSHARING a choisi ce modèle pour sa parfaite adéquation
                    entre les nouvelles technologies de l&apos;information et les
                    nouveaux enjeux et problématiques de la recherche clinique
                    d&apos;aujourd&apos;hui.
                  </p>
                </CardText>
              </div>
              <div
                className={`font-poppins font-normal text-[18px] leading-[30.8px] max-w-[800px] xs:mt-10 ${
                  showStates.kit ? "block" : "hidden"
                }`}
                
              >
                <div className="white__gradient left-[50%] bottom-[50%] w-[20%] h-[20%] absolute xxs:hidden md:block"></div>
                <CardText>
                  <h2>
                    {" "}
                    🏆 RANDOMIZER for CLINICAL TRIAL : l&apos;outil ultime pour la
                    gestion de vos patients
                  </h2>
                  <br />
                  <p>
                    Enrichissez vos études cliniques avec notre solution
                    innovante : le{" "}
                    <strong>RANDOMIZER for CLINICAL TRIAL</strong>. Cette
                    application intègre une fonctionnalité vous permettant
                    d&apos;exporter directement et{" "}
                    <strong>de manière complètement autonome</strong> vos listes
                    de patients sous Excel. Et le meilleur ? Il n&apos;y a{" "}
                    <strong>aucune limite</strong> à la quantité de données que
                    vous pouvez exporter.
                  </p>
                </CardText>

                <CardText>
                  <h2> 🏆 Téléchargez dès maintenant</h2>
                  <p>
                    Prenez de l&apos;avance dès aujourd&apos;hui en téléchargeant notre
                    application. Vous pouvez la trouver sur l’AppStore en
                    utilisant des mots clés tels que{" "}
                    <strong>Medsharing, Randomization, Randomizer</strong>... ou
                    directement depuis la page de notre site consacrée à la{" "}
                    <strong>Randomisation iPhone-iPad</strong>.
                  </p>
                </CardText>

                <br />
                <CardText>
                  <h2> 🏆 Simple et efficace</h2>
                  <p>
                    Nous avons conçu cette application pour qu&apos;elle soit à la
                    fois <strong>simple et pratique à utiliser</strong>. Elle
                    s’intègre parfaitement dans la gestion de tous types
                    d’études, qu&apos;elles soient petites ou grandes, simples ou
                    complexes.
                  </p>
                </CardText>

                <CardText>
                  <h2> 🏆 Incluez un nombre illimité de patients</h2>
                  <p>
                    Avec le RANDOMIZER for CLINICAL TRIAL, vous pouvez inclure
                    un nombre illimité de patients dans autant d’études que vous
                    le souhaitez. Ne vous préoccupez plus des limites et
                    concentrez-vous sur ce qui compte vraiment : la réalisation
                    de vos études cliniques.
                  </p>
                </CardText>

                <CardText>
                  <h2>
                    {" "}
                    🏆 Commencez à transformer vos études cliniques dès
                    aujourd&apos;hui !
                  </h2>
                  <p>
                    Ne perdez plus de temps, rejoignez le futur des études
                    cliniques avec le RANDOMIZER for CLINICAL TRIAL.{" "}
                  </p>
                </CardText>
              </div>
            </div>
            
            <div className="flex justify-center  sm:my-5 sm:px-16 px-6 sm:py-12 py-4 flex-col bg-black-gradient-2 max-w-[800px] rounded-[20px] box-shadow">
              <h2>
                Vous voulez en savoir plus ? Contactez-nous dès aujourd&apos;hui !
              </h2>
              <br />
              Nous serions ravis de vous fournir plus de détails sur nos
              solutions et de vous montrer comment notre logiciel peut
              transformer vos études cliniques.{" "}
              <strong>Programmez une démo par webconférence ou</strong>
              <Link to="mailto:info@medsharing.fr">
                <Button customClass={`mt-5`} text="Contactez-nous"></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="white__gradient right-0 w-[40%] h-[40%] absolute xxs:hidden md:block"></div>
      <div className="ripple-background xxs:hidden md:block"></div>
      <div className="circle small-l shade1 xxs:hidden md:block"></div>
      <div className="circle medium-l shade2 xxs:hidden md:block"></div>
      <div className="ripple-background left-[100%] top-[100%]"></div>

      <div className="ripple-background xxs:hidden md:block"></div>
      <div className="circle small-r shade1 xxs:hidden md:block"></div>
      <div className="circle medium-r shade2 xxs:hidden md:block"></div>  
      <div className="ripple-background right-[100%] top-[100%] xxs:hidden md:block"></div>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
