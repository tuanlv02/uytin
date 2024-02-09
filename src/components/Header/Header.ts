import styles from "./index.module.scss";

const Header = {
  render() {
    return `
      <div class="text-center">
        <img src=${import.meta.env.VITE_AVATAR_URL} src="Avatar" class=${
      styles.avatar
    } />
        
        <h1 class=${styles.name}>
          <a href=${
            import.meta.env.VITE_FB_URL
          } target="_blank">Lê Văn Tuân (Demo)</a>
        </h1>
      </div>
    `;
  },
};

export default Header;
