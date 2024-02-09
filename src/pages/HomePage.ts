import Content from "../components/Content/Content";
import Header from "../components/Header/Header";

const HomePage = {
  render() {
    return `<div class="p-3">
      ${Header.render()}
      ${Content.render()}
    </div>`;
  },
};

export default HomePage;
