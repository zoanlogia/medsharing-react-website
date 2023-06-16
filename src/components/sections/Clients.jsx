import { clients } from "../../constants/index";
import styles from "../../constants/style";

const Clients = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client) => (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[90px] w-[100px] object-contain"
              />
              <h1>{client.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
