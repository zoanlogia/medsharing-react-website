import {motion as m} from "framer-motion";

const Rainfall = () => {
    const iconVariants = {
      hidden: { opacity: 0, y: "-100%" },
      visible: { opacity: 1, y: "100%", transition: { duration: 1, ease: "linear" } },
    };
  
    const iconContainerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: 1, // Délai avant le début de l'animation
          staggerChildren: 0.1, // Intervalle entre chaque icône
        },
      },
    };
  
    const icons = [
      // Ajoutez ici les icônes de félicitations🍾🎉
      // Exemple : <FontAwesomeIcon icon={faHeart} size="2x" />
    ];
  
    return (
      <m.div
        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
        variants={iconContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {icons.map((icon, index) => (
          <m.div key={index} variants={iconVariants} className="flex items-center justify-center">
            {icon}
          </m.div>
        ))}
      </m.div>
    );
  };

export default Rainfall;
