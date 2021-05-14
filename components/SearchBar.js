import styles from '../styles/Searchbar.module.css'

const SearchBar = ({  ...rest }) => {
    return (
        <div className={styles.coin__search}>
            <input className={styles.coin__input} {...rest} />
        </div>
    )
}

export default SearchBar
