import styles from '../../styles/Coin.module.css';

const Coin = ({ coin }) => {
    return (
        <div className={styles.coin__page}>
            <div className={styles.coin__container}>
                <img src={coin.image.large} alt={coin.name} className={styles.coin__image} />
                <h1 className={styles.coin__name}>{coin.name}</h1>
                <p className={styles.coin__ticker}>{coin.symbol}</p>
                <p className={styles.coin__current}>{coin.market_data.current_price.usd}</p>
            </div>

        </div>
    )
}

export default Coin;

// == Asynchronous function to get props from server ==
// In this case, we are fetching data from the CoinGecko API and passing it into our app as a prop

export const getServerSideProps = async (context) => {

    // Accesses the query of the endpoint and maps it to id
    const { id } = context.query;

    // Declaring variable res storing fetch data from request url 
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

    // Declaring variable storing fetched data in JSON format to be used as a prop 
    const data = await res.json();

  
    return {
      props: {
        coin: data
      }
    }
  }
