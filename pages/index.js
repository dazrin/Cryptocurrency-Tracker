// Import components/ dependencies
import SearchBar from "../components/SearchBar";
import CoinList from "../components/CoinList";

export default function Home({ coinsData }) {

  return (
    <div>
      <SearchBar type="text" placeholder="Search" />
      <CoinList coinsData={coinsData} />
    </div>
  )
}

// == Asynchronous function to get props from server ==
// In this case, we are fetching data from the CoinGecko API and passing it into our application as a prop

export const getServerSideProps = async () => {

  // Declaring variable res storing fetch data from request url 
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');

  // Declaring variable storing fetched data in JSON format to be used as a prop
  const coinsData = await res.json();

  return {
    props: {
      coinsData
    }
  }
}