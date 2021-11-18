const settings = {
  name: "frontity-test",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Nichiren Library",
      description: "Per studiare gli scritti buddisti",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["RSND Vol.1", "/category/vol1/"],
            ["RSND Vol.2", "/category/vol2/"],
            ["Sutra del Loto", "/category/sdl/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          //"url": "https://test.frontity.org"
          url: "https://ereditadellavita.it/library",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
