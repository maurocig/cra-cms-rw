import Logo from "./extensions/logo-cra-lowres.png";

export default {
  config: {
    locales: ["es"],
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
